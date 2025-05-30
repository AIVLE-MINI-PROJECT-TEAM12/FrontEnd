// 파일: components/BookForm.jsx
import { TextField, Typography, Button, Stack, Box } from '@mui/material';

export default function BookForm({ form, onChange, onSubmit, buttonLabel }) {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle1">1. 도서 제목을 입력해주세요*</Typography>
        <TextField
          fullWidth
          label="제목"
          name="book_name"
          value={form.book_name}
          onChange={onChange}
          required
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
          onChange={onChange}
        />
      </Box>

      <Box>
        <Typography variant="subtitle1">3. 작성자 이름을 입력해주세요*</Typography>
        <TextField
          fullWidth
          label="작성자"
          name="user_name"
          value={form.user_name}
          onChange={onChange}
          required
        />
      </Box>

      <Box textAlign="right">
        <Button variant="outlined" onClick={onSubmit}>
          {buttonLabel}
        </Button>
      </Box>
    </Stack>
  );
}
