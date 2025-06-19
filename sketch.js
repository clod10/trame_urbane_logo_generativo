/** @type {Image[]} */
let trame = [];
/** @type {Image[]} */
let urbane = [];

/** @type {Object.<number, Image>} */
let immagini_trame = {};
/** @type {Object.<number, Image>} */
let immagini_urbane = {};

let gap = 4;

function preload() {
  trame = [
    loadImage("./assets/lettere/trame/T.svg"),
    loadImage("./assets/lettere/trame/R.svg"),
    loadImage("./assets/lettere/trame/A.svg"),
    loadImage("./assets/lettere/trame/M.svg"),
    loadImage("./assets/lettere/trame/E.svg"),
  ];
  urbane = [
    loadImage("./assets/lettere/urbane/U.svg"),
    loadImage("./assets/lettere/urbane/R.svg"),
    loadImage("./assets/lettere/urbane/B.svg"),
    loadImage("./assets/lettere/urbane/A.svg"),
    loadImage("./assets/lettere/urbane/N.svg"),
    loadImage("./assets/lettere/urbane/E.svg"),
  ];

  immagini_trame = {
    0: loadImage("./assets/immagini/simboli/1.svg"),
    1: loadImage("./assets/immagini/simboli/2.svg"),
    2: loadImage("./assets/immagini/simboli/3.svg"),
    3: loadImage("./assets/immagini/simboli/4.svg"),
    4: loadImage("./assets/immagini/simboli/5.svg"),
  };

  immagini_urbane = {
    0: loadImage("./assets/immagini/simboli/1.1.svg"),
    1: loadImage("./assets/immagini/simboli/1.2.svg"),
    2: loadImage("./assets/immagini/simboli/1.3.svg"),
    3: loadImage("./assets/immagini/simboli/1.4.svg"),
    4: loadImage("./assets/immagini/simboli/1.5.svg"),
    5: loadImage("./assets/immagini/simboli/1.6.svg"),
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background("white");
  translate(width / 2, height / 2);

  let lunghezza_trame = gap * 4;
  for (let lettera of trame) {
    lunghezza_trame += lettera.width;
  }

  let altezza_totale = trame[0].height + urbane[0].height + gap;

  let x = -lunghezza_trame / 2;
  let y = -altezza_totale / 2;

  const soglia = 0.5;

  scale(width / (lunghezza_trame + 100));

  push();
  translate(x, y);
  for (let [index, lettera] of Object.entries(trame)) {
    image(lettera, 0, 0);
    if (random() > soglia) {
      const simbolo = immagini_trame[index];
      image(simbolo, 0, 0);
    }
    translate(lettera.width + gap, 0);
  }
  pop();

  push();
  translate(x, y + trame[0].height + gap);
  for (let [index, lettera] of Object.entries(urbane.slice(0, 3))) {
    image(lettera, 0, 0);
    if (random() > soglia) {
      const simbolo = immagini_urbane[index];
      image(simbolo, 0, 0);
    }
    translate(lettera.width + gap, 0);
  }
  pop();

  push();
  translate(x + lunghezza_trame, y + trame[0].height + gap);
  for (let [index, lettera] of Object.entries(urbane.slice(3).reverse())) {
    translate(-lettera.width, 0);
    if (lettera == urbane[3]) {
      translate(gap / 2, 0);
    }
    image(lettera, 0, 0);
    if (random() > soglia) {
      const simbolo = immagini_urbane[5 - index];
      image(simbolo, 0, 0);
    }
    translate(-gap, 0);
  }
  pop();

  // for (let i = 0; i < urbane.length; i++) {
  //   // Kerning della lettera A
  //   if (i == 3) {
  //     translate(-gap * 3.5, 0);
  //   }

  //   let lettera = urbane[i];
  //   image(lettera, 0, 0);
  //   translate(lettera.width + gap, 0);
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
