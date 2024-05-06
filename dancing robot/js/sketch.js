let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Gummi(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Gummi {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // // Properties for squirming movement
    this.angle = 0;
    this.squirmSpeed = 0.05; // Speed of squirming
    this.squirmAmplitude = 20; // How far it squirms side to side
    // Properties for size and appearance
    this.length = random(100, 200); // Random length, but not more than 200 pixels
    this.thickness = random(10, 20); // Random thickness
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    // Update the squirming angle for movement
    this.angle += this.squirmSpeed;
    this.x += sin(this.angle) * this.squirmAmplitude;
    // Ensure the dancer stays within the canvas bounds
    this.x = constrain(this.x, 100, width - 100);
    this.y = constrain(this.y, 100, height - 100);
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 100, 150); // Pink color for the gummy worm
    // Draw the gummy worm body as a squiggly line
    beginShape();
    const squiggleFrequency = 0.1;
    for (let i = -this.length / 2; i < this.length / 2; i += 10) {
      const x = i;
      const y = sin(i * squiggleFrequency + this.angle) * this.thickness;
      curveVertex(x, y);
    }
    endShape();
    // Add googly eyes
    fill(255); // White for eyes
    ellipse(-this.length / 4, 0, 15, 15); // Left eye
    ellipse(this.length / 4, 0, 15, 15); // Right eye
    fill(0); // Black for pupils
    ellipse(-this.length / 4, 0, 5, 5); // Left pupil
    ellipse(this.length / 4, 0, 5, 5); // Right pupil

    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}