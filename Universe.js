// client/src/components/Universe.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

// Custom styling for Tabs and Tab components
const CustomTabs = styled(Tabs)({
  '& .MuiTab-root': {
    color: '#b2bec3', // Set color for unselected tabs
    fontWeight: 'bold',
  },
  '& .Mui-selected': {
    color: '#ffcc00', // Set color for the selected tab
  },
});

const Universe = () => {
  const [celestialData, setCelestialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');

  useEffect(() => {
    const fetchCelestialData = async () => {
      try {
        const response = await axios.get('/api/celestial');
        setCelestialData(response.data);
        setFilteredData(response.data); // Initially show all data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching celestial data:", error);
      }
    };
    fetchCelestialData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 'All') {
      setFilteredData(celestialData);
    } else {
      setFilteredData(celestialData.filter(body => body.bodyType === newValue));
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#fff', backgroundColor: '#1a1a1a' }}>
      <Typography variant="h3" gutterBottom style={{ color: '#ffcc00', fontWeight: 'bold' }}>
        Explore the Universe
      </Typography>

      {/* Tabs with custom styling */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '20px' }}>
        <CustomTabs 
          value={selectedTab} 
          onChange={handleTabChange} 
          variant="scrollable" 
          scrollButtons="auto"
          indicatorColor="secondary"
        >
          <Tab label="All" value="All" />
          <Tab label="Planets" value="Planet" />
          <Tab label="Moons" value="Moon" />
          <Tab label="Asteroids" value="Asteroid" />
          <Tab label="Dwarf Planets" value="Dwarf Planet" />
        </CustomTabs>
      </Box>

      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {filteredData.map((body, index) => (
            <Card key={index} sx={{ width: '90%', maxWidth: '600px', bgcolor: '#333', color: '#ddd', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" style={{ color: '#a29bfe', fontWeight: 'bold' }}>
                  {body.englishName}
                </Typography>
                <Typography variant="body2" style={{ color: '#b2bec3', margin: '10px 0' }}>
                  {body.moons ? `Moons: ${body.moons.length}` : 'No moons'}
                </Typography>
                <Typography variant="body2" style={{ color: '#dfe6e9' }}>
                  Type: {body.bodyType}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Universe;
