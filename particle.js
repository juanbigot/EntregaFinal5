function Particle(x, y, r) {
  var options = {
    friction: 0.3,
    restitution: 0.6,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push(); //////////////////////////////////////////////////////
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);

    strokeWeight(0.5);
    stroke(10);
    //fill(0,50); // colicionadora BORRAR
    fill(234, 73, 135); //fuxia
    beginShape();
    for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
      let xx = 0 + this.r * 0.85 * cos(j);
      let yy = 0 + this.r * 0.85 * sin(j);
      let p = morph(xx, yy);
      curveVertex(p.x, p.y);
    }
    endShape(CLOSE);

    if (this.r >= 135) {
      fill(42, 48, 47); //Negro

      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.8 * cos(j);
        let yy = 0 + this.r * 0.8 * sin(j);

        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      if (forma == 1) {
        push();
        scale(1.0);
        translate(-r / 2.5, -r / 1.5);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();
        vertex(47, 0);
        bezierVertex(74, 1, 110, 13, 119, 42);
        bezierVertex(122, 51, 115, 70, 102, 65);
        bezierVertex(99, 64, 97, 61, 95, 58);
        bezierVertex(89, 49, 82, 42, 70, 45);
        bezierVertex(61, 47, 55, 56, 57, 66);
        bezierVertex(58, 71, 62, 76, 66, 79);
        bezierVertex(73, 83, 84, 81, 88, 88);
        bezierVertex(91, 93, 89, 101, 87, 106);
        bezierVertex(81, 122, 77, 139, 73, 155);
        bezierVertex(71.22, 163.42, 68, 169.63, 60, 173);
        bezierVertex(54, 176, 46, 176, 39, 176);
        bezierVertex(27, 175, 11, 172, 2, 162);
        bezierVertex(-10, 146, 24, 81, 10, 36);
        bezierVertex(4, 9, 20, -1, 47, 0);
        endShape();

        beginShape(); /////// particula con movimiento
        fill(42, 48, 47); //Negro

        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 40 + 8 * cos(j);
          let yy = 130 + 7 * sin(j);
          let p = morph(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        pop();
      } else if (forma == 2) {
        push();
        scale(1.55);
        translate(-r / 2.3, -r / 2.3);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();
        vertex(76, 71);
        bezierVertex(53, 98, 79, 123, 62, 123);
        bezierVertex(27, 123, 0, 95, 0, 61);
        bezierVertex(0, 31, 20, 0, 49, 0);
        bezierVertex(60, 0, 61, 13, 78, 21);
        bezierVertex(85, 24, 100, 23, 100, 33);
        bezierVertex(101, 46, 85, 60, 76, 71);
        endShape();

        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 100 + 10 * cos(j);
          let yy = 90 + 10 * sin(j);
          let p = morph(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();

        pop();
      } else if (forma == 3) {
        push();
        scale(1.6);
        translate(-r / 2.5, -r / 6.5);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();
        vertex(116.25, 24.28);
        bezierVertex(116, 56, 90, 82, 58, 82);
        bezierVertex(26, 82, 0, 56, 0, 24);
        bezierVertex(0, -7, 26, 1, 58, 1);
        bezierVertex(90, 1, 116, -7, 116, 24);
        endShape();
        pop();
      } else if (forma == 4) {
        push();
        scale(2.0);
        translate(-r / 3.1, -r / 3.5);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();
        vertex(68.75, 80.28);
        bezierVertex(34, 98, 55, 67, 37, 59);
        bezierVertex(24, 53, 19, 70, 8, 62);
        bezierVertex(-10, 47, 6, 8, 20, 1);
        bezierVertex(32, -4, 61, 6, 73, 13);
        bezierVertex(79, 16, 89, 24, 90, 34);
        bezierVertex(93, 53, 88, 69, 68, 80);
        endShape();
        fill(42, 48, 47); //Negro
        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 30 + 7 * cos(j);
          let yy = 30 + 7 * sin(j);
          let p = morph(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        pop();
      } else if (forma == 5) {
        push();
        scale(1.55);
        translate(-r / 2.3, -r / 2.3);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();
        vertex(76, 71);
        bezierVertex(53, 98, 79, 123, 62, 123);
        bezierVertex(27, 123, 0, 95, 0, 61);
        bezierVertex(0, 31, 20, 0, 49, 0);
        bezierVertex(60, 0, 61, 13, 78, 21);
        bezierVertex(85, 24, 100, 23, 100, 33);
        bezierVertex(101, 46, 85, 60, 76, 71);
        endShape();
        fill(42, 48, 47); //Negro
        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 30 + 10 * cos(j);
          let yy = 50 + 10 * sin(j);
          let p = morph(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();

        pop();
      }
    } else if (this.r >= 130 && this.r <= 134) {
      fill(42, 48, 47); //Negro

      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.75 * cos(j);
        let yy = 0 + this.r * 0.75 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      if (forma2 == 1) {
        //// forma 01 abstracta
        push();
        scale(1.25);
        translate(-r / 2, -r / 2);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();

        for (let j = 0; j < TWO_PI; j += TWO_PI / 10) {
          let xx = 1.5 * cos(j);
          let yy = 1.5 * sin(j);
          let p = morph(xx, yy);

          vertex(138, 69);
          bezierVertex(138, 107, 107, 143, 69, 138);
          bezierVertex(28, 132, 8, 104, 38, 104);
          bezierVertex(60, 104, 80, 65, 38, 57);
          bezierVertex(19, 54, 15, 81, 15, 81);
          bezierVertex(11, 85, 0, 92, 0, 69);
          bezierVertex(0, 31, 31, 0, 69, 0);
          bezierVertex(107, 0, 138, 31, 138, 69);
        }
        endShape();
        beginShape(); /////// particula con movimiento
        fill(42, 48, 47); //Negro
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 70 + 10 * cos(j);
          let yy = 30 + 10 * sin(j);
          let p = res(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        beginShape(); /////// particula con movimiento
        fill(234, 73, 135); //fuxia
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 70 + 4 * cos(j);
          let yy = 30 + 4 * sin(j);
          let p = res(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        pop();
        //////////////////////////////////
      } else if (forma2 == 2) {
        push();
        scale(1.0);
        translate(-r / 3.1, -r / 3.5);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 30 + 60 * cos(j);
          let yy = 30 + 60 * sin(j);
          let p = res2(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        endShape();
        fill(42, 48, 47); //Negro
        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 60 + 7 * cos(j);
          let yy = 30 + 7 * sin(j);
          let p = res2(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        pop();
      } else if (forma2 == 3) {
        push();
        scale(1.0);
        translate(-r / 3.1, -r / 3.5);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 30 + 60 * cos(j);
          let yy = 30 + 60 * sin(j);
          let p = res2(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();

        beginShape(); /////// particula con movimiento
        for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
          let xx = 90 + 7 * cos(j);
          let yy = 80 + 7 * sin(j);
          let p = morph(xx, yy);
          curveVertex(p.x, p.y);
        }
        endShape();
        pop();
      } else if (forma2 == 4) {
        push();
        scale(2.2);
        translate(-r / 3.8, -r / 3.3);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape(); /////// particula con movimiento
        vertex(42.96, 33.25);
        bezierVertex(41, 53, 81, 47, 64, 64);
        bezierVertex(48, 80, 26, 82, 11, 67);
        bezierVertex(-3, 52, -3, 27, 11, 12);
        bezierVertex(20, 2, 34, -2, 45, 1);
        bezierVertex(68, 7, 44, 15, 42, 33);
        endShape();

        pop();
      } else if (forma2 == 5) {
        push();
        scale(1.0);
        translate(-r / 26, -r / 16);
        noStroke();
        fill(236, 178, 0); //amarillo
        beginShape();
        vertex(39.1, -66.3);
        bezierVertex(52.6, -59.9, 66.9, -53.4, 72.3, -42.3);
        bezierVertex(77.8, -31.2, 74.4, -15.6, 73.9, -0.3);
        bezierVertex(73.5, 15.1, 75.9, 30.1, 71.4, 43);
        bezierVertex(67, 55.8, 55.7, 66.4, 42.7, 72.5);
        bezierVertex(29.6, 78.5, 14.8, 80, 1.1, 78.1);
        bezierVertex(-12.7, 76.2, -25.3, 71, -38.9, 65.3);
        bezierVertex(-52.6, 59.6, -67.2, 53.4, -74.8, 42.4);
        bezierVertex(-82.4, 31.5, -83, 15.7, -78.1, 2.8);
        bezierVertex(-73.2, -10, -62.7, -20.1, -53.9, -29);
        bezierVertex(-45.1, -37.9, -37.9, -45.6, -29.3, -54.8);
        bezierVertex(-20.6, -64, -10.3, -74.6, 1.2, -76.8);
        bezierVertex(12.8, -79, 25.5, -72.7, 39.1, -66.3);
        endShape();

        pop();
      }
    } else if (this.r > 95 && this.r < 129) {
      fill(42, 48, 47); //Negro
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.7 * cos(j);
        let yy = 0 + this.r * 0.75 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      push();
      scale(0.9);
      obj.update();
      obj.display();
      pop();

    } else if (this.r > 85 && this.r < 94) {
      fill(42, 48, 47); //Negro
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.7 * cos(j);
        let yy = 0 + this.r * 0.75 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      
      push();
      scale(0.8);
      obj2.update();
      obj2.display();
      pop();
    

    } else if (this.r > 40 && this.r < 84) {
      fill(42, 48, 47); //Negro
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.7 * cos(j);
        let yy = 0 + this.r * 0.75 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      fill(236, 178, 0); //amarillo
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 3 + this.r * 0.5 * cos(j);
        let yy = 0 + this.r * 0.5 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
    } else if (this.r > 25 && this.r < 39) {
      fill(42, 48, 47); //Negro
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.5 * cos(j);
        let yy = 0 + this.r * 0.52 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      fill(236, 178, 0); //amarillo
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 3 + this.r * 0.2 * cos(j);
        let yy = 0 + this.r * 0.2 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
    } else if (this.r > 12 && this.r < 24) {
      fill(42, 48, 47); //Negro
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 0 + this.r * 0.4 * cos(j);
        let yy = 0 + this.r * 0.45 * sin(j);
        let p = res0(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
      fill(236, 178, 0); //amarillo
      beginShape();
      for (let j = 0; j < TWO_PI; j += TWO_PI / 360) {
        let xx = 3 + this.r * 0.2 * cos(j);
        let yy = 0 + this.r * 0.2 * sin(j);
        let p = morph(xx, yy);
        curveVertex(p.x, p.y);
      }
      endShape(CLOSE);
    } else {
      fill(42, 48, 47); //Negro
      // ellipse(0, 0, this.r );
    }

    pop(); ////////////////////////////////////////
  };
}


