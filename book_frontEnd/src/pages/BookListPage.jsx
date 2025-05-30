import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../api/bookApi';
import { Container, Typography, Button } from '@mui/material';
import BookTable from '../components/BookTable';
import SearchBar from '../components/SearchBar';

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks()
      .then(res => {
        console.log('✅ 응답:', res.data);
        setBooks(res.data);
      })
      .catch(err => console.error('❌ API 에러:', err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{marginTop:"40px"}}>
        도서목록
      </Typography>
      <SearchBar />
      <Button
        variant="contained"
        sx={{ mb: 2 }}
        style={{marginTop:"40px"}}
        onClick={() => navigate('/books/new')}
      >
        등록 Button
      </Button>
      <BookTable books={books} />
    </Container>
  );
}