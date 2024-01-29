import { Box } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ backgroundColor: "#000" , color : "white"}}>
      <Navbar />

      <Outlet />

      Footer
    </Box>
  )
}

export default App
