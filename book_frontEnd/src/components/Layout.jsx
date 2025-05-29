import React from "react";
import {AppBar, Toolbar, Typography, Container, Box, Link} from '@mui/material';
import {Outlet} from 'react-router-dom';

function Copyright() {
    
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Test'}
            <Link color="inherit" href="https://mui.com/">
                AI Book Platform
            </Link>{' '}
            {new Date().getFullYear()}
            {.}
        </Typography>
    );
}

export default function Layout() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeitght: '100vh'}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        AI 도서 창작 플랫폼
                    </Typography>
                    <button>버튼</button>
                </Toolbar>
            </AppBar>

            <Container component="main" sx={{ mt: 4, mb: 2, flexGrow: 1}}>
                <Outlet />
            </Container>

            <Box component="footer" sx={{py: 3, px: 2, mt: 'auto',
                backgroundColor: (theme) => 
                theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1" align="center">
                        작품 만들기!
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
};