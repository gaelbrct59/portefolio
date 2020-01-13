/**
 *
 *
 *
 * */

class GeneratorBox {
  constructor() {
    this.nbBirth=0;
    this.birthRate=1;
    this.longevite={
      min:50,
      max:100
    };

    this.min=new Vector(0,250);
    this.max=new Vector(200,500);
  }

  move(m){
    // var distance = new Vector(this.max.x - this.min.x, this.max.y - this.min.y);
    this.min.setXY(this.min.x + m.x, this.min.y + m.y);
    this.max.setXY(this.max.x + m.x, this.max.y + m.y);
  }

  distance(m){
    return m.getDistance(this.min);
  }

  initParticle(p) {
    p.position.setRandInt(this.min, this.max);
    p.color.r = randInt(0,255);
    p.color.g = randInt(0,255);
    p.color.b = randInt(0,255);


    //Question 17
    p.timeAlive = randInt(this.longevite.min, this.longevite.max);
  }
};



/**
 *
 *
 *
 *  */
class Particle {
  constructor() {
    this.position=new Vector(0,0);

    this.color={r:0,g:0,b:0,alpha:1};

    this.isAlive=false;
    this.timeAlive=0;
  }

  draw() {
    ctx.fillStyle='rgba(' + this.color.r + ', ' + this.color.g + ', ' + this.color.b + ', ' + this.color.alpha + ')';

    ctx.fillRect(this.position.x,this.position.y,10,10);
  }

};

/**
 *
 *
 *
 *
 * */


class ParticleManager {
  constructor() {
    this.all=[];
    this.nbAliveMax=500;
    this.generatorList=[];
    this.selected=null;

    for(var i=0;i<this.nbAliveMax;++i) {
      this.all.push(new Particle());
    }
  }
  select(m){

    var distanceMin = this.generatorList[0].distance(m);
    this.generatorList.forEach(generator => {
      if(distanceMin>=generator.distance(m)){
        this.selected = generator;
        distanceMin = generator.distance(m);
      }
    });
    if (distanceMin>50){
      this.selected=null;
    }

  }


  update() {

    this.generatorList.forEach(generator => {
      generator.nbBirth += generator.birthRate;
    });


    this.all.forEach(p => {
      if(p.isAlive){

        p.timeAlive--;
        p.color.alpha = p.color.alpha-(1/p.timeAlive);
        if(p.timeAlive <= 0){
          p.isAlive = false;
          p.color.alpha = 1;

        }
      }else{
        //Pour chaque générateurs, on affecte une particule, afin de pouvoir diviser parfaitement les particules entre les générateurs
        var find = false;
        this.generatorList.forEach(generator => {
          if(generator.nbBirth >= 1 && !find){
            p.isAlive = true;
            generator.initParticle(p);
            generator.nbBirth--;
            find = true;
          }
        });
      }

    });
    // var half = 0;
    // this.all.forEach(p => {
    //   if(half%2 == 0){
    //     this.generatorList[0].initParticle(p);
    //   }else{
    //     this.generatorList[1].initParticle(p);
    //   }
    //   half++;
    //
    // });


  }

  draw() {

    this.all.forEach(p => {
      if(p.isAlive){
        p.draw()
      }
  });
  }
}
