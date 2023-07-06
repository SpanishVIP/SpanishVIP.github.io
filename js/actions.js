$(document).ready(function() {
    //Audio 1 Starts
    var audio1 = new Audio('assets/02 - Personal Pronouns.mp3')
    $(".recording1").mousedown(function() {
      audio1.load();
      audio1.play();
    });
    //Audio 1 Ends

    //Audio 2 Starts
    var audio2 = new Audio('assets/03 - Personal Pronouns.mp3')
    $(".recording2").mousedown(function() {
      audio2.load();
      audio2.play();
    });
    //Audio 2 Ends


  });