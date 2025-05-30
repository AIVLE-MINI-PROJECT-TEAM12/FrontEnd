import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import BookListPage from './pages/BookListPage';
import BookFormPage from './pages/BookFormPage';
import BookDetailPage from './pages/BookDetailPage';
import BookEditPage from './pages/BookEditPage';
import BookCoverPage from './pages/BookCoverPage';
import MyBooksPage from './pages/MyBookListPage';
import Logo from './components/Logo';
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Logo style={{marginleft: "-100px"}}/>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<MyBooksPage />} />
        {/* <Route path="/books" element={<BookListPage />} /> */}
        <Route path="/books/new" element={<BookFormPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/books/:id/edit" element={<BookEditPage />} />
        <Route path="/books/:id/cover" element={<BookCoverPage />} />
          <Route path="/books/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;