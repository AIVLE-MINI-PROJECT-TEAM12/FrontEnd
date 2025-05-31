// 📁 src/pages/BookList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookTable from '../components/BookTable';
import { getBooks } from '../api/bookApi';  // ✅ axios 기반 API 사용
import {
  Typography,
  Container,
  Stack,
  Button
} from '@mui/material';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  console.log("✅ BookList 진입");

  getBooks()
    .then(res => {
      console.log("📦 도서 목록:", res.data);
      setBooks(res.data);
    })
    .catch(err => {
      console.error("도서 목록 조회 실패:", err);
    });
}, []);



  return (
    <Container sx={{ mt: 5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">도서목록</Typography>
        <Button variant="contained" onClick={() => navigate('/books/new')}>
          등록
        </Button>
      </Stack>

      {/* 도서 테이블 컴포넌트 */}
      <BookTable books={books} />
    </Container>
  );
};

export default BookList;
