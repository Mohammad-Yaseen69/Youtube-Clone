import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo, categories } from '../assets'
import SearchBox from './SearchBox'


const Navbar = () => {


  return (
    <Stack
      direction="row" alignItems={"center"} p={2}
      sx={{ position: 'sticky', backgroundColor: '#000', justifyContent: 'space-between', top: '0' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" style={{ height: "40px" }} />
      </Link>

      <SearchBox />
    </Stack>
  )
}

export default Navbar