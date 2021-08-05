// "use strict";
// $(document).ready(function(){
//
//     var flag = false;
//     function reset() {
//         $(".boundary").css("background-color", "");
//     }
//     $(".boundary").mouseover(function(){
//         if(flag === false) {
//             reset();
//         } else {
//             $(".boundary").css("background-color", "red");
//             $("#status").html("You lost the game!");
//         }
//     });
//
//     $("#start").click(function () {
//         flag = true;
//         $(".boundary").css("background-color", "");
//         $("#status").html("Move mouse to End in order to win the game");
//         $(".boundary").mousemove();
//     });
//
//     $(document).mousemove(function(e){
//         $('#status').html(e.pageX +', '+ e.pageY);
//     });
//
//     $("#end").mouseover(function () {
//         if(flag === true) {
//             $("#status").html("you win!");
//         }
//
//     })
// });

"use strict";

$(document).ready(function () {
    var start = $("#start");
    var end = $("#end");
    var maze = $("#maze");
    var boundary = $(".boundary");
    var gameStart = false;
    maze.mouseleave(function () { loss() });

    start.click(function () {
        $("#status").text('Move mouse to End in order to win the game');
        gameStart = true;
        if (boundary.hasClass('youlose')) {
            boundary.removeClass('youlose');
        }
        boundary.mousemove(function () { loss(); })
    });

    end.mousemove(function () {
        if (gameStart === true) won();
        else if (gameStart && boundary.hasClass('youlose')) loss();

    });

    function won() {
        gameStart = false;
        $("#status").text("You win! :]");
    }

    function loss() {
        if (gameStart) {
            gameStart = false;
            boundary.addClass('youlose');
            $("#status").text('Sorry, you lost. :[');
        }
    }
})
