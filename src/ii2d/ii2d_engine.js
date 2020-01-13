/**
 *
 *
 * */


var randInt=function(a,b) {
	return Math.floor(Math.random()*(b-a)+a);
}

var setAttributes=function(v,lAttrib) {
  for(var k in lAttrib) {
    v[k]=lAttrib[k];
  }
}



class Engine {
  constructor() {
    this.particleManager = new ParticleManager();
    this.time=0;
    this.deltaTime=0.1;
  }

  draw() {

    ctx.clearRect(0,0,500,500);
		// var v = new Vector(0,0);
		// v.setRandInt(new Vector(100,150),new Vector(200,250)); //Pour setRandInt
		// ctx.fillRect(v.x,v.y,10,10);

		// for(let i = 0; i < 6 ; i++){
		// 	for(let j = 0;j<6;j++){
		// 		ctx.fillStyle = `rgb(
		// 			${Math.floor(255 - 45.5 * i)},
		// 			${Math.floor(255 - 42.5 * j)},
		// 			0)`;
		// 		ctx.fillRect(j * 30,i * 30,30,30);
		// 	}
		// }


		this.particleManager.draw();
  }

  updateData() {
		this.particleManager.update();
  }

  loop() {
    this.time+=this.deltaTime;
    this.updateData();
    this.draw();
    window.requestAnimationFrame(this.loop.bind(this));
}

  start() {
    this.loop();
  }

}
