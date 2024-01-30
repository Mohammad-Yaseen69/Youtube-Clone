import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { fetchData } from '../logic/Fetching'
import { Box, Stack, Typography } from '@mui/material'
import { Videos } from './'
import { CheckCircle } from '@mui/icons-material'


const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, SetVideoDetail] = useState(null)
  const [loading, SetLoading] = useState(true)
  const [videos, SetVideos] = useState([])


  useEffect(() => {
    SetLoading(true)
    SetVideoDetail(null)
    SetVideos([])

    fetchData(`videos?part=snippet,statistics&id=${id}`).then(data => {
      SetVideoDetail(data.items[0]);
    }).finally(() => SetLoading(false))

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(datavideos => {
      SetVideos(datavideos.items)
    })
    fetchData()
  }, [id])
  console.log(videoDetail);

  return (
    <Box minHeight='95vh'>
      {loading ? <div className='loader'></div> :
        <Stack direction={{ xs: 'column', md: 'row' }} gap={4} px={2}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
              <Typography variant='h5' mt={3} fontWeight='bold' color='#fff'>{videoDetail?.snippet.title}</Typography>
              <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                  <Typography variant='subtitle1' color='#fff'>
                    {videoDetail?.snippet.channelTitle}

                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>

                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7, color: 'white' }}>
                    {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7, color: 'white' }}>
                    {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box px={2} py={{ md: 1, xs: 5 }} flex={0} justifyContent="center" alignItems="center" >
            <Videos Videos={videos} direction="column" />
          </Box>
        </Stack>
      }
    </Box>
  )
}

export default VideoDetail 