const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var ground,ball,box;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,790,1200,10)
ground1=new Ground(600,400,800,10)
ball=new Ball(300,500,80,80)
ball1=new Ball(500,500,80,80)
ball2=new Ball(700,500,80,80)
ball3=new Ball(900,500,80,80)
rope=new Rope(ball.body,{x:300,y:400})
rope1=new Rope(ball1.body,{x:500,y:400})
rope2=new Rope(ball2.body,{x:700,y:400})
rope3=new Rope(ball3.body,{x:900,y:400})

console.log(ball.body)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    ball.display()
 ball1.display()
 ball2.display()
 ball3.display()
     rope.display()
     rope1.display()
     rope2.display()
     rope3.display()

        ground1.display()
        
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly()
}