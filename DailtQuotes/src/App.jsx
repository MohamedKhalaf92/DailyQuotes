import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [next, setNext] = useState(0);
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
  }, [next]);

  const newAdvice = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNext((prev) => prev + 1);
      setIsLoading(false);
    }, 3000);
  };
  // const newAdvice = async () => {
  //   await setIsLoading(true);

  //  await setNext((prev) => prev + 1);
  //   setIsLoading(false);
  // };
  //How to add authorisation api key to header when required.
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

  //title above th adviceContainer.

  return (
    <>
      <Header />
      <div className="advice-container">
        <MainContent
          advice={advice}
          newAdvice={newAdvice}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;
