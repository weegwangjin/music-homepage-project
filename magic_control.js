var check = 0;
$('#start').click(function () {
    if (check == 0) {
        $(this).animate({ marginTop: '30' }, 2000);
        $('h2').text('Choose one card in your mind and Click start button. so your card is only disappeared');
        $('#first').fadeOut("slow", function () {
        })
        $('#second').fadeOut("slow", function () {
        })
        $('#first').fadeIn("slow", function () {
            $('this').css('position', 'relative', 'bottom', 'auto');
        });
        $('#first').animate({ marginTop: '30', marginLeft: '30%' }, 1000);
        check++;
    }

    else if (check == 1) {
        $('#first').fadeOut("slow", function () {
        })
        $('#second').removeAttr('bottom');
        $('#second').removeAttr('position');
        $('#second').animate({ marginLeft: '35%', marginBottom: '350' } , 1000);
        $('#second').fadeIn("slow", function () {
            $('h2').text('Wow your card is only disappeared');
        });
    }

});