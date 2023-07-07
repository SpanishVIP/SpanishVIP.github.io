

//Audio tables icon clickable
$(document).ready(function() {

  var audios = [];

  $(".recording").click(function() {

      var audioSrc = $(this).data('audioSrc');

      // Stop all other audios
      for (var i = 0; i < audios.length; i++) {
          audios[i].pause();
          audios[i].currentTime = 0;
      }

      var audio = new Audio(audioSrc);
      audios.push(audio);
      audio.play();

  });

});