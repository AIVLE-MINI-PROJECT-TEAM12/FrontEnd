import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const SearchBar = ({onSearch}) => { 
    const inputRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const value= inputRef.current.value;
        console.log(inputRef.current.value);
        onSearch(value);
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSearch}
        >
            
            <InputBase
                inputRef={inputRef}
                sx={{ ml: 1, flex: 1 }}
                placeholder="도서 제목을 입력하세요"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            
        </Paper>
    );
};

export default SearchBar;