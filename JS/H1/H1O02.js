function setup() {
  canvas = createCanvas(450,450);
  background('orange');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('darkred');
  triangle(0,225,450,0,450,450);

  noStroke();
  fill('pink');
  triangle(0,450,450,450,0,225);
}
