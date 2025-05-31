// 📁 src/pages/LoginPage.jsx
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from "../api/bookApi.js";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userId = data.get('userId');
    const userName = data.get('userName');

    try {
      const res = await login(userId, userName);
      console.log("✅ 로그인 성공:", res.data);

      // 🔐 응답 데이터에서 user_id 추출 (백엔드에서 user_id 반환 안하면 입력값 사용)
      const returnedUserId = res.data.user_id ?? userId;

      // ✅ localStorage에 로그인 정보 저장
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', returnedUserId);
      localStorage.setItem('userName', userName);

      navigate('/books/my');  // 내 도서 페이지로 이동
    } catch (e) {
      console.error("❌ 로그인 실패:", e);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userId"
              label="아이디"
              name="userId"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="이름"
              name="userName"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
