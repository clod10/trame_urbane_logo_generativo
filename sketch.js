let trame = [];
let urbane = [];
function preload() {
  trame = [
    loadImage("./assets/lettere/trame/t.svg"),
    loadImage("./assets/lettere/trame/r.svg"),
    loadImage("./assets/lettere/trame/a.svg"),
    loadImage("./assets/lettere/trame/m.svg"),
    loadImage("./assets/lettere/trame/e.svg"),
  ];
  urbane = [
    loadImage("./assets/lettere/trame/u.svg"),
    loadImage("./assets/lettere/trame/r.svg"),
    loadImage("./assets/lettere/trame/b.svg"),
    loadImage("./assets/lettere/trame/a.svg"),
    loadImage("./assets/lettere/trame/n.svg"),
    loadImage("./assets/lettere/trame/e.svg"),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  const s = 100;

  rect(0, 0, s, s);
  rect(0, height - s, s, s);
  rect(width - s, 0, s, s);
  rect(width - s, height - s, s, s);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
