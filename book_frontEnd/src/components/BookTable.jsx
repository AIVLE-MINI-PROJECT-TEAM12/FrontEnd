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
        {books.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} align="center">
              📭 등록된 도서가 없습니다.
            </TableCell>
          </TableRow>
        ) : (
          books.map(book => (
            <TableRow key={book.book_id}>
              <TableCell>📘 {book.book_name}</TableCell>
              <TableCell>{book.user_name ?? '알 수 없음'}</TableCell>
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
          ))
        )}
      </TableBody>
    </Table>
  );
}
