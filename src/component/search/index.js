import data from "./data";
import Gif from "../gif/index";

export default function Home() {
  const charList = data.map((e, idx) => (
    <Gif
      key={idx}
      name={e.name}
      artist={e.artists[0].name}
      album={e.album.name}
      url={e.album.images[0].url}
    />
  ));

  return <>{charList}</>;
}

