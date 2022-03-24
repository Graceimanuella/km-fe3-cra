import Song from "../album/index";
import data from "./data";

export default function Home() {
  return (
    <>
      <Song
        url={data.album.images[0].url}
        name={data.name}
        artist={data.artists[0].name}
        album={data.album.name}
      />
    </>
  );
}
