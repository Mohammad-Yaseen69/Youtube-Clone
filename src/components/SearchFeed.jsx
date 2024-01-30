import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {  Typography, Box } from '@mui/material'
import {  Videos } from './'
import { fetchData } from '../logic/Fetching'


const SearchFeed = () => {
 
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const {searchTerm} = useParams()

  useEffect(() => {
    setLoading(true)
    fetchData(`search?part=snippet&q=${searchTerm}`)
      .then(data => {
        setVideos(data.items);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchTerm])


  return (
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
    
  )
}
export default SearchFeed