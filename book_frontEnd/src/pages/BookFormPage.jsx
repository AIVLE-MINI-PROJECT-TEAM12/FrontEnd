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
  const [form, setForm] = useState({ book_name: '', summary: '', user_name: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // 실제 API에 맞게 user_name → user_id 매핑 필요 (여기선 간략히 처리)
    createBook({ ...form, user_id: 1 })
      .then(() => navigate('/books'))
      .catch(console.error);
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

        <Box>
          <Typography variant="subtitle1">3. 작성자 이름을 입력해주세요*</Typography>
          <TextField
            fullWidth
            label="작성자"
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
          />
        </Box>

        <Box textAlign="right">
          <Button variant="outlined" onClick={handleSubmit}>
            완료 Button
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
