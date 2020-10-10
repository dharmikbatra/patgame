var arr = ["red","blue","green","yellow"];
var gamepat = [];
var userpat = [];
var lvl = 0;
var hold = true;
$(document).keypress(function(){
  if(hold){
  nextSequence();
  $("#level-title").text("level " + lvl);}
  hold = false;
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userpat.push(userChosenColour);
  playsound(userChosenColour);
  animate(userChosenColour);
  check(userpat);
});
function check(x){
  var l = userpat.length;
  var reql = gamepat.length;
  if(userpat[l-1]===gamepat[l - 1]){
    if(l==reql){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  }
  else{
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }


}

function nextSequence(){
  lvl++;
  $("#level-title").text("level " + lvl);
  var x = Math.floor(Math.random()*4);
  var y = arr[x];
  gamepat.push(y);
  playsound(y);
  animate(y);
  // $("."+y).fadeOut(100).fadeIn(100);
  userpat = [];
}
function playsound(id){
       var y= "sounds/" + id + ".mp3";
       var x = new Audio(y);
       x.play()
}

function animate(id){
  $("."+id).fadeOut(100).fadeIn(100);
}
function startOver() {
  lvl = 0;
  gamepat = [];
  hold = true;
}
// function nextSequence(){
//   var x = Math.random()*4;
//   x = Math.floor(x);
//   return x;
// }
// var i;
// for(i=0;i<4;i++)
// {
//   var id = "." + arr[i] ;
//   $(id).on("click",function(){
//     var y= "sounds/" + this.id + ".mp3";
//     var x = new Audio(y);
//     $(this).fadeOut(100).fadeIn(100);
//     x.play();
//   });
// }
// var lvl = 1;
// var corr = 1;
// var idreq;
// while(corr){
//   var randomchosencolor = arr[nextSequence()];
//   gamepat.push(randomchosencolor);
//   var idx = "." + randomchosencolor;
//   $(idx).fadeOut(100).fadeIn(100);
//   for (i=0;i<lvl;i++,lvl++){
//       idreq="."+ gamepat[i];
//       $(id).on("click",function(){
//         continue;
//       });
//       break;
//       corr--;
//   }
// lvl++;
// }




// var randomchosencolor = arr[nextSequence()];
// gamepat.push(randomchosencolor);
// var id = "." + randomchosencolor;
// var sound ="sounds/"+ randomchosencolor + ".mp3";
// $(id).fadeOut(100).fadeIn(100);
// // var audio = new Audio('sounds/red.mp3');
// // audio.play();
// $(id).on("click",function(){
//   var x = new Audio('sounds/red.mp3');
//   // audio.type = 'audio/mp3';
//   $(this).fadeOut(100).fadeIn(100);
//   x.play();
// });
// var x = new Audio('sounds/red.mp3');
// // audio.type = 'audio/mp3';
// x.play();
