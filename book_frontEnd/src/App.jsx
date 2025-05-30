import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import BookFormPage from './pages/BookFormPage';
import BookDetailPage from './pages/BookDetailPage';
import BookEditPage from './pages/BookEditPage';
import BookCoverPage from './pages/BookCoverPage';
import MyBooksPage from './pages/MyBookListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<MyBooksPage />} />
        {/* <Route path="/books" element={<BookListPage />} /> */}
        <Route path="/books/new" element={<BookFormPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/books/:id/edit" element={<BookEditPage />} />
        <Route path="/books/:id/cover" element={<BookCoverPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;