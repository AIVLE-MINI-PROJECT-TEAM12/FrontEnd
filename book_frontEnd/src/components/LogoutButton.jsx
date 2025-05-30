import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/');
    };

  return (
    <Button
      variant="outlined"
      sx={{ mt: 2, ml: 2 }}
      onClick={logoutHandler} // ← 특정 경로로 이동
      startIcon={<LogoutIcon />}
    >
      로그아웃
    </Button>
  );
}