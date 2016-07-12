$(document).on('ready', function(){
    //create variables
    var box_one = $('#one');
    var box_two = $('#two');
    var box_three = $('#three');
    var box_four = $('#four');
    var box_five = $('#five');
    var box_six = $('#six');
    var box_seven = $('#seven');
    var box_eight = $('#eight');
    var box_nine = $('#nine');

    var box = $('.box');
    //Keep count on the number of turns per play
var turn = 1;

    //event handler for click, 'X' and 'O'
    box.on('click',  function(){



        if( turn % 2 == 0 ){
            $(this).addClass('X').append('X');

        }else{

            $(this).addClass('O').append('O');
        }

        $(this).off('click');

        turn++;
        checkWin();
    });


    function checkWin(){

        //Top Row check for win
        if((box_one.hasClass('X')&&  box_two.hasClass('X')&&               box_three.hasClass('X')) || (box_one.hasClass('O')&&           box_two.hasClass('O')&&  box_three.hasClass('O')) ){

           alert("Win!!");

        }

        // Middle row check
        if((box_four.hasClass('X')&& box_five.hasClass('X')&&               box_six.hasClass('X')) || (box_four.hasClass('O')&&           box_five.hasClass('O')&& box_six.hasClass('O'))){

            alert('Win!!');
        }

        //Bottom row check for win
        if((box_seven.hasClass('X') && box_eight.hasClass('X') &&        box_nine.hasClass('X')) || (box_seven.hasClass('O') &&        box_eight.hasClass('O') && box_nine.hasClass('O'))){

            alert("Win!!");
        }


        //Diagonal test for win
        if((box_one.hasClass('X') && box_five.hasClass('X') &&             box_nine.hasClass('X')) || (box_one.hasClass('O') &&           box_five.hasClass('O') && box_nine.hasClass('O'))){

            alert("Win!!");
        }

        if((box_three.hasClass('X')  && box_five.hasClass('X') &&           box_seven.hasClass('X')) || (box_three.hasClass('O') &&       box_five.hasClass('O') && box_seven.hasClass('O'))){

            alert("Win!!");
        }

        //Vertical Left column check for win
        if((box_one.hasClass('X') && box_four.hasClass('X') &&              box_seven.hasClass('X')) || (box_one.hasClass('O') &&          box_four.hasClass('O') && box_seven.hasClass('O'))){

            alert("Win!!");
        }

       //Vertical Center column check for win
        if((box_two.hasClass('X') && box_five.hasClass('X') &&              box_eight.hasClass('X')) || (box_two.hasClass('O') &&          box_five.hasClass('O') && box_eight.hasClass('O'))){

            alert("Win!!");
        }

        //Vertical Right column check for win
        if((box_three.hasClass('X') && box_six.hasClass('X') &&             box_nine.hasClass('X')) || (box_three.hasClass('O') &&         box_six.hasClass('O') && box_nine.hasClass('O'))){

            alert("Win!!");
        }

    }

});



/*

PSEUDOCODE:

=> Create event handler for the on click event
=> declare all required variables
=>
=> If (count % 2 == 0)
        For each value of 'X' [play]to count++
   else
        For each value of 'O' [play]to count++
   end
    [play]to Count++
=>  Check for win

=>
    if combination is valid
         return winner
    else
        no combination
        draw
    end

<==========================================>

*/


