import React from 'react';
import axios from 'axios';

const CleanURIAPI = 'https://cleanuri.com/api/v1/shorten';

const UrlShorten = () => {
  const [shortUrl, setShortUrl] = React.useState(null);

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const longUrl = event.target.elements.longUrl.value;

    try {
      const response = await axios.post(CleanURIAPI, {
        long_url: longUrl
      });

      setShortUrl(response.data.short_url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Long URL:
        <input type="text" name="longUrl" />
      </label>

      <button type="submit">Shorten</button>

      {shortUrl ? <p>Short URL: {shortUrl}</p> : null}
    </form>
  );
}

export default UrlShorten;