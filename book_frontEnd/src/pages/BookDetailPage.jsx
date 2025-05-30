import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton'; 
import { getBookById, deleteBook } from '../api/bookApi';
import {
  Typography,
  Container,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  Grid,
  Box
} from '@mui/material';

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getBookById(id)
      .then(res => setBook(res.data))
      .catch(console.error);
  }, [id]);

  const handleDelete = () => {
    deleteBook(id)
      .then(() => navigate('/books'))
      .catch(console.error);
  };

  return (
    <Container sx={{ mt: 5 }}>
      {/* ✅ 이전 페이지로 가는 버튼 */}
      <BackButton />

      {book && (
        <Grid container spacing={3}>
          {/* 왼쪽 정보 영역 */}
          <Grid item xs={12} md={8}>
            <Box
              p={3}
              sx={{
                backgroundImage: 'url(/assets/notepad-bg.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '600px',
                borderRadius: 2,
                px: 5,
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 2,
                color: '#333',
                fontWeight: 500,
                fontSize: '1rem'
              }}
            >
              <Typography>제목: {book.book_name}</Typography>
              <Typography sx={{ mt: 4 }}>작성자: {book.user_name}</Typography>
              <Typography sx={{ mt: 4 }}>작성일: {book.create_date}</Typography>
              <Typography sx={{ mt: 4 }}>수정일: {book.modify_date}</Typography>
              <Typography sx={{ mt: 4 }}>본문: {book.summary}</Typography>
              {book.book_image && (
                <Box sx={{ mt: 4 }}>
                  <Typography>표지:</Typography>
                  <img src={book.book_image} alt="cover" width="200" />
                </Box>
              )}
            </Box>
          </Grid>

          {/* 오른쪽 버튼 영역 */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Button variant="outlined" onClick={() => navigate(`/books/${id}/edit`)}>
                수정 Button
              </Button>
              <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
                삭제 Button
              </Button>
              <Button variant="contained" onClick={() => navigate(`/books/${id}/cover`)}>
                표지 생성 Button
              </Button>
            </Stack>
          </Grid>

          {/* 삭제 확인 다이얼로그 */}
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>도서를 삭제하시겠습니까?</DialogTitle>
            <DialogActions sx={{ justifyContent: 'center', mb: 1 }}>
              <Button variant="outlined" onClick={handleDelete} sx={{ bgcolor: '#d0ece7' }}>네</Button>
              <Button variant="outlined" onClick={() => setOpen(false)} sx={{ bgcolor: '#f5f5f5' }}>아니요</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      )}
    </Container>
  );
}
