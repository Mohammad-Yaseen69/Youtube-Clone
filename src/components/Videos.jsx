import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard, ChannelCard } from './';

const Videos = ({ Videos, loading }) => {

    console.log(Videos);
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            mt={3} gap={2}
            sx={{
                justifyContent: 'start',
                '@media (max-width: 810px)': {
                    justifyContent: 'center',
                },
            }}
        >
            {loading ? <div className='loader'></div> : (
                Videos.map((video, index) => (
                    <Box key={index}>
                        {video.id.videoId && <VideoCard video={video} />}
                        {video.id.channelId && <ChannelCard channelDetail={video} />}
                    </Box>
                ))
            )}
        </Stack>
    )
}

export default Videos