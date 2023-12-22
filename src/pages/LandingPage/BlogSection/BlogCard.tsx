import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetPostsQuery } from '../../../features/posts/postApi';
import { useDeletePostMutation } from '../../../features/posts/postApi';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  body: string;
}

const truncateText = (text: string, maxWords: number): string => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

const ImgMediaCard = () => {
  const navigate = useNavigate();
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const maxContentHeight = 80;

  const deletePostMutation = useDeletePostMutation();
  const [deletePost] = deletePostMutation;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  const handleToggleContent = (postId: number): void => {
    setExpandedCards((prevExpanded) =>
      prevExpanded.includes(postId)
        ? prevExpanded.filter((id) => id !== postId)
        : [...prevExpanded, postId]
    );
  };

  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId).unwrap();

    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  const handleEditPost = (postId: number, postTitle: string, postBody: string) => {
    // Navigate to the PostEdit component with the post id and data
    navigate(`/user/${postId}/edit_post`, { state: { title: postTitle, body: postBody } });
  };
 
  const indexOfLastPost = (page + 1) * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {currentPosts?.map((post) => (
        <Card key={post.id} style={{ width: '345px', marginBottom: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://img.freepik.com/free-photo/aerial-view-businessman-using-computer-laptop_53876-24739.jpg?w=1380&t=st=1703165102~exp=1703165702~hmac=a42d469a5bcba10bc09147cd16966a37d3d6a328703be47b211b05b8b34eb0cc"
          />
          <CardContent
            style={{ maxHeight: expandedCards.includes(post.id) ? 'none' : maxContentHeight + 'px', overflow: 'hidden' }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {truncateText(post.title, 3)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expandedCards.includes(post.id) ? post.body : truncateText(post.body, 30)}
            </Typography>
          </CardContent>
          {post.body.length > 30 && (
            <CardActions>
              <Button size="small" onClick={() => handleToggleContent(post.id)}>
                {expandedCards.includes(post.id) ? 'Load Less' : 'Load More'}
              </Button>
            </CardActions>
          )}
          <CardActions>
          <Button size="small" onClick={() => handleEditPost(post.id, post.title, post.body)}>
              Edit
            </Button>
            <Button size="small" onClick={() => handleDeletePost(post.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
      <TablePagination
        component="div"
        count={posts?.length || 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ImgMediaCard;
