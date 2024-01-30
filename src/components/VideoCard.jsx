import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../assets';

const VideoCard = ({ video: {
  id: { videoId },
  snippet
} }) => {
  console.log(videoId, snippet);

  return (
    <Card sx={{
      maxWidth: { xs: '100%', sm: '358px', md: "290px" },
      minWidth: { xs: '100%', sm: '358px', md: "100%" },
      boxShadow: "none",
      borderRadius: 1
    }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, minHeight: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: 80 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 58) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard