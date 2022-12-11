import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './KittyImage.module.css';
import { Button } from '@mui/material';

export interface IKitty {
  id: string;
  url: string;
  width: number;
  height: number;
}

const KittyFetcher = () => {
  const [kitty, setKitty] = useState<IKitty>();
     
  const fetchNewKitty = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const kittyData = response.data[0];
      setKitty(kittyData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchKitty() {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const kittyData = response.data[0];
        setKitty(kittyData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchKitty();
  }, []);

  return (
    <div className={styles.container}>
        <h1>Picture of a random kitty</h1>
      <div className={styles.flexContainer}>
          {kitty ? (
            <img className={styles.containerImage} src={kitty.url} alt="Cute kitty" />
          ) : (
            <p>Loading kitty...</p>
          )}
      </div>
          <Button variant="contained" onClick={() => fetchNewKitty()}>Get new image of a kitty</Button>
    </div>
  );
}

export default KittyFetcher;
