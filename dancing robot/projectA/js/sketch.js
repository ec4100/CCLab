let circles = [];
let backgroundColor = 0;
let circleSpeedMultiplier = 0.5;
let lightBrightness = 0;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  noStroke();

  for (let i = 0; i < 100; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      diameter: random(10, 100),
      velocityX: random(-1, 1),
      velocityY: random(-1, 1),
      fillColor: color(random(255), random(255), random(255), random(100, 200))
    });
  }
}

function draw() {
  // Adjust background brightness 
  background(lightBrightness);

  // Update and draw each circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(circle.fillColor);
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

    // Update circle position and speed 
    circle.x += circle.velocityX * circleSpeedMultiplier;
    circle.y += circle.velocityY * circleSpeedMultiplier;

    // boundaries and bounce
    if (circle.x < 0 || circle.x > width) {
      circle.velocityX *= -1;
    }
    if (circle.y < 0 || circle.y > height) {
      circle.velocityY *= -1;
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    // Simulate turning on a light, increase brightness
    lightBrightness = 200;
    // Increase circle speed when background is bright
    circleSpeedMultiplier = 2.5;
  } else if (key === 's' || key === 'S') {
    // Save the canvas as a PNG file when 's' key is pressed
    saveCanvas('title', 'png');
  }
}

function keyReleased() {
  if (key === ' ') {
    // Simulate turning off the light, decrease brightness
    lightBrightness = 0;
    // Reset circle speed
    circleSpeedMultiplier = 0.5;
  }
}

function mousePressed() {
  // Check if the mouse is inside any circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.diameter / 2) {
      // Change the color of the circle
      circle.fillColor = color(random(255), random(255), random(255), random(100, 200));
      // Add vibrating effect by adjusting position
      circle.x += random(-5, 5);
      circle.y += random(-5, 5);
    }
  }
}