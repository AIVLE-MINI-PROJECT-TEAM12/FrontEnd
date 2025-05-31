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
import {login} from "../api/bookApi.js";
import {useNavigate} from "react-router-dom";


const theme = createTheme();

export default function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userId = data.get('userId')
        const userName = data.get('userName')

        try{
            const res = await login(userId, userName);
            console.log("로그인에 성공했습니다.", res.data);
            localStorage.setItem('token',res.data['token']);
            localStorage.setItem('userName',userName);
            navigate('/books');
        } catch(e){
            console.error("로그인에 실패하였습니다.", e);

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
                            id="userName"
                            label="이름"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userId"
                            label="아이디"
                            name="userId"
                            autoComplete="userId"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}