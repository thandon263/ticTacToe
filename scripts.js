$(document).on('ready', function(){

    //Add a value to the div on click
//    $('div.box').on('click', function(){
//        if($('.box').text()===" "){
//            $(this).click('text', 'X');
//        }
//    });


    $('.box').on('click',  function(){

        if($(this).text('X').css('background', '#fff')){

                $($('.box')[Math.floor(Math.random() * $('.box').length)]).text("O").removeClass(".unclicked");

            };

        });


