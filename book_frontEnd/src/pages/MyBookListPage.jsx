import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../api/bookApi';
import { Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookTable from '../components/BookTable';
import SearchBar from '../components/SearchBar';
import LogoutButton from '../components/LogoutButton';
import Logo from '../components/Logo';

export default function MyBooksPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');


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

 // 필터링된 책 목록
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 1 
      }}>

        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
          <Typography variant="h3" >
            {userName}님의 도서 목록
            <LocalLibraryIcon
            color="secondary"
            fontSize='inherit'
            sx={{fontsize: '3rem', ml: 2}}/>
          </Typography>
        </Box>

        <Box sx={{ 
            gap: '13px',
            display: 'flex',
            alignItems: 'center'}}>
          <LogoutButton />
          <Logo />
        </Box>
      </Box>
      <SearchBar onSearch={setSearchTerm} />
      <Button
        variant="contained"
        sx={{ mb: 2 }}
        style={{ marginTop: "40px" }}
        onClick={() => navigate('/books/new')}
      >
        등록
      </Button>
      <BookTable books={filteredBooks} /> 
    </Container>
  );
}
