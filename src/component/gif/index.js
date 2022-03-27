function Gif({ url, name, artist, album }) {
  return (
    <>
      <div id="border">
        <img src={url} height="200px"></img>
        <h2>{name}</h2>
        <p>
          <b>{artist}</b> - <b>{album}</b>
        </p>
        <br />
      </div>
    </>
  );
}

export default Gif;
