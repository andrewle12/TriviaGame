$(document).ready(function() {
  var pageCount = 1;
  var time = 15;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var answer = "Pikachu";
  var intervalId;

  //Hide result page and buttons
  $("#result").hide();
  $("#resultgif").hide();
  $("#continue").hide();
  $("#time").text("Time Remaining:" + time);

  //Hide multiple choice buttons and display result buttons
  $(".btn").on("click", function() {
    $(".btn").hide();
    $("#time").hide();
    $("#shadow").hide();
    $("#result").show();
    $("#resultgif").show();
    $("#continue").show();
  });

  //continue button to advance page and reshow multiple choice buttons
  $("#continue").on("click", function() {
    $(".btn").show();
    $("#time").show();
    $("#shadow").show();
    $("#result").hide();
    $("#resultgif").hide();
    $("#continue").hide();
    time = 16;
    run();
    $("#resultgif").empty();

    if (pageCount == 1) {
      $("#resultgif").append('<img id="22a" src="assets/images/2a.webp" />');
    }
    if (pageCount == 2) {
      $("#resultgif").append('<img id="33a" src="assets/images/3a.gif" />');
    }
    if (pageCount == 3) {
      $("#resultgif").append('<img id="44a" src="assets/images/4a.gif" />');
    }
    if (pageCount == 4) {
      $("#resultgif").append('<img id="55a" src="assets/images/5a.gif" />');
    }
    if (pageCount == 5) {
      $("#resultgif").append('<img id="66a" src="assets/images/6a.webp" />');
    }
    if (pageCount == 6) {
      $("#resultgif").append('<img id="77a" src="assets/images/7a.gif" />');
    }
    pageCount++;
    refreshPage();
  });

  //Uses the refreshPage function to advance the page
  var refreshPage = function() {
    if (pageCount == 1) {
      $(".btn-primary").text("Pikachu");
      $(".btn-secondary").text("Raichu");
      $(".btn-success").text("Electabuzz");
      $(".btn-danger").text("Magmar");
      answer = "Pikachu";

      $("#shadow").append('<img id="1a" src="assets/images/1.jpg" />');

      $(".btn-primary").on("click", function() {
        rightAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        wrongAnswer();
      });

      $(".btn-danger").on("click", function() {
        wrongAnswer();
      });
  
    } else if (pageCount == 2) {
      $(".btn-primary").text("Kakuna");
      $(".btn-secondary").text("Weepinbell");
      $(".btn-success").text("Metapod");
      $(".btn-danger").text("Paras");
      answer = "Metapod";

      $("#shadow").empty();
      $("#shadow").append('<img id="2a" src="assets/images/2.png" />');

      $(".btn-primary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        rightAnswer();
      });

      $(".btn-danger").on("click", function() {
        wrongAnswer();
      });
  
    } else if (pageCount == 3) {
      $(".btn-primary").text("Meowth");
      $(".btn-secondary").text("Sandshrew");
      $(".btn-success").text("Cubone");
      $(".btn-danger").text("Marowak");
      answer = "Cubone";

      $("#shadow").empty();
      $("#shadow").append('<img id="3a" src="assets/images/3.png" />');

      $(".btn-primary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        rightAnswer();
      });

      $(".btn-danger").on("click", function() {
        wrongAnswer();
      });
  
    } else if (pageCount == 4) {
      $(".btn-primary").text("Vulpix");
      $(".btn-secondary").text("Kadabra");
      $(".btn-success").text("Clefairy");
      $(".btn-danger").text("Growlithe");
      answer = "Growlithe";

      $("#shadow").empty();
      $("#shadow").append('<img id="4a" src="assets/images/4.png" />');

      $(".btn-primary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        wrongAnswer();
      });

      $(".btn-danger").on("click", function() {
        rightAnswer();
      });
  
    } else if (pageCount == 5) {
      $(".btn-primary").text("Psyduck");
      $(".btn-secondary").text("Mankey");
      $(".btn-success").text("Golduck");
      $(".btn-danger").text("Machoke");
      answer = "Psyduck";

      $("#shadow").empty();
      $("#shadow").append('<img id="5a" src="assets/images/5.png" />');

      $(".btn-primary").on("click", function() {
        rightAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        wrongAnswer();
      });

      $(".btn-danger").on("click", function() {
        wrongAnswer();
      });
  
    } else if (pageCount == 6) {
      $(".btn-primary").text("Rapidash");
      $(".btn-secondary").text("Tauros");
      $(".btn-success").text("Arcanine");
      $(".btn-danger").text("Ponyta");
      answer = "Ponyta";

      $("#shadow").empty();
      $("#shadow").append('<img id="6a" src="assets/images/6.jpg" />');

      $(".btn-primary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        wrongAnswer();
      });

      $(".btn-danger").on("click", function() {
        rightAnswer();
      });
  
    } else if (pageCount == 7) {
      $(".btn-primary").text("Flareon");
      $(".btn-secondary").text("Growlithe");
      $(".btn-success").text("Eevee");
      $(".btn-danger").text("Vulpix");
      answer = "Eevee";

      $("#shadow").empty();
      $("#shadow").append('<img id="7a" src="assets/images/7.png" />');

      $(".btn-primary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-secondary").on("click", function() {
        wrongAnswer();
      });

      $(".btn-success").on("click", function() {
        rightAnswer();
      });

      $(".btn-danger").on("click", function() {
        wrongAnswer();
      });
  
    } else if (pageCount == 8) {
      $(".btn-primary").hide();
      $(".btn-secondary").hide();
      $(".btn-success").hide();
      $(".btn-danger").hide();
      $("#time").hide();
      $("#shadow").hide();
      $("#continue").show();
      $("#continue").on("click", function(){
        location.reload();
      })

      $("#choiceA").text("Correct: " + correct);
      $("#choiceB").text("Incorrect: " + incorrect);
      $("#choiceC").text("Unanswered: " + unanswered);
    }
  };

  //Functions for right or wrong answer
  var rightAnswer = function() {
    $("#result").text("Correct!");
    correct++;
    console.log("Correct: "+correct);
  };
  var wrongAnswer = function() {
    $("#result").text("Nope! The correct answer is: " + answer);
    incorrect++;
    console.log("Incorrect: "+incorrect);
  };
  var noAnswer = function() {
    $("#result").text("Nope! The correct answer is: " + answer);
    unanswered++;
    console.log("Unanswered "+unanswered);
  };

  refreshPage();

  //Timer Stuff
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    if (pageCount == 9){
        stop();
    }
  }
  function decrement() {
    time--;
    $("#time").html("Time Remaining: " + time);
    if (time === 0 && pageCount<8) {
      stop();
      noAnswer();
    $(".btn").hide();
    $("#time").hide();
    $("#shadow").hide();
    $("#result").show();
    $("#resultgif").show();
    $("#continue").show();
    }
  }
  function stop() {
    clearInterval(intervalId);
  }
  run();

});
