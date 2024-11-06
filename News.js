// client/src/components/News.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const News = () => {
  const [loading, setLoading] = useState(false);

  // Space News Articles:
  const articles = [
    {
      title: "Ancient River Is Helping NASA’s Perseverance Mars Rover Do Its Work",
      url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/ancient-river-is-helping-nasas-perseverance-mars-rover-do-its-work/",
      summary: "NASA’s Perseverance Rover explores the remains of an ancient river on Mars to understand the planet’s history.",
    },
    {
      title: "SpaceX rocket launches Europe's Hera planetary defense probe to visit asteroid smacked by NASA",
      url: "https://www.space.com/spacex-esa-hera-asteroid-mission-launch-success",
      summary: "SpaceX successfully launches Hera planetary defense probe to investigate asteroids after NASA's DART mission.",
    },
    {
      title: "First Image of a Black Hole",
      url: "https://science.nasa.gov/resource/first-image-of-a-black-hole/",
      summary: "NASA captures the first-ever image of a black hole, providing a groundbreaking look at these mysterious objects.",
    },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <Typography variant="h3" style={{ color: '#ffcc00', textAlign: 'center', marginBottom: '30px' }}>
        Space News
      </Typography>
      {loading ? (
        <Typography variant="h6" style={{ color: '#fff', textAlign: 'center' }}>Loading...</Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {articles.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: '#333', color: '#ddd', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h5" style={{ color: '#ffcc00', fontWeight: 'bold' }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" style={{ marginBottom: '10px' }}>
                    {article.summary}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: 'auto', color: '#ffcc00', borderColor: '#ffcc00' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default News;
