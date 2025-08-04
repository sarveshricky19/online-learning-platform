import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/courses" /> : <LoginPage />} />
        <Route path="/courses" element={isLoggedIn ? <CoursesPage /> : <Navigate to="/login" />} />
        <Route path="/courses/:id" element={isLoggedIn ? <CourseDetailPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/courses" />} />
      </Routes>
    </Router>
  );
}

export default App;
