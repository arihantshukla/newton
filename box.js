class Box{
    constructor(x,y,width,height){
var options = {
restitution:1,
density:3,
friction:6
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.width=width
this.height=height
    }
    display(){
        var angle = this.body.angle
        var pos=this.body.position
     push()
     translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()

    }
}