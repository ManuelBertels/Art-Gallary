import Link from "next/link";
import ArtPiecesList from "../components/artPiecesList";

export default function HomePage({ art }) {
  //console.log(art);
  //console.log(newArt);

  return (
    <>
      <Link href="/singleArt">Hier drücken</Link>
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
    </>
  );
}
