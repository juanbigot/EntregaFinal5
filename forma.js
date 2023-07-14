class Obj {
  constructor() {
    this.t = 0.0; // Variable de tiempo para controlar la deformación
    this.deformationSpeed = 0.05; // Velocidad de deformación

    // Otros atributos del objeto
  }

  update() {
    this.t += this.deformationSpeed;

  }

  display() {
 this.drawShape1();

  }

  drawShape1() {
    // Definir los puntos de la forma 1
    let shape1Points = [
      { x: 116, y: 35 },
      { x: 58, y: 78 },
      { x: 0, y: 64 },
      { x: 0, y: 6 },
      { x: 58, y: 12 },
      { x: 116, y: 6 },
    ];

    // Deformar los puntos utilizando el ruido y this.t
    for (let i = 0; i < shape1Points.length; i++) {
      let xOff = map(i, 0, shape1Points.length, 0, 10); // Factor de escala para el ruido
      let yOff = this.t; // Desplazamiento vertical para el ruido
      let deformation = map(noise(xOff, yOff), 0, 1, -10, 10); // Valor de deformación basado en el ruido
      shape1Points[i].x += deformation;
      shape1Points[i].y += deformation;
    }

    // Dibujar la forma 1 deformada
    push();
    scale(0.9);
    translate(-60, -20);
    noStroke();
    fill(236, 178, 0); // amarillo
    beginShape();
    curveVertex(
      shape1Points[shape1Points.length - 1].x,
      shape1Points[shape1Points.length - 1].y
    );
    for (let i = 0; i < shape1Points.length; i++) {
      curveVertex(shape1Points[i].x, shape1Points[i].y);
    }
    curveVertex(shape1Points[0].x, shape1Points[0].y);
    curveVertex(shape1Points[1].x, shape1Points[1].y);
    endShape();
    pop();
  }
///////////////////

}


class Obj2 {
  constructor() {
    this.t = 0.0; // Variable de tiempo para controlar la deformación
    this.deformationSpeed = 0.05; // Velocidad de deformación

    // Otros atributos del objeto
  }

  update() {
    this.t += this.deformationSpeed;

  }

  display() {
 this.drawShape2();

  }

  drawShape2() {
    // Definir los puntos de la forma 2
    let shape2Points = [
      { x: 100, y: 0 },
      { x: 200, y: 0 },
      { x: 250, y: 100 },
      { x: 200, y: 200 },
      { x: 100, y: 200 },
      { x: 50, y: 100 },
  
    ];
  
    // Deformar los puntos utilizando el ruido y this.t
    for (let i = 0; i < shape2Points.length; i++) {
      let xOff = map(i, 0, shape2Points.length, 0, 10); // Factor de escala para el ruido
      let yOff = this.t; // Desplazamiento vertical para el ruido
      let deformation = map(noise(xOff, yOff), 0, 1, -10, 10); // Valor de deformación basado en el ruido
      shape2Points[i].x += deformation;
      shape2Points[i].y += deformation;
    }
  
    // Dibujar la forma 2 deformada
    push();
    scale(0.3);
    translate(-180, -110);
    noStroke();
    fill(236, 178, 0); // amarillo
    beginShape();
    curveVertex(shape2Points[shape2Points.length - 1].x, shape2Points[shape2Points.length - 1].y);
    for (let i = 0; i < shape2Points.length; i++) {
      curveVertex(shape2Points[i].x, shape2Points[i].y);
    }
    curveVertex(shape2Points[0].x, shape2Points[0].y);
    curveVertex(shape2Points[1].x, shape2Points[1].y);
    endShape();
    pop();
  }
///////////////////

}

class Obj3 {
  constructor() {
    this.t = 0.0; // Variable de tiempo para controlar la deformación
    this.deformationSpeed = 0.05; // Velocidad de deformación

    // Otros atributos del objeto
  }

  update() {
    this.t += this.deformationSpeed;

  }

  display() {
 this.drawShape3();

  }

  drawShape3() {
    // Definir los puntos del polígono principal
    let shape6Points = [
      { x: 100, y: 0 },
      { x: 200, y: 0 },
      { x: 250, y: 100 },
      { x: 200, y: 200 },
      { x: 100, y: 200 },
      { x: 50, y: 100 },
    ];
  
    // Agregar puntos adicionales para crear un polígono cóncavo
    let concavePoints = [
      { x: 125, y: 50 },
      { x: 175, y: 50 },
      { x: 200, y: 70 },
      { x: 225, y: 150 },
      { x: 175, y: 150 },
    ];
  
    // Combinar los puntos en un solo arreglo
    let allPoints = [...shape6Points, ...concavePoints];
  
    // Deformar los puntos utilizando el ruido y this.t
    for (let i = 0; i < allPoints.length; i++) {
      let xOff = map(i, 0, allPoints.length, 0, 10); // Factor de escala para el ruido
      let yOff = this.t; // Desplazamiento vertical para el ruido
      let deformation = map(noise(xOff, yOff), 0, 1, -10, 10); // Valor de deformación basado en el ruido
      allPoints[i].x += deformation;
      allPoints[i].y += deformation;
    }
  
    // Dibujar el polígono cóncavo con curvas
    push();
    scale(0.5);
    translate(-150, -110);
    noStroke();
    fill(236, 178, 0); // amarillo
    beginShape();
    curveVertex(allPoints[allPoints.length - 1].x, allPoints[allPoints.length - 1].y);
    for (let i = 0; i < allPoints.length; i++) {
      curveVertex(allPoints[i].x, allPoints[i].y);
    }
    curveVertex(allPoints[0].x, allPoints[0].y);
    curveVertex(allPoints[1].x, allPoints[1].y);
    endShape(CLOSE);
    pop();
  }
///////////////////

}



