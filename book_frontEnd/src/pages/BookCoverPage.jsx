import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '../api/bookApi';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

export default function BookCoverPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(true);

  const openaiApiKey = "//open-ai-key";

  useEffect(() => {
    getBookById(id)
      .then(res => {
        const title = res.data.book_name;
        return axios.post(
          'https://api.openai.com/v1/images/generations',
          {
            model: "dall-e-3",
            prompt: `A beautifully designed book cover for the title "${title}"`,
            n: 1,
            size: "1024x1024"
          },
          {
            headers: {
              Authorization: `Bearer ${openaiApiKey}`,
              "Content-Type": "application/json"
            }
          }
        );
      })
      .then(response => {
        const imageUrl = response.data.data[0].url;
        setCover(imageUrl);

        // ✅ JSON 형태로 전송
        return axios.post(`/api/v1/books/${id}/cover`, { imageUrl }, {
  headers: { 'Content-Type': 'application/json' }
});
      })
      .then(() => setLoading(false))
      .catch(err => {
        console.error("❌ 이미지 생성 실패:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>표지를 생성 중입니다...</Typography>
      {loading && <CircularProgress />}
      {!loading && cover && (
        <>
          <img
            src={cover}
            alt="생성된 표지"
            width="256"
            style={{ marginTop: '1rem', borderRadius: '8px' }}
          />
          <Button variant="contained" onClick={() => navigate(`/books/${id}`)} sx={{ mt: 2 }}>
            생성 완료
          </Button>
        </>
      )}
    </Container>
  );
}
