import PerlinNoise from "./components/PerlinNoise";
import RandomNoise from "./components/RandomNoise";
import CustomNoise from "./components/CustomNoise";

const App = () => {
  return (
    <div className="App">
      <h1>Noise</h1>
      <div className="canvas-container">
        <p>Random Noise (Uniform Distribution)</p>
        <RandomNoise />
      </div>
      <div className="canvas-container">
        <p>Perlin Noise</p>
        <PerlinNoise />
      </div>
      <div className="canvas-container">
        <p>Custom Noise</p>
        <CustomNoise />
      </div>
    </div>
  );
};

export default App;
