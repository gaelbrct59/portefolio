var canvas;
var ctx; // !!! context 2D (drawing)

var engine;
var isClicked = false;
var oldMouse = new Vector(0,0);

window.addEventListener("load",main);

function main() {
   	canvas=document.getElementById("canvas");
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);

    function handleMouseDown(event){
      //get the mouse relative to canvas
      isClicked = true;
      var mouseX = event.layerX-canvas.offsetLeft;
      var mouseY = event.layerY-canvas.offsetTop;
      var mouse = new Vector(mouseX, mouseY);
      engine.particleManager.select(mouse);
      // console.log(engine.particleManager.selected)
    }
    function handleMouseMove(event){
      var mouseX = event.layerX-canvas.offsetLeft;
      var mouseY = event.layerY-canvas.offsetTop;
      var mouse = new Vector(mouseX, mouseY);

      if(isClicked && engine.particleManager.selected != null){
        engine.particleManager.selected.move(new Vector(mouse.x-oldMouse.x,mouse.y-oldMouse.y));
      }

      oldMouse.setXY(mouseX, mouseY);

    }

    function handleMouseUp(event){
      isClicked = false;
    }


  	ctx=canvas.getContext("2d");

    engine=new Engine();
    var gen1 = new GeneratorBox();
    gen1.min.setXY(50,50);
    gen1.max.setXY(75,75);

    var gen2 = new GeneratorBox();
    gen2.min.setXY(150,150);
    gen2.max.setXY(175,175);

    engine.particleManager.generatorList.push(gen1,gen2); // ajoute au tableau generatorList



    engine.start();


}
