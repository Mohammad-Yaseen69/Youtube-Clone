import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard, ChannelCard } from './';

const Videos = ({ Videos, loading , direction}) => {

   
    return (
           <Stack
            direction={direction? 'column' : 'row'}
            flexWrap='wrap'
            mt={3} gap={2}
            sx={{
                justifyContent: 'start',
                '@media (max-width: 810px)': {
                    justifyContent: 'center',
                },
                flexDirection : (direction ? 'column' : 'row'), // Yahan dekh, agar 'column' set hai to wahi rahega, warna agar direction empty hai ya 'row' hai to 'row' rahega
                '@media (max-width: 600px)': { // Yahan 600px set kiya, agar screen width 600px se choti hogi to column ho jayega
                    flexDirection: 'column',
                },
            }}
        >
            {loading ? <div className='loader'></div> : (
                Videos.map((video, index) => (
                    <Box key={index}>
                        {video.id.videoId && <VideoCard video={video} />}
                        {video.id.channelId && <ChannelCard channelDetail={video} navigated={true}/>}
                    </Box>
                ))
            )}
        </Stack>
    )
}

export default Videos