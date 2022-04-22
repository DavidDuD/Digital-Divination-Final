var mySound, song, analyzer;
var scr = 1;
var card = [];
var name = 0;
var center =0;

var c1x = 300;
var c1y = 250;
var c1r = 85;
var c1g = 180;

var rx = 100;
var ry = 200;
var rw = 150;
var rh = 80;

var x = 100;
var y = 50;

function preload() {
  card[0] = loadImage("CardA 1.png");
  card[1] = loadImage("CardB 1.png");
  card[2] = loadImage("CardC 1.png");
  card[3] = loadImage("Card.png");
  card[4] = loadImage("CardE 1.png");
  card[5] = loadImage("CardF 1.png");
  card[6] = loadImage("CardG 1.png");
  card[7] = loadImage("CardH 1.png");
  card[8] = loadImage("CardI 1.png");
  card[9] = loadImage("CardJ 1.png");
  card[10] = loadImage("CardK 1.png");
  card[11] = loadImage("CardL 1.png");
  card[12] = loadImage("CardM 1.png");
  card[13] = loadImage("CardN 1.png");
  card[14] = loadImage("CardO 1.png");
  card[15] = loadImage("CardP 1.png");
  card[16] = loadImage("CardQ 1.png");
  card[17] = loadImage("CardR 1.png");
  card[18] = loadImage("CardT 1.png");
  card[19] = loadImage("CardU 1.png");
 

  base = loadImage("AEA.png");
  hand = loadImage("Hand4.png");
  back = loadImage("Back.png");
  checker = loadImage("BackG.png");
  End = loadImage("End.png");
}

function setup() {
  createCanvas(1215,1210);
  imageMode(CENTER);
}

function draw() {
  if (scr == 1) {
    drawScreen1();
  } else if (scr == 2) {
    drawScreen2();
  } else if (scr == 3) {
    drawScreen3();
  } else if (scr == 4) {
    drawScreen4();
  }
}

function drawScreen1() {
  background(0);
  noCursor();
  image(base, 605, 600);

  fill(240, 248, 255, 0);
  ellipse(610, 540, c1r);

  if (overCircle(605, 600, c1r)) {
    frameRate(2000);
    fill(random(470), 200, random(450), 100);
    noStroke();
    ellipse(610, 605, c1r+930);
  } else {
    fill(242, 242, 242, 0);
    noStroke();
    ellipse(605, 600, c1r, c1g);
  }
  image(hand, mouseX, mouseY, 105, 120);
}

function drawScreen2() {
  cursor();
  image(checker, 605, 600,1225,1215);
  imageMode(CORNER);
  for (var b = -55; b <= 350; b = b + 40) {
    var cardY = 420;
    if (overRect(b + 415, cardY + 100, 40, 200)) {
      image(back, b + 385, cardY - 40, 150, 285);
    } else {
      image(back, b + 385, cardY, 150, 285);
    }
  }
  imageMode(CENTER);
}

function drawScreen3() {
  background(0);
  console.log(name);
  image(card[name],605, 600,1215,1210);
}

function drawScreen4() {
  background(0);
  image(End,605, 600,1215,1210);
}

function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }
}

function overRect(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (scr == 1) {
    scr = 2;
  } else if (scr == 2) {
    var rand = floor(random(card.length));
    name = rand;
    scr = 3;
  } else if (scr == 3) {
    scr = 4;
  }
}
