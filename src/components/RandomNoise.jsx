import Sketch from "react-p5";

const RandomNoise = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.pixelDensity(1);
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    p5.loadPixels();

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let index = (x + y * p5.width) * 4;
        let rand1 = p5.floor(p5.random(1) * 255);
        let rand2 = p5.floor(p5.random(1) * 255);
        let rand3 = p5.floor(p5.random(1) * 255);
        let r = rand1;
        let g = rand2;
        let b = rand3;

        p5.pixels[index] = r; // Red channel
        p5.pixels[index + 1] = g; // Green channel
        p5.pixels[index + 2] = b; // Blue channel
        p5.pixels[index + 3] = 255; // Fully opaque alpha
      }
    }
    p5.updatePixels();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default RandomNoise;
