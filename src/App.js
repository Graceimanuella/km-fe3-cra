import { useState, useEffect, useCallback, useReducer, useContext } from "react";
import "./styles.css";

const axios = require("axios");

function App() {
  const [access_token, set_access_token] = useState(null);
  const [query, set_query] = useState("");
  const [tracks, set_tracks] = useState([]);

  const LoginButton = () => {
    let client_id = "165f5f92c5324573bf19c9682e327f07";
    // let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

    let scope = "playlist-modify-private";
    let redirect_uri = "http://localhost:3000";

    let spotify_url = "https://accounts.spotify.com/authorize";
    spotify_url += "?response_type=token";
    spotify_url += "&client_id=" + encodeURIComponent(client_id);
    spotify_url += "&scope=" + encodeURIComponent(scope);
    spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    return <a href={spotify_url}>LOG IN WITH SPOTIFY</a>;
  };

  const Form = () => {
    return (
      <div>
        <input
          onChange={(event) => {
            set_query(event.target.value);
          }}
          value={query}
          type="text"
          placeholder="Search"
        ></input>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          <i></i>
        </button>
      </div>
    );
  };

  const Track = (props) => {
    return (
      <div>
        <img
          src={props.image_url}
          title={props.album_name}
          alt="{props.album_name}"
        />
        <p>{props.track_title}</p>
        <div>
          <p>{props.artist_name}</p>
        </div>
      </div>
    );
  };

  function handleClick() {
    try {
      let url =
        "https://api.spotify.com/v1/search?q=" + query + "&type=track,artist";
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + access_token
          }
        })
        .then((res) => {
          set_tracks(res.data.tracks.items);
        });
    } catch (err) {
      console.error(err);
    } finally {
      console.log(tracks);
    }
  }

  function getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
  });

  return (
    <div>
      {!access_token && <LoginButton />}

      {access_token && <Form />}

      <div>
        {tracks.map((item) => {
          return (
            <>
              <Track
                key={item.album.id}
                image_url={item.album.images[0].url}
                track_title={item.name}
                artist_name={item.album.artists[0].name}
                album_name={item.album.name}>              
                <button id="demo" onclick="myFunction()">Select</button>
                <script>
                  function myFunction() {
                    document.getElementById("demo").innerHTML = "Deselect"
                  }
                </script>
              </Track>              
            </>            
          );
        })}
      </div>

      <div>
        <h2>Create Playlist</h2>
        <p>Please input song</p>
        <form method="get">
          <label>Title :</label>
          <input type="text" minlength="10" placeholder="Please Input Song Title"></input>
          <label>Description :</label>
          <input type="text" placeholder="Please Input Song Description"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      
    </div>
  );
}

export default App;
