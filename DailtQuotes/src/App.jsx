import { useState, useEffect } from "react";

function App() {
  const [backgroundImage, setBacgroundImage] = useState([]);
  const apiKey = "_n7JT400hcnqytDWaOTEi6dJ0BD_PTQyKDiZOJ-fYN8";
  const urlBackground = "https://api.unsplash.com/photos/random";
  const urlQuotes = "https://zenquotes.io/api/quotes/";

  useEffect(() => {
    async function quotes() {
      const response = await fetch(urlQuotes, {
        method: "GET",
        // mode: "no-cors",
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
    }
    quotes();
  }, []);
  useEffect(() => {
    async function unsplashImg() {
      const response = await fetch(urlBackground, {
        headers: { Authorization: `Client-ID ${apiKey}` },
      });
      const data = await response.json();
      console.log(data.urls.full);
      return data.urls.full;
    }
    unsplashImg();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
