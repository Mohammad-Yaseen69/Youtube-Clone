import React, { useState, useEffect } from 'react';
import { fetchData } from '../logic/Fetching';
import { Avatar, Grid, Paper, Typography } from '@mui/material';

const Comments = ({ id, Count }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchData(`commentThreads?part=snippet&videoId=${id}&maxResults=${Count}`)
            .then(data => {
                setComments(data?.items); // Set comments received from API
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, [id, Count]);

    return (
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom style={{ color: 'white' }}>
                Comments
            </Typography>
            <Grid container spacing={2}>
                {comments.map(comment => {
                    const commentContent = comment.snippet.topLevelComment.snippet;
                    return (
                        <Grid key={commentContent.authorChannelId.value} item xs={12}>
                            <Paper
                                style={{
                                    padding: '10px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                }}
                                elevation={3}
                            >
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Avatar alt={commentContent.authorDisplayName} src={commentContent.authorProfileImageUrl} />
                                        <Typography variant="subtitle1">{commentContent.authorDisplayName}</Typography>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography variant="body2">{commentContent.textOriginal}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Comments;
