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
//     });
//
//     $(document).mousemove(function(e){
//         $('').html(e.pageX +', '+ e.pageY);
//     });
//
//     $("#end").mouseover(function () {
//         if(flag === true) {
//             $("#status").html("you win!");
//         }
//
//     });
//     $(function(){
//
//     });
// });
/*I like the jquery which greatly simplifies javascript programming.
* With the help of jquery we select html elements and perform "actions" on them.
* We also handles the jQuery events with different methods like click, hover.. etc
* Here i used mouseover, mousemove to control the cursor.
*
* Here is my link:
*  https://kushal2022.github.io/kdhakal.io/ */
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
