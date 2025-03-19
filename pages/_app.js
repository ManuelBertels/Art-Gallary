import GlobalStyle from "../styles";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [art, setArt] = useState();

  useEffect(() => {
    async function fetchdata() {
      const URL = "https://example-apis.vercel.app/api/art";

      const data = await fetch(URL);

      const dataobj = await data.json();

      setArt(dataobj);

      //console.log(dataobj);
    }

    fetchdata();
  }, []);

  if (!art) {
    return null;
  }

  const newArt = art.map((elements, index) => {
    return { ...elements, id: index };
  });

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} art={art} newArt={newArt} />
    </>
  );
}
