import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'
export default function Loading() {
  const [progress, setProgress] = React.useState(0);
  const navigate=useNavigate()
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ?navigate('/home'): prevProgress + 10));
    },800);
    return timer
  }, []);
  return (
    <Stack spacing={65} direction="row">
      <CircularProgress variant="determinate" value={progress} />
    </Stack>
  );
}