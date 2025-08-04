import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/courses/${id}`, { headers: { Authorization: 'Bearer ' + token } });
        setCourse(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '1rem' }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Lessons:</h3>
      <ul>
        {course.lessons.map((lesson, index) => (
          <li key={index}>
            <p>{lesson.title}</p>
            <video width="600" controls>
              <source src={lesson.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
      <Link to="/courses">Back to courses</Link>
    </div>
  );
}

export default CourseDetailPage;
