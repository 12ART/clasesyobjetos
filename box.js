class Box{
    //Caracteristicas
    constructor(x, y, w, h,){

        var  ground_options ={
          isStatic:true, 
        };

        this.body = Bodies.rectangle(x, y, w, h, ground_options)
        this.w = w;
        this.h = h;
        World.add(world, this.body)
    }
    //Funciones
    show(){

        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill("blue")
        rect(pos.x, pos.y, this.w, this.h)

        pop();

    }

}