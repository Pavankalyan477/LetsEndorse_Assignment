import "./App.css";
import Introduction from "./components/Introduction";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Target from "./components/Target";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Introduction />
        <Location />
        <Target />
      </div>
    </div>
  );
}

export default App;
