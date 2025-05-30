// 파일: src/components/BackButton.jsx
// 뒤로 가기 버튼 구현

import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ to = "/books" }) { // to = "/원하는 경로" 로 선언해주고 사용해주면 됩니다다
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      sx={{ mb: 2 }}
      onClick={() => navigate(to)} // ← 특정 경로로 이동
    >
      돌아가기
    </Button>
  );
}
