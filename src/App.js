import './App.css';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <h1>Track Info</h1>

      <div id="album">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
          height="200px"
        ></img>

        <h3>{data.name}</h3>
        <p>
          <b>{data.artists[0].name}</b> - <b>{data.album.name}</b>
        </p>
        <br />
        <button>Select</button>
      </div>
    </div>
  );
}

export default App;
