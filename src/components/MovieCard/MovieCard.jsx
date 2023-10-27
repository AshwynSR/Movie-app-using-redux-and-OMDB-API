import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./MovieCard.css"
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MovieCard(props) {
  const {data} = props;
  return (
    <Card className="card-item" variant="outlined" sx={{ bgcolor: "#EFE1D1" }}>
      <Link to={`/movie/${data.imdbID}`}>
      <CardMedia
        component="img"
        height="350"
        image={data.Poster}
      />
      <CardContent >
        <Typography color="text.primary" variant="h5" fontWeight='bold' component="div">
          {data.Title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.Year}
        </Typography>
      </CardContent>
      </Link>
    </Card>
  );
}
