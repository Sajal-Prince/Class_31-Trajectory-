class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    //loading the smoke image.
    this.smokeImage = loadImage("sprites/smoke.png");
    //making an empty array to stor the path of the bird.
    this.trajectory = [];
  }

  display() {
    super.display();
    var pos = this.body.position;
    
    //storing the position of the bird when the position is above 200.
    if(this.body.velocity.x > 10 && this.body.position.x > 200)
    {
      //storing each point of the bird.
    var posArray = [pos.x,pos.y];
      //pusing each point into the array.
    this.trajectory.push(posArray);
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    for(var i = 0; i < this.trajectory.length ; i++)
    {
      //using for loop printing the image of the smoke at every point.
      image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1])
    }

  }
}
