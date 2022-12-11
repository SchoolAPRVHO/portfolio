import React, { useState } from "react";
import axios from "axios";
import styles from "./Dadjoke.module.css";

const DadJoke = () => {
  const [joke, setJoke] = useState("");

  const getDadJoke = async () => {
    try {
      // Make the request to the Dad Joke API
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });

      // Set the joke state with the joke from the API response
      setJoke(response.data.joke);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Dad Joke</h1>
      <div className={styles.flex}>
        {joke && <p>{joke}</p>}
        <button className={styles.button}onClick={getDadJoke}>Get Joke</button>
      </div>
    </div>
  );
};

export default DadJoke;
