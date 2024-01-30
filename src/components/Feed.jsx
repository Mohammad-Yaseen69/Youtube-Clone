import { useState, useEffect } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { SideBar, Videos } from './'
import { fetchData } from '../logic/Fetching'


const Feed = () => {
  const [SelectedCategory, SetSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true
  )

  useEffect(() => {
    setLoading(true)
    fetchData(`search?part=snippet&q=${SelectedCategory}`)
      .then(data => {
        setVideos(data.items);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [SelectedCategory])


  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        // mb  : 2
      }}
    >
      <Box sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #e0e0e0",
        px: { sx: 0, md: 2 },
      }}>

        <SideBar SelectedCategory={SelectedCategory} SetSelectedCategory={SetSelectedCategory} />
        <Typography className='copyright' >
          Copyright 2024 Youtube Clone
        </Typography>
      </Box>

      <Box
        p={3}
        sx={{
          overflowY: "auto",
          height: "92vh",
        }}

      >
        <Typography
          color='white'
          variant='h4'
          fontWeight='bold'
          justifySelf='center'
        >
          {SelectedCategory}
          <span style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingLeft: "0.5rem",
            color: 'red'
          }}>
            videos
          </span>
        </Typography>

        <Videos Videos={videos} loading={loading} />
      </Box>
    </Stack>
  )
}

export default Feed