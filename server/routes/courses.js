const router = require('express').Router();
const Course = require('../models/Course');
const { verifyToken, permit } = require('../middleware/auth');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'username');
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new course (instructor only)
router.post('/', verifyToken, permit('instructor'), async (req, res) => {
  try {
    const { title, description, lessons } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const course = new Course({
      title,
      description,
      lessons,
      instructor: req.user.id
    });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
