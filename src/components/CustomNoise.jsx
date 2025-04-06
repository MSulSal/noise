import Sketch from "react-p5";

let octaveNum;
let octaveLabel;
let falloff;
let fallLabel;
let noiseLevel;
let noiseScale;
let roff;
let goff;
let boff;
let levelLabel;
let scaleLabel;
let rl;
let gl;
let bl;

const PerlinNoise = () => {
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5;
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.pixelDensity(1);
    fallLabel = p5.createDiv("Noise Falloff:");
    fallLabel.parent(canvasParentRef);
    falloff = p5.createSlider(0, 1, 0.25, 0.01);
    falloff.parent(canvasParentRef);
    octaveLabel = p5.createDiv("Number of Octaves:");
    octaveLabel.parent(canvasParentRef);
    octaveNum = p5.createSlider(0, 10, 4, 1);
    octaveNum.parent(canvasParentRef);
    levelLabel = p5.createDiv("Noise Level:");
    levelLabel.style("font-size", "16px");
    levelLabel.style("margin-top", "10px");
    levelLabel.parent(canvasParentRef);
    noiseLevel = p5.createSlider(0, 6, 1, 1);
    noiseScale = p5.createSlider(0.0001, 0.1, 0.01, 0.0001);
    noiseLevel.parent(canvasParentRef);
    scaleLabel = p5.createDiv("Scale Level:");
    scaleLabel.parent(canvasParentRef);
    noiseScale.parent(canvasParentRef);
    rl = p5.createDiv("Red Offset:");
    rl.parent(canvasParentRef);
    roff = p5.createSlider(-255, 255, 0, 1);
    roff.parent(canvasParentRef);
    gl = p5.createDiv("Green Offset:");
    gl.parent(canvasParentRef);
    goff = p5.createSlider(-255, 255, 0, 1);
    goff.parent(canvasParentRef);
    bl = p5.createDiv("Blue Offset:");
    bl.parent(canvasParentRef);
    boff = p5.createSlider(-255, 255, 0, 1);
    boff.parent(canvasParentRef);
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    p5.noiseDetail(octaveNum.value(), falloff.value());
    p5.loadPixels();
    let t = p5.frameCount * 0.1;

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let index = (x + y * p5.width) * 4;
        let rand =
          noiseLevel.value() *
          p5.map(
            p5.noise(x * noiseScale.value(), y * noiseScale.value(), t),
            0,
            1,
            0,
            255
          );
        let r = rand;
        let g = rand;
        let b = rand;

        p5.pixels[index] = r + roff.value(); // Red channel
        p5.pixels[index + 1] = g + goff.value(); // Green channel
        p5.pixels[index + 2] = b + boff.value(); // Blue channel
        p5.pixels[index + 3] = 255; // Fully opaque alpha
      }
    }
    p5.updatePixels();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default PerlinNoise;
