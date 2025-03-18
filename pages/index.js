import Fetchdata from "./components/fetchGallery";
import { useState } from "react";
import ArtPiecesList from "./components/artPiecesList";

export default function HomePage() {
  const [art, setArt] = useState([]);
  console.log(art);

  return (
    <div>
      <Fetchdata art={art} setArt={setArt} />

      {art.map((elements, index) => {
        return (
          <ArtPiecesList
            key={index}
            artist={elements.artist}
            name={elements.name}
            imageSource={elements.imageSource}
          />
        );
      })}
    </div>
  );
}
