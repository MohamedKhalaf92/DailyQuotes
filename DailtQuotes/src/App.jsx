import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [advice, setAdvice] = useState("");
  const apiKey = "_n7JT400hcnqytDWaOTEi6dJ0BD_PTQyKDiZOJ-fYN8";
  const urlBackground = "https://api.unsplash.com/photos/random";
  const urlQuotes = "https://api.adviceslip.com/advice";

  useEffect(() => {
    async function quotes() {
      const response = await fetch(urlQuotes, {
        method: "GET",
      });
      // console.log(response);
      const data = await response.json();
      console.log(data.slip);
      const adviceSlip = data.slip.advice;
      setAdvice(adviceSlip);
      return adviceSlip;
    }
    quotes();
  }, []);


  // useEffect(() => {
  //   async function unsplashImg() {
  //     const response = await fetch(urlBackground, {
  //       headers: { Authorization: `Client-ID ${apiKey}` },
  //     });
  //     const data = await response.json();
  //     console.log(data.urls.full);
  //     const backUrl = data.urls.full;
  //     setBackgroundImage(backUrl);
  //     return backUrl;
  //   }
  //   unsplashImg();
  // }, []);

  //How to add authorisation api key to header when required. 



  
  //Create next button to reset 

  //try reize box when text is long 

  //title above th adviceContainer. 

  return (
    <div className="advice-container">
      <MainContent advice={advice} />
    </div>
  );
}

export default App;
