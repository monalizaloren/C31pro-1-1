class Rope
  {
    constructor(nlink, pointA)
    {
      this.nlink = nlink
  const group = Body.nextGroup(true);
  /*  uma pilha de corpos retangulares é criada usando o método Composites.stack() do Matter.js.
   A pilha é criada com this.nlink retângulos*/
   /* 1: número de colunas de corpos na pilha
   5: número de linhas de corpos na pilha
   5: espaçamento horizontal entre os corpos retangulares na pilha*/

  const rects = ????(100, 100, this.nlink, ?, ?, ?, function(x, y) {
      return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { group: group } });
  });
      
  this.pointA = pointA;
  /* rects: o array de corpos retangulares que será utilizado para criar a cadeia de corpos.
0.1: a distância entre os corpos retangulares na cadeia.
0: a inclinação inicial da cadeia.
-0.6: a força de torque aplicada nos corpos retangulares para mantê-los alinhados.
0: o deslocamento inicial da cadeia.
{ stiffness: 0.1, length: 0.1, render: {type: 'line'} }: um objeto de opções usado para personalizar a física da cadeia e sua renderização no canvas.*/
  this.body = Composites.chain(rects, ?, ?, ?, ?, {stiffness: 0.1, length: 0.1, render: {type: 'line'}});
      
  World.add(engine.world, this.body);
  
      
    Composite.add(rects, Constraint.create({
    pointA: this.pointA,
    bodyB: rects.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 0.1
  }));
      
    }
    
    break()
    { 
      this.body = null;
    }
    
    show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.bodies.length-1; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
             }
        }
    }
    
    drawVertices(vertices) 
    {
      beginShape();
      fill('#FFF717')
      noStroke();
      
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);
   }

   showConstraints(constraints) 
   {
     if(constraints!=null)
     {
    for (let i = 0; i < constraints.length; i++) {
      this.drawConstraint(constraints[i]);
    }
  }
  }
  
  drawConstraint(constraint) {
    if(constraint!=null)
      {
    const offsetA = constraint.pointA;
    let posA = {x:0, y:0};
    if (constraint.bodyA) {
      posA = constraint.bodyA.position;
    }
    const offsetB = constraint.pointB;
    let posB = {x:0, y:0};
    if (constraint.bodyB) {
      posB = constraint.bodyB.position;
    }
    push()
    strokeWeight(4);
    stroke(255);
    line(
      posA.x + offsetA.x,
      posA.y + offsetA.y,
      posB.x + offsetB.x,
      posB.y + offsetB.y
    );
    pop();
      }
  }
  
    
  }
