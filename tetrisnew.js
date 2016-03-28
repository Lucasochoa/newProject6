Example of "Tetris" from Class
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html>
<head>
<title>Example Game Like Thing</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>
var piecex = 0;
var piecey = 0;
$(document).ready(function() {
  var gameboard = $("<div id='gameboard'></div>");
  $(document.body).append(gameboard);
  var piece = $("<div class='piece'></div>");
  $(gameboard).append(piece);
  $(document).keydown(function(e) {
    if(e.keyCode==37) {
      // left arrow clicked
      piecex -= 25;
    } else if(e.keyCode == 39) {
      // right arrow clicked
      piecex += 25;
    }
    $(".piece").css("left", piecex + "px");
  });
  setInterval(function() {
    piecey += 25;
    $(".piece").css("top", piecey + "px");
  }, 1000);
})
</script>
<style>
#gameboard {
  background-color: gray;
  width: 300px;
  height: 300px;
  position: relative;
}
.piece {
  background-color: #AAF;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
</head>
<body>
</body>
</html>
Published by Google Drive–Report Abuse–Updated automatically every 5 minutes