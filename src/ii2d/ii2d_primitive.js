import randInt from './ii2d_engine.js'
/**
 *
 * Vector
 *
 *  */
class Vector {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }

  setRandInt(p1,p2){
    this.x = randInt(p1.x, p2.x);
    this.y = randInt(p1.y, p2.y);
  }

  setXY(x,y){
    this.x = x;
    this.y = y;
  }

  getDistance(a1){
    return Math.sqrt((Math.pow(a1.x - this.x, 2)) + ((Math.pow(a1.y - this.y, 2))));
  }


};
