import { useRouter } from "next/router";
import ArtPiecesList from "@/components/artPiecesList";
import Image from "next/image";

export default function ArtPieceDetail({ art }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(art);

  const artelement = art.find((element) => element.slug === slug);
  return (
    <div>
      <h2> {artelement.artist}</h2>
      <p>{artelement.name}</p>
      <Image width={100} height={100} src={artelement.imageSource}></Image>
     
      <p>{artelement.slug}</p>
      <p>{artelement.year}</p>

    </div>
  );
}
