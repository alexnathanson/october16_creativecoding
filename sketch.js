function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  fill(0,0,0,0);
	translate(width/2, height/2);
  fractal(400);
  translate(0, 0);

  
}

function draw() {
  // put drawing code here

  fill(0,255,0,100);
  rect(10,50,300,100);
  textAlign(CENTER);
  fill(255);
  textSize(200);
  text("uwu", width/2, height/2); // maru's addition!
  Shannon();
  les();



}

function fractal(iter){
	if(iter == 0){
		 
	}else{
		ellipse(0, 0,iter*2,iter*.9);
		rotate(5);
		iter = iter - 1;
		fractal(iter);
	}
}

function Shannon(){
 fill(255, 153, 0);
 noStroke();
 rect(width-300, height-300, 150,230, 10);
 fill(207,124,0);
 rect(width-300, height-300, 150, 30,);
 fill(255, 153, 0);
 rect(width-320, height-340, 190, 50,10);
}

function les(){
  stroke(0);
  fill(170, 170, 170);
  quad(500, 750, 1100, 750, 1400, 850, 200, 850);
  fill(240, 234, 70);
  rect(795, 750, 10, 50);
  rect(795, 810, 10, 40);
}