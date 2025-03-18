export default function ArtPiecesList({ artist, name, imageSource }) {
  return (
    <>
      <ul>
        <li
          style={{
            width: 320,
            height: 350,
            listStyle: "none",
            backgroundColor: "yellow",
          }}
        >
          <img width={100} height={100} src={imageSource} alt="artPieces"></img>
          <h1>Name: {name}</h1>
          <h2>Artist: {artist}</h2>
        </li>
      </ul>
    </>
  );
}
