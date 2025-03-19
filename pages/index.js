import Link from "next/link";
import ArtPiecesList from "../components/artPiecesList";
import Navigation from "@/components/Navigation";

export default function HomePage({ art }) {
  //console.log(art);
  //console.log(newArt);

  return (
    <>
      {art.map((element, index) => {
        return (
          <ArtPiecesList
            element={element}
            key={index}
            artist={element.artist}
            name={element.name}
            imageSource={element.imageSource}
            art={art}
          />
        );
      })}
      <Navigation />
    </>
  );
}
