$(".sub>li>a").click(function () {
    $('#iframe_div').removeAttr('hidden');
    $('form').attr('hidden', 'hidden');
    $('#main_logo').animate({ marginTop: '10%' }, 3000);
    $('#main').animate({ marginTop: '40px' }, 3000);
});
