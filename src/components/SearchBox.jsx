import { SearchRounded } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    const navigate = useNavigate()
    return (
        <Paper
            component='form'
            onSubmit={(e) => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                type="search"
                className="search-bar"
                placeholder="Search..."
                style={{border : 'none'}}
                onChange={(e) => navigate(`/search/${e.target.value}`)}
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <SearchRounded />
            </IconButton>
        </Paper>
    )
}

export default SearchBox