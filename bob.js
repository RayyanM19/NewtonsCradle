class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.r=r;

        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}