import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BookTable({ books }) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>도서제목</TableCell>
          <TableCell>작성자</TableCell>
          <TableCell>작성일</TableCell>
          <TableCell>상세</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map(book => (
          <TableRow key={book.book_id}>
            <TableCell>📘 {book.book_name}</TableCell>
            <TableCell>{book.user_name}</TableCell>
            <TableCell>{book.create_date?.substring(0, 10)}</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                onClick={() => navigate(`/books/${book.book_id}`)}
              >
                상세 보기
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
