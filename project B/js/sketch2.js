let w;
let h;
let evelyn;
let alex;
let bruno;
let evelynMessage = [];
let alexMessage = [];
let brunoMessage = [];
let person;
var bg;
var personFace;
var evelynFace;
var alexFace;
var brunoFace;
function preload(){
  bg = loadImage ("background.jpeg")
  personFace = loadImage ("person.png")
  evelynFace = loadImage ("evelyn.png")
  alexFace = loadImage ("alex.png")
  brunoFace = loadImage ("bruno.png")
}
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer")
  person = new Person();
  evelyn = new evelyn()
  alex = new alex()
  bruno = new bruno()
  w = width / 2;
  h = height / 2;
}
function draw() {
  background(bg);
  push()
  fill(0, 0, 0, 100)
  noStroke()
  rect(0,0, 500, 500)
  pop()
  // Border
  push();
  stroke(255);
  strokeWeight(2);
  line(w - 200, h - 200, w - 200, h + 200); // Left
  line(w + 200, h - 200, w - 125, h - 200); // Top
  line(w + 125, h + 200, w - 200, h + 200); // Bottom
  line(w + 200, h - 200, w + 200, h + 200); // Right
  pop();
  // Middle
  push();
  stroke(255);
  strokeWeight(2);
  line(w, h - 145, w + 200, h - 145);
  line(w - 125, h - 125, w - 125, h);
  line(w - 125, h, w + 10, h);
  line(w - 50, h - 75, w + 125, h - 75);
  line(w + 125, h + 60, w + 125, h - 75);
  line(w - 125, h + 75, w + 10, h + 75);
  line(w + 10, h + 75, w + 10, h + 150);
  line(w - 75, h + 200, w - 75, h + 150);
  line(w + 200, h + 125, w + 80, h + 125);
  line(w - 200, h - 50, w - 125, h - 50);
  pop()
  // Move the person based on arrow key presses
  person.update();
  person.display();
  //display characters
  evelyn.display();
  alex.display ();
  bruno.display();
  // Check for collision with evelyn
  let distance = dist(person.x, person.y, evelyn.x, evelyn.y);
  if (distance < person.diameter / 2 + 15) { // 15 is half the diameter of haku
    evelynMessage.push(new evelynMessage(width / 2, height / 2, 30));
  }
  // Display evelyn message
  for (let i = 0; i < evelynMessage.length; i++) {
    evelynMessage[i].display();
  }
  // Check if person moves away from evelyn
if (distance > person.diameter / 2-50) {
  // Find the index of the evelynMessage object to remove
  let indexToRemove = -1;
  for (let i = 0; i < evelynMessage.length; i++) {
    if (evelynMessage[i].x === width / 2 && evelynMessage[i].y === height / 2) {
      indexToRemove = i;
      break;
    }
  }
  // Remove the evelynMessage object from the array
  if (indexToRemove !== -1) {
    evelynMessage.splice(indexToRemove, 1);
  }
}
    // Check for collision with alex
  let distanceL = dist(person.x, person.y, alex.x, alex.y);
  if (distanceL < person.diameter / 2 + 15) { // 15 is half the diameter of evelyn
    alexMessage.push(new alexMessage(width / 2, height / 2, 30));
  }
  // Display alex message
  for (let i = 0; i < alexMessage.length; i++) {
    alexMessage[i].display();
  }
  // Check if Person moves away from alex
if (distanceL > person.diameter / 2-50) {
  // Find the index of the alexMessage object to remove
  let indexToRemove = -1;
  for (let i = 0; i < alexMessage.length; i++) {
    if (alexMessage[i].x === width / 2 && alexMessage[i].y === height / 2) {
      indexToRemove = i;
      break;
    }
  }
  // Remove the alexMessage object from the array
  if (indexToRemove !== -1) {
    alexMessage.splice(indexToRemove, 1);
  }
}
  // Check for collision with bruno
  let distanceY = dist(person.x, person.y, bruno.x, bruno.y);
  if (distanceY < person.diameter / 2 + 10) {
    brunoMessage.push(new brunoMessage(width / 2, height / 2, 30));
  }
  // Display bruno message
  for (let i = 0; i < brunoMessage.length; i++) {
    brunoMessage[i].display();
  }
  // Check if Person moves away from bruno
if (distanceY > person.diameter / 2-50) {
  // Find the index of the BrunoMessage object to remove
  let indexToRemove = -1;
  for (let i = 0; i < brunoMessage.length; i++) {
    if (brunoMessage[i].x === width / 2 && brunoMessage[i].y === height / 2) {
      indexToRemove = i;
      break;
    }
  }
  // Remove the brunoMessage object from the array
  if (indexToRemove !== -1) {
    brunoMessage.splice(indexToRemove, 1);
  }
}
}
class Person {
  constructor() {
    this.x = width / 2-160 ;
    this.y = height / 2-200 ;
    this.diameter = 1476/23
  }
  display() {
    push();
    imageMode (CENTER);
    noStroke();
    image(personFace, this.x, this.y, this.diameter, this.diameter)
    pop();
  }
  update() {
    // Move the circle based on arrow key presses
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 2;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 2;
    }
  }
}
class Evelyn {
  constructor () {
    this.x = width/3-30
      this.y  = height/2-70
  }
  display () {
    push()
    noStroke ()
    image (evelynFace, this.x, this.y, 1464/25, 1464/25)
    pop()
  }
}
class EvelynMessage {
  constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }
  display() {
   push()
   fill(0, 0, 0, 200)
   rectMode(CENTER)
   rect(this.x, this.y, 400, 100)
   pop()
    push();
    fill(255)
    textAlign(CENTER)
    textSize(18)
    textFont('Courier')
    text("Evelyn:", this.x, this.y-30)
    text("Call your family!", this.x, this.y);
    text("or hang out with friends.", this.x, this.y+25)
    pop();
  }
}
class Alex {
  constructor () {
    this.x = width/1.2-35
    this.y  = height/2-40
  }
  display () {
    push()
    noStroke()
    image(alexFace, this.x, this.y, 1068/16, 1068/16)
    pop()
  }
}
class AlexMessage {
  constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }
  display() {
    push()
    fill(0, 0, 0, 200)
    rectMode(CENTER)
    rect(this.x, this.y, 300, 100)
    pop()
     push();
     fill(255)
     textAlign(CENTER)
     textSize(18)
     textFont('Courier')
     text("Alex:", this.x, this.y-30)
     text("Play some sports with friends,", this.x, this.y);
     text("or go for a walk.", this.x, this.y+25);
     pop();
  }
}
class Bruno {
  constructor () {
    this.x = width/1.5-20
    this.y= height-115
  }
  display () {
    push ()
    fill (0, 0, 255)
    noStroke()
    image(brunoFace, this.x, this.y, 2017/30, 1527/30 )
    pop()
  }
}
class BrunoMessage {
   constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }
  display() {
    push()
    fill(0, 0, 0, 200)
    rectMode(CENTER)
    rect(this.x, this.y, 400, 100)
    pop()
     push();
     fill(255)
     textAlign(CENTER)
     textSize(18)
     textFont('Courier')
     text("Bruno:", this.x, this.y-30)
     text("Call your siblings,", this.x, this.y);
     text("or look at pictures of home.", this.x, this.y+25)
     pop();
  }
}