import RandomNoise from "./components/RandomNoise";

const App = () => {
  return (
    <div className="App">
      <h1>Noise</h1>
      <div className="canvas-container">
        <p>Random Noise (Uniform Distribution)</p>
        <RandomNoise />
      </div>
    </div>
  );
};

export default App;
