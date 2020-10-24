class Box {
constructor(x, y, w, h){
    var additional_properties = {
    'restitution' : 1,
    'friction' : 1,
     'density' : 1
     
    }
    this.body = Bodies.rectangle(x, y , w, h, additional_properties)
    this.width = w;
    this.height = h ;
}
 display(){

    var angle = this.body.angle
    push()
translate(this.body.position.x, this.body.position.y)
rotate(angle)
rectMode(CENTER)
    rect( 0, 0, this.width, this.height)
    pop()
 }

}