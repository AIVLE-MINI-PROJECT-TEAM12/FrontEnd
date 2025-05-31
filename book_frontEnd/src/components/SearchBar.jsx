// 📁 src/components/SearchBar.jsx
import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value); // <-- 여기서 오류난다면 props가 전달 안된 것
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, my: 2 }}
      onSubmit={handleSearch}
    >
      <InputBase
        inputRef={inputRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="도서 제목을 입력하세요"
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
