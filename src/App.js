import "./styles.css";
import Home from "./component/track/index";

export default function App() {
  return (
    <div className="App">
      <h2>Track Info</h2>
      <div id="album">
        <Home />
      </div>
    </div>
  );
}
