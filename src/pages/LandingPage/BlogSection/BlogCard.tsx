import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetPostsQuery } from '../../../features/posts/postApi';

export default function ImgMediaCard() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap',  justifyContent: 'center', }}>
      {posts?.map((post) => (
        <Card key={post.id} style={{ width: '345px', marginBottom: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://img.freepik.com/free-photo/aerial-view-businessman-using-computer-laptop_53876-24739.jpg?w=1380&t=st=1703165102~exp=1703165702~hmac=a42d469a5bcba10bc09147cd16966a37d3d6a328703be47b211b05b8b34eb0cc"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
