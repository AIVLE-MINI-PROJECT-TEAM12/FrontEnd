import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../api/bookApi';
import { Container, Typography, Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import BookTable from '../components/BookTable';
import SearchBar from '../components/SearchBar';

export default function MyBooksPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // 로그인된 사용자 정보
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    getBooks()
      .then(res => {
        const allBooks = res.data;
        const myBooks = allBooks.filter(book => book.userId === userId);
        setBooks(myBooks);
      })
      .catch(err => console.error('❌ API 에러:', err));
  }, [userId]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom mt="100px">
        {userName}님의 도서 목록
        <LocalLibraryIcon color="secondary" style={{fontsize: '20rem', ml:"10rem"}}/>
      </Typography>
      
      <SearchBar />
      <Button
        variant="contained"
        sx={{ mb: 2 }}
        style={{ marginTop: "40px" }}
        onClick={() => navigate('/books/new')}
      >
        등록
      </Button>
      <BookTable books={books} />
    </Container>
  );
}
