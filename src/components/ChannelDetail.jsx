import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChannelCard, VideoCard, Videos } from './'
import { fetchData } from '../logic/Fetching'

const ChannelDetail = () => {
  const ChannelId = useParams().id
  const [channel, setChannel] = useState()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${ChannelId}`).
      then(data => {
        setChannel(data.items[0])
      })

    fetchData(`search?part=snippet&channelId=${ChannelId}&order=date`)
      .then(data => {
        setVideos(data.items)
      })
  }, [ChannelId])


  return (
    <Box minHeight="95vh" display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'}>
      <Box >
        <div style={{
          height: '200px',
          width: '100vw',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channel} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex" justifyContent={'center'} alignItems={'center'}>
        <Videos Videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail