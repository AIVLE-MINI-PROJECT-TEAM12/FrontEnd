import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateCover, getBookById } from '../api/bookApi';
import { Container, Typography, Button } from '@mui/material';

export default function BookCoverPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cover, setCover] = useState(null);

  useEffect(() => {
    generateCover(id)
      .then(() => getBookById(id))
      .then(res => setCover(res.data.book_image))
      .catch(console.error);
  }, [id]);

  return (
    <Container>
      <Typography variant="h5">표지 생성 중입니다...</Typography>
      {cover && <img src={cover} alt="생성된 표지" width="200" />}
      <Button variant="contained" onClick={() => navigate(`/books/${id}`)} sx={{ mt: 2 }}>생성 완료</Button>
    </Container>
  );
}