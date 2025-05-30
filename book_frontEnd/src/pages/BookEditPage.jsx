import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook } from '../api/bookApi';
import BookForm from '../components/BookForm';
import { Container, Typography } from '@mui/material';

export default function BookEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ book_name: '', summary: '', user_id: '' });

  useEffect(() => {
    getBookById(id).then(res => setForm(res.data)).catch(console.error);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateBook(id, form).then(() => navigate(`/books/${id}`)).catch(console.error);
  };

  return (
    <Container>
      <Typography variant="h5">도서 수정</Typography>
      <BookForm form={form} onChange={handleChange} onSubmit={handleSubmit} buttonLabel="수정 완료" />
    </Container>
  );
}