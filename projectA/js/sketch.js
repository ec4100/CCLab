let circles = [];
let backgroundColor = 0;
let circleSpeedMultiplier = 0.5;

function setup() {
  //createCanvas(800, 500);
  noStroke();
  let cnv = createCanvas(800,500)
  cnv.parent("p5-canvas-container")


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
  // background color
  background(backgroundColor);

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

function mouseClicked() {
  // Check if the mouse is inside any circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.diameter / 2) {
      // Change the color of the circle
      circle.fillColor = color(random(255), random(255), random(255), random(100, 200));
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    // Background color switches between black and white
    if (backgroundColor === 0) {
      backgroundColor = 255;
      // Increase circle speed when background is white
      circleSpeedMultiplier = 2.5;
    } else {
      backgroundColor = 0;
      // Normal speed when background is black 
      circleSpeedMultiplier = 0.5;
    }
  } else if (key === 's' || key === 'S') {
    // Save the canvas as a PNG file when 's' key is pressed
    saveCanvas('title ', 'png');
  }
}