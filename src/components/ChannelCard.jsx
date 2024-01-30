import { CheckCircle } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { demoProfilePicture } from '../assets'


const ChannelCard = ({ channelDetail, navigated }) => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: { xs: '100%', sm: '358px', md: "290px" },
        minWidth: { xs: '100%', sm: '358px', md: "100%" },
        height: '326px',
        mx: 4
      }}
    >

      <div onClick={() => {
        if (navigated) {
          navigate(`/channel/${channelDetail?.id?.channelId}`)
        }
      }} style={{cursor : navigated ? 'pointer' : 'auto'}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </div>

    </Box>
  )
}

export default ChannelCard