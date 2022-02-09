class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      restitution:0.5,
      friction:1,
      density:1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.boatPosition = boatPos
    this.image=loadImage("assets/boat.png")
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0,this.boatPosition,this.width,this.length)
    pop();
  }
}
