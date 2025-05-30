import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookTable from '../components/BookTable';
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
    fetch('http://localhost:8080/api/v1/books')
      .then(response => {
        if (!response.ok) throw new Error('네트워크 응답 실패');
        return response.json();
      })
      .then(data => setBooks(data))
      .catch(error => console.error('API 호출 오류:', error));
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      {/* 👉 Stack 적용: 제목과 버튼 수평 배치 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">도서목록</Typography>
        <Button variant="contained" onClick={() => navigate('/books/new')}>
          등록
        </Button>
      </Stack>

      {/* 👉 도서 테이블 */}
      <BookTable books={books} />
    </Container>
  );
};

export default BookList;
