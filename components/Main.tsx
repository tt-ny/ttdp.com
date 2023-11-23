import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Post1 from './blog-post.1.mdx';
import Post2 from './blog-post.2.mdx';
import Post3 from './blog-post.3.mdx';

interface MainProps {
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;

  return (
    <Grid item xs={12} md={9} sx={{ mt: -4 }} >
      <Post1 />
      <Divider />
      <Post2 />
      <Divider />
      <Post3 />
    </Grid>
  );
}