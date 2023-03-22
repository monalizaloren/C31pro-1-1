const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
/*const Composites = Matter.Composites;: O Composites é um módulo que contém funções
 para criar conjuntos complexos de corpos rígidos, como pilhas, paredes, etc.

const Composite = Matter.Composite;: O Composite é um módulo que contém funções para
 manipular grupos de corpos rígidos, como adicionar, remover ou mover corpos entre
  diferentes grupos. */
let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;

var button;
var bunny;
var blink,eat,sad;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
  /*Carregue a animação para eat e sad*/
  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
/*Carregue a animação para eat e sad*/

  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  sad.looping= false;
  /* Defina que a animação do eat, não ficará em loop */
  
}

function setup() {
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  
  rope = new Rope(7,{x:245,y:30});
  ground = new Ground(200,690,600,20);
/* Essas linhas de código definem a taxa de quadros (frame rate)
 para a reprodução daanimações.*/
/*estamos reduzindo a taxa de quadros dessas animações para 1/20 segundos, o que 
significa que cada frame é exibido durante 0.05 segundos. Isso pode ser útil para 
diminuir a velocidade da animação ou para torná-la mais suave.*/

  blink.frameDelay = 20;
  //Defina o frameDelay de 20 para a animação eat e sad
  

  bunny = createSprite(230,620,100,100);
  bunny.scale = 0.2;

  bunny.addAnimation('blinking',blink);
//Adicione a animação 'eating', eat
//Adicione a animação 'crying',sad
  
  bunny.changeAnimation('blinking');
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,490,690);

  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }

  rope.show();
  Engine.update(engine);
  ground.show();

  if(collide(fruit,ground.body)==true )
  {
     bunny.changeAnimation('crying');
   }

   /*Programe que:
   Se a fruta colidindo no coelho, for verdadeiro, mude a animação
   para 'eating'*/

   drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
         //Prgrame que:
         //Se a 'd' for menor ou igual a 80
          //???
            {
              //Coloque o código que remove a fruta do mundo
              ???(engine.world,fruit);
               fruit = null;
               return true; 
            }
            else{
              //Retorne falso
            }
         }
}
