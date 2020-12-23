class Constraint{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.constr = Matter.Constraint.create(options);
        //this.sling = Constraint.create(options);
        World.add(world, this.constr);
    }

    attach(body){
        this.constr.bodyA = body;
    }

    fly(){
        this.constr.bodyA = null;
    }

    display(){
        if (this.constr.bodyA){
        var pointA = this.constr.bodyA.position;
        var pointB = this.constr.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
