var box_check = 0;

$('input#m').click(function(){
    box_check=0;
});
$('input#y').click(function () {
    box_check = 1;
});


$('#search_button').click(function () {

    if (box_check == 1) {
        var text = $('#search_text').val();
        var music_text = "https://www.youtube.com/results?search_query=" + text;
        window.open(music_text, "black", "", false);
        $('#search_text').val("");
    }
    else {
        var text = $('#search_text').val();
        var r_text = document.getElementsByClassName('music_list');
        var r_address = document.getElementsByClassName('music_address');
        var address;
        for(var i = 0;i<5;i++){
            if (r_text[i].innerText == text) {
                address = r_address[i].innerText;
                var iframe_address = $('iframe').attr('src', address);
                return;
            }
        }
        alert("We can't find the music in our homepage\n Use YOUTUBE TAB and Search music ");
    }
});

$('li>a>img').mouseover(function () {
    $(this).css('opacity', '0.4');
});

$('li>a>img').mouseleave(function () {
    $(this).css('opacity', '1.0');
});