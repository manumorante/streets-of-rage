var $music = document.getElementById("music"),
  music = true;

$("#silence").on('click', function(){
  if(music){
    music = false;
    $music.pause();
  }else{
    music = true;
    $music.play();
  }
});