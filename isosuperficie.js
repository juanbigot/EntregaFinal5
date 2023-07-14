function drawColorsBeige() {

  for (var i = 0; i < particles.length; i++) {
    /// invento un stroke falso contorno
    strokeWeight(0.5);
    stroke(0);
    fill(227, 208, 156); //beige
    
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.81 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.81 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);

  }
  beginShape();
  strokeWeight(0.5);
  stroke(0);
  for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
    let xx = particles[0].body.position.x + particles[0].r * 9.81 * cos(j);
    let yy = particles[0].body.position.y + particles[0].r * 9.81 * sin(j);
  
    let p = morph(xx, yy);
    curveVertex(p.x, p.y);
  }
  endShape(CLOSE);

  for (var i = 0; i < particles.length; i++) {
    /// lo corrigo muy a lo indio pero creativo
  
    beginShape();
    noStroke();
    fill(227, 208, 156); //beige
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.8 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.8 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);

  }
  
  /////

  
  beginShape();
  noStroke();
  fill(227, 208, 156); //beige
  
  for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
    let xx = particles[0].body.position.x + particles[0].r * 9.8 * cos(j);
    let yy = particles[0].body.position.y + particles[0].r * 9.8 * sin(j);
  
    let p = morph(xx, yy);
    curveVertex(p.x, p.y);
  }
  endShape(CLOSE);
////

}

/////////////////////////

function drawColorsCeleste2() {
  for (var i = 0; i < particles.length; i++) {
    strokeWeight(0.5);
    stroke(0);
    fill(118, 188, 170); //celeste02
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.51 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.51 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);
  }
  beginShape();
  strokeWeight(0.5);
  stroke(0);
  for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
    let xx = particles[0].body.position.x + particles[0].r * 6.81 * cos(j);
    let yy = particles[0].body.position.y + particles[0].r * 6.81 * sin(j);
  
    let p = morph(xx, yy);
    curveVertex(p.x, p.y);
  }
  endShape(CLOSE);


  for (var i = 0; i < particles.length; i++) {
    noStroke();
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.5 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.5 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);
  }




}

function drawColorsCeleste1() {
  for (var i = 0; i < particles.length; i++) {
    strokeWeight(0.5);
    stroke(0);
    fill(54, 162, 164); //celeste01
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.4 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.4 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x+0.1, p.y+0.1);
    }
    endShape(CLOSE);
  }
  beginShape();
  strokeWeight(0.5);
  stroke(0);
  for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
    let xx = particles[0].body.position.x + particles[0].r * 4.81 * cos(j);
    let yy = particles[0].body.position.y + particles[0].r * 4.81 * sin(j);
  
    let p = morph(xx, yy);
    curveVertex(p.x, p.y);
  }
  endShape(CLOSE);
  for (var i = 0; i < particles.length; i++) {
    noStroke();
    fill(54, 162, 164); //celeste01
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.4 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.4 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);
  }



}

function drawColorsNaranja() {
  
  for (var i = 0; i < particles.length; i++) {
    strokeWeight(0.5);
    stroke(0);
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.1 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.1 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x+0.1, p.y+0.1);
    }
    endShape(CLOSE);
  }
  
  for (var i = 0; i < particles.length; i++) {
    noStroke();
    fill(236, 102, 72); //NARANJA
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = particles[0 + i].body.position.x + particles[i].r * 1.1 * cos(j);
      let yy = particles[0 + i].body.position.y + particles[i].r * 1.1 * sin(j);

      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);

   
  }


}




/* back
  function res(x, y) {
    let p = createVector(x, y);
    let scl = 0.0009;
    let ang = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 12;
    let off = noise(p.x * scl, p.y * scl, frameCount * 0.001) * 50;
    p.x += cos(ang) * off;
    p.y += sin(ang) * off;
    return p;
  }
*/