// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import BookFormPage from './pages/BookFormPage';
import BookEditPage from './pages/BookEditPage';
import BookCoverPage from './pages/BookCoverPage';
import LoginPage from './pages/LoginPage';
import MyBookListPage from './pages/MyBookListPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // ✅ localStorage token이 변경될 때마다 로그인 상태 재확인
useEffect(() => {
  const token = localStorage.getItem('token');
  setIsLogin(!!token);
}, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/books" element={isLogin ? <BookListPage /> : <Navigate to="/login" />} />
        <Route path="/books/my" element={isLogin ? <MyBookListPage /> : <Navigate to="/login" />} />
        <Route path="/books/new" element={isLogin ? <BookFormPage /> : <Navigate to="/login" />} />
        <Route path="/books/:id" element={isLogin ? <BookDetailPage /> : <Navigate to="/login" />} />
        <Route path="/books/:id/edit" element={isLogin ? <BookEditPage /> : <Navigate to="/login" />} />
        <Route path="/books/:id/cover" element={isLogin ? <BookCoverPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
