import { useEffect, useState } from "react";

export default function Fetchdata() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const URL = "https://example-apis.vercel.app/api/art";

      const data = await fetch(URL);

      const dataobj = await data.json();

      setArt(dataobj);

      console.log(dataobj);
    }

    fetchdata();
  }, []);
}
