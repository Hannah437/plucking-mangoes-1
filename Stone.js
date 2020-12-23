class Stone{
    constructor() {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(90, 470, 40, 40, options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
      }
}