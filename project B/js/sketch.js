let faceSize = 100;
let stars = [];
let collectedStars = 0;
let faceMouth = "sad"; // Possible values: "sad", "neutral", "happy"
let eyeSize = 20;
let popupMessage = "";

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("p5-canvas-container");
  background(0);
  // stars
  for (let i = 0; i < 10; i++) {
    stars.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  // stars
  for (let i = 0; i < stars.length; i++) {
    drawStar(stars[i].x, stars[i].y, 5, 15, color(173, 216, 230)); // Light blue color
  }
  
  // face
  let faceX = mouseX;
  let faceY = mouseY;
  fill(255, 255, 0); // Yellow face
  ellipse(faceX, faceY, faceSize, faceSize);
  
  // eyes
  fill(0); // Fully black
  ellipse(faceX - faceSize / 4, faceY - faceSize / 6, eyeSize, eyeSize); // Left eye
  ellipse(faceX + faceSize / 4, faceY - faceSize / 6, eyeSize, eyeSize); // Right eye
  
  // Draw mouth based on faceMouth
  if (faceMouth === "sad") {
    // Draw a sad mouth (horizontal line)
    stroke(0);
    line(faceX - 20, faceY + 20, faceX + 20, faceY + 20);
  } else if (faceMouth === "neutral") {
    // Draw a neutral mouth (no expression)
  } else if (faceMouth === "happy") {
    // Draw a happy mouth (smile)
    noFill();
    stroke(0);
    arc(faceX, faceY + 10, 60, 40, 0, PI);
  }
  
  // popup message
  if (popupMessage !== "") {
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(popupMessage, width / 2, height / 2);
  }
}

function drawStar(x, y, radius1, radius2, fillColor) {
  fill(fillColor);
  let angle = TWO_PI / 8;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseMoved() {
  // Check if mouse is over any star
  for (let i = 0; i < stars.length; i++) {
    if (dist(mouseX, mouseY, stars[i].x, stars[i].y) < 15) {
      // Remove collected star
      stars.splice(i, 1);
      collectedStars++;
      // Change face expression based on collected stars
      if (collectedStars === 2) {
        faceMouth = "sad";
      } else if (collectedStars === 5) {
        faceMouth = "happy";
        popupMessage = "It's ok to feel homesick! You are not alone!";
      }
      break;
    }
  }
}
