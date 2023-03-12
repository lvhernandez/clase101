var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a79c2832-e4ca-41cc-9f3e-db79abf412b9","347f6c9e-82ec-4c9f-b9c7-a6ca506aedeb","0ba322a8-3473-4ffe-ac4d-d013d9a70b80"],"propsByKey":{"a79c2832-e4ca-41cc-9f3e-db79abf412b9":{"name":"diamon","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"347f6c9e-82ec-4c9f-b9c7-a6ca506aedeb":{"name":"ladron","sourceUrl":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png"},"0ba322a8-3473-4ffe-ac4d-d013d9a70b80":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/uEAqWZ6DUSeUBR36NH5T5U.mGEmamW07/category_backgrounds/texture_01.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"uEAqWZ6DUSeUBR36NH5T5U.mGEmamW07","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uEAqWZ6DUSeUBR36NH5T5U.mGEmamW07/category_backgrounds/texture_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var diamondBox;
var laser1= createSprite(100,0,200,5);
laser1.shapeColor="red";
laser1.velocityY= 2;

var laser2=createSprite(300,400,200,5);
laser2.shapeColor="red";
laser2.velocityY= -2;

var thief= createSprite(10,390,30,30);



var goal =0;
var death = 0;

function setup() {






  diamondBox= createSprite(390,10,30,30);
  diamondBox.setAnimation("diamon")
  diamondBox.scale=0.2
  diamondBox.shapeColor="blue";
  
}
function draw() {
  background(220);
  var edges=createEdgeSprites();
  
  thief.bounceOff(edges);
  laser1.bounceOff(edges)
  laser2.bounceOff(edges)
  
  fill("white");

 if(keyIsDown(RIGHT_ARROW)) {
thief.velocityX=2;
thief.velocityY=0;
}
if(keyIsDown(LEFT_ARROW)){
thief.velocityX=-2;
thief.velocityY=0;
}
if(keyIsDown(UP_ARROW)){
thief.velocityX=0;
thief.velocityY=-2;
}
if(keyIsDown(DOWN_ARROW)){
thief.velocityX=0;
thief.velocityY= 2;
}


if(thief.isTouching(laser1)|| thief.isTouching(laser2)){
   stroke(0)
    fill(0)
    textSize(24);
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3")
   laser1.velocityY=0;
    laser2.velocityY=0;
    thief.velocityY=0;
        thief.velocityX=0;
  text("Ladrón atrapado",120,200);
}
if(thief.isTouching(diamondBox)){
  stroke(0)
    fill(0)
    textSize(24);
  playSound("assets/category_explosion/melodic_loss_6.mp3")
  text("El ladrón consiguió el diamante",100,200); 
laser1.velocityY=0;
    laser2.velocityY=0;
    thief.velocityY=0;
    thief.velocityX=0;
}





    drawSprites();

}
stroke(0);
fill(0);
textSize(24);
text("Atrapa al ladrón",120,200);


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
