// client/src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get('/api/apod');
        setApodData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };
    fetchApod();
  }, []);
  

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} style={{ width: '100%', maxWidth: '600px' }} />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
