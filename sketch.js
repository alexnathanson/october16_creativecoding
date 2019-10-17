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

