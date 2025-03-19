import Link from "next/link";
export default function SingleArt({ newArt }) {
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = randomNumberInRange(0, 10);

  const find = newArt.find((elements) => {
    return elements.id === randomNumber;
  });

  return (
    <>
      <div
        style={{
          width: 320,
          height: 200,
          listStyle: "none",
          backgroundColor: "yellow",
        }}
      >
        <img style={{ height: 100, width: 100 }} src={find.imageSource}></img>
        <div>
          {find.name}
          <p></p>
          {find.artist}
        </div>
      </div>
      <Link href="/">zurück</Link>
    </>
  );
}
