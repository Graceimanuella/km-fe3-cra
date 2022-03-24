function Song({ url, name, artist, album }) {
    return (
      <>
        <img src={url} height="200px"></img>
        <h3>{name}</h3>
        <p>
          <b>{artist}</b>-<b>{album}</b>
        </p>
        <br />
        <button>Select</button>
      </>
    );
  }
  
  export default Song;
  