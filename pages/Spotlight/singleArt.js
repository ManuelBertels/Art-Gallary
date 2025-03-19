import Link from "next/link";
import Navigation from "@/components/Navigation";
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
      <div>
        <img style={{ height: 100, width: 100 }} src={find.imageSource}></img>
        <div>
          {find.name}
          <p></p>
          {find.artist}
        </div>
      </div>
      <Navigation />
    </>
  );
}
