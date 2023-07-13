var Engine = Matter.Engine,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies,
  Vertices = Matter.Vertices,
  Constraint = Matter.Constraint;

var engine;
var world;

var particles = [];
var boundaries = [];
var r = [];

var tamaños = [];

// AUDIO
let mic,amp;
// AUDIO

r[0] = 9;

r[1] = 80;
r[2] = 135;
r[3] = 97;
r[4] = 18;

r[5] = 70;
r[6] = 30;

r[7] = 80;
r[8] = 130;
r[9] = 18;

r[10] = 70;
r[11] = 40;

r[12] = 47;
r[13] = 97;
r[14] = 30;
r[15] = 40;

var rcambio
var forma, forma2;
var ground;

var mConstraint;
var canvas = createCanvas(800, 800); // me devulve una refe del lienzo

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  // AUDIO
  mic = new p5.AudioIn();
  mic.start();
  // AUDIO
  
  for (var i = 0; i < r.length; i++) {
  tamaños [i] = r[i]; 
  }

  for (var i = 0; i < tamaños.length; i++){
  tamaños [i] = tamaños [i];
  }

  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.0;
  // Engine.run(engine);
  var prev = null;
  
 rcambio = getRandomDiameter() ;
forma = Math.floor(random(1,5));
forma2 = Math.floor(random(1,5));
//forma = Math.floor(5);

  for (var i = 0; i < r.length ; i += 1) {
    var p = new Particle(random(width), random(height), r[i]);

    particles.push(p);

    if (prev) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: p.r + prev.r +120,
        stiffness: 0.1
      }

      var constraint = Constraint.create(options);
      World.add(world, constraint);
    }
    prev = p;
  }

  // paredes/limites
  boundaries.push(new Boundary(width / 2, height + 100, width + 200, 100, 0)); // piso
  boundaries.push(new Boundary(width / 2, -100, width + 200, 100, 0)); // techo
  boundaries.push(new Boundary(-100, height / 2, 100, width + 200, 0));
  boundaries.push(new Boundary(width + 100, height / 2, 100, width + 200, 0));
}

function draw() {
  background(118, 194, 166);

// AUDIO
amp = mic.getLevel();
userStartAudio();
// AUDIO

 drawColorsBeige();
  drawColorsCeleste2();
  drawColorsCeleste1();
 drawColorsNaranja();

  Engine.update(engine);
  for (var i = 0; i < boundaries.length; i++) {
    /// dibuja los limites
    boundaries[i].show();
  }
  //------------------------------
  for (let i = 0; i < particles.length; i++) {
    let dx = random(-2, 2);
    let dy = random(-2, 2);

    // +amplitud +velocidad
    let minSpeed = 0;
    let maxSpeed = map(amp, 0, 1, 0, 10);
    let speed = random(minSpeed, maxSpeed);
    let velocity = createVector(dx, dy).mult(speed);

    particles[i].body.position.x += velocity.x;
    particles[i].body.position.y += velocity.y;
    particles[i].show();
  }

  // Sonido por Tamaño
for (let i = 0; i < 15; i++) {
  if (amp > 0.35 && particles[i].r < tamaños[i] + 10){
   particles[i].r += 5;
   particles[i].body.r += 10;
  } else {
   if (particles[i].r > tamaños [i]) {
   particles[i].r -= 1;
   //particles[i].body.r -= 1;
  }
  }
 }
  //marco
  noFill();
  strokeWeight(80);
  stroke(245);
  rect(0, 0, width, height);
}

function getRandomDiameter() {
  return Math.random() * (15 - 1) + 1; //  diámetro aleatorio entre 20 y 180
}

function siono() {
  return Math.floor(random(2));
}


function res(x, y) {                    ///fondo mas variable menos desplazamiento
  let p = createVector(x, y);
  let scl = 0.000001;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 1.50;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 8;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function res2(x, y) {           /// movimeinto particula adelante
  let p = createVector(x, y);
  let scl = 0.001;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 0.30;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 10;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function res0(x, y) {    ///fisica sin desplazamiento
  let p = createVector(x, y);
  let scl = 0.000001;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 0;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 0;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function morph(x, y) {    /// formas deformes
  let p = createVector(x, y);
  let scl = 0.01;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.01) * 5;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.01) * 10;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}
function morph2(x, y) {    /// formas deformes
  let p = createVector(x, y);
  let scl = 0.01;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.01) * 5;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.01) * 40;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}