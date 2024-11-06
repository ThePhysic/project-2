// client/src/components/Dashboard.js
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Typography variant="h2" gutterBottom style={{ color: '#ffcc00', fontWeight: 'bold' }}>
        Welcome to Space Explorer
      </Typography>
      <Typography variant="h5" style={{ marginBottom: '20px', maxWidth: '600px' }}>
        Dive into the universe with our interactive features, explore celestial bodies, and stay updated with the latest space news.
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/universe')}
          sx={{ color: '#ffcc00', backgroundColor: '#333' }}
        >
          Explore the Universe
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/news')}
          sx={{ color: '#ffcc00', backgroundColor: '#333' }}
        >
          Space News
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/solar-system')}
          sx={{ color: '#ffcc00', backgroundColor: '#333' }}
        >
          Solar System
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
