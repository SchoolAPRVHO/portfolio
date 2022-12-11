import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Dad Joke</h1>
      <button onClick={getDadJoke}>Get Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default DadJoke;
