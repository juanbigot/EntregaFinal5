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

let t = 0; // Variable de tiempo para controlar la deformación
let obj, obj2, obj3; // Objeto contenedor de la burbuja
var tamaños = [];

// AUDIO
let mic, amp;
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
r[13] = 90;
r[14] = 30;
r[15] = 40;

var rcambio;
var forma, forma2;
var ground;

var mConstraint;
var canvas = createCanvas(800, 800); // me devulve una refe del lienzo

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  obj = new Obj();
  obj2 = new Obj2();
  obj3 = new Obj3();
  // AUDIO
  mic = new p5.AudioIn();
  mic.start();
  // AUDIO

  tamaños[0] = r[0];
  tamaños[1] = r[1];
  tamaños[2] = r[2];
  tamaños[3] = r[3];
  tamaños[4] = r[4];
  tamaños[5] = r[5];
  tamaños[6] = r[6];
  tamaños[7] = r[7];
  tamaños[8] = r[8];
  tamaños[9] = r[9];
  tamaños[10] = r[10];
  tamaños[11] = r[11];
  tamaños[12] = r[12];
  tamaños[13] = r[13];
  tamaños[14] = r[14];
  tamaños[15] = r[15];

  for (var i = 0; i < tamaños.length; i++) {
    tamaños[i] = tamaños[i];
  }

  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.0;
  // Engine.run(engine);
  var prev = null;

  rcambio = getRandomDiameter();
  forma = Math.floor(random(1, 5));
  forma2 = Math.floor(random(1, 5));
  //forma = Math.floor(5);

  for (var i = 0; i < r.length; i += 1) {
    var p = new Particle(random(width), random(height), r[i]);

    particles.push(p);

    if (prev && r[i] < 8) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: p.r + prev.r + 20,
        stiffness: 0.1,
      };

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

  // add mouse control
  var canvasmouse = Mouse.create(canvas.elt);
  var options = { mouse: canvasmouse };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function draw() {

 


  /////////////////////DRAW /////////////////////////////
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

  //-------------------------SONIDO----------------------------------
  for (let i = 0; i < particles.length; i++) {
    let dx = random(-3, 3);
    let dy = random(-3, 3);

    // +amplitud +velocidad
    let minSpeed = 0;
    let maxSpeed = map(amp, 0, 1, 0, 10);
    let speed = random(minSpeed, maxSpeed);
    let velocity = createVector(dx, dy).mult(speed);

    particles[i].body.position.x += velocity.x;
    particles[i].body.position.y += velocity.y;
    particles[i].show();

    
  }

  for (let i = 0; i < particles.length; i++) {
    // Sonido por Tamaño

    if (amp > 0.25) {
      particles[i].r += 5;
      
    } else {
      if (particles[i].r > tamaños[i]) {
        particles[i].r -= 1;
        
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

function res(x, y) {
  ///fondo mas variable menos desplazamiento
  let p = createVector(x, y);
  let scl = 0.000001;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 1.5;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 8;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function res2(x, y) {
  /// movimeinto particula adelante
  let p = createVector(x, y);
  let scl = 0.001;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 0.3;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 10;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function res0(x, y) {
  ///fisica sin desplazamiento
  let p = createVector(x, y);
  let scl = 0.000001;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 0;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 0;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function morph(x, y) {
  /// formas deformes
  let p = createVector(x, y);
  let scl = 0.01;
  let ang = noise(p.x * scl, p.y * scl, frameCount * 0.01) * 5;
  let off = noise(p.x * scl, p.y * scl, frameCount * 0.01) * 10;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}

function morph2(x, y) {
  /// formas deformes
  let p = createVector(x, y);
  let scl = 1.1;
  let ang = random(p.x * scl, p.y * scl, frameCount * 0.01) * 1;
  let off = random(p.x * scl, p.y * scl, frameCount * 0.01) * 1;
  p.x += cos(ang) * off;
  p.y += sin(ang) * off;
  return p;
}
