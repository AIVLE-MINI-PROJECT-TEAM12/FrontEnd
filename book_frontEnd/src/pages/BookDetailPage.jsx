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

  const userName = localStorage.getItem('userName'); // ✅ 로그인한 사용자 이름 불러오기

  useEffect(() => {
    getBookById(id)
      .then(res => {
        console.log("📘 불러온 도서 정보:", res.data);
        console.log("📸 book.book_image:", res.data.book_image);
        setBook(res.data);
      })
      .catch(error => {
        console.error("❌ 도서 정보 불러오기 실패:", error);
      });
  }, [id]);

  const handleDelete = () => {
    deleteBook(id)
      .then(() => navigate('/books/my'))
      .catch(error => {
        console.error("❌ 도서 삭제 실패:", error);
      });
  };

  return (
    <Container sx={{ mt: 5 }}>
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
              <Typography sx={{ mt: 4 }}>작성자: {userName}</Typography>
              <Typography sx={{ mt: 4 }}>작성일: {book.create_date}</Typography>
              <Typography sx={{ mt: 4 }}>수정일: {book.modify_date}</Typography>
              <Typography sx={{ mt: 4 }}>본문: {book.summary}</Typography>

              {(book.book_image && typeof book.book_image === 'string') ? (
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Typography
                    sx={{
                      position: 'relative',
                      top: '-80px'
                    }}
                  >
                    표지:
                  </Typography>
                  <img
                    src={book.book_image}
                    alt="cover"
                    width="180"
                    style={{
                      borderRadius: '8px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                    onError={() =>
                      console.error("❌ 표지 이미지 로드 실패:", book.book_image)
                    }
                  />
                </Box>
              ) : (
                <Typography sx={{ mt: 2, color: 'gray' }}>
                  ⚠️ 아직 표지가 생성되지 않았습니다.
                </Typography>
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

          {/* 삭제 확인 단일로그 */}
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
