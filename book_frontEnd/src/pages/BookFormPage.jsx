// 📁 src/pages/BookFormPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../api/bookApi';
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Box
} from '@mui/material';

export default function BookFormPage() {
  const [form, setForm] = useState({ book_name: '', summary: '' }); // ✅ user_name 제거
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createBook({
      book_name: form.book_name,
      summary: form.summary,
      book_image: null  // 선택 사항
    })
      .then(() => navigate('/books'))
      .catch(err => {
        console.error('도서 등록 실패:', err);
        alert('도서 등록에 실패했습니다. 다시 로그인 해주세요.');
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Stack spacing={3}>
        <Typography variant="h5" gutterBottom>
          도서 등록
        </Typography>

        <Box>
          <Typography variant="subtitle1">1. 도서 제목을 입력해주세요*</Typography>
          <TextField
            fullWidth
            label="제목"
            name="book_name"
            value={form.book_name}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Typography variant="subtitle1">2. 도서 본문을 입력해주세요*</Typography>
          <TextField
            fullWidth
            multiline
            minRows={5}
            label="본문"
            name="summary"
            value={form.summary}
            onChange={handleChange}
          />
        </Box>

        <Box textAlign="right">
          <Button variant="contained" onClick={handleSubmit}>
            등록하기
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
