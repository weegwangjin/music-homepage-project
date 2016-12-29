var index = 7;
var index1 = 0;

var img_address = document.getElementsByClassName('img_address');
var article_subject = document.getElementsByClassName('article_subject');
var article_text = document.getElementsByClassName('article_text');


$('#update').click(function () {
    document.body.style.cursor = "wait";
    $('#updating').removeAttr('hidden');
    setTimeout(updating, 2000);

}
);

function updating() {
    if (index >= 10) {
        document.body.style.cursor = "auto";
        $('#updating').attr('hidden', 'hidden');
        alert("There aren't no longer be updated!!")
        return;
    }
    var main = document.getElementsByTagName('tbody');
    var node_tr = document.createElement('tr');
    var node_td_img = document.createElement('td');
    var node_td_img_img = document.createElement('img');
    node_td_img_img.setAttribute('id', index * 100);
    node_td_img.appendChild(node_td_img_img);
    var node_td_text = document.createElement('td');
    node_tr.appendChild(node_td_img);
    node_tr.appendChild(node_td_text);
    var node_pre = document.createElement('pre');
    node_pre.setAttribute("id", index);
    var node_font = document.createElement('font');
    node_font.setAttribute("id", (index * 10));
    index++;
    node_td_text.appendChild(node_font);
    node_td_text.appendChild(node_pre);
    main[0].appendChild(node_tr);

    for (var i = index - 2; i >= 1; i--) {
        var move_node_img = document.getElementById(i * 100);
        var move_node_subject = document.getElementById(i * 10);
        console.log(move_node_subject.innerText);
        var move_node_article = document.getElementById(i);
        console.log(move_node_article.innerText);
        var node_img = document.getElementById((i + 1) * 100);
        var node_subject = document.getElementById((i + 1) * 10);
        var node_article = document.getElementById(i + 1);
        node_img.setAttribute('src', move_node_img.getAttribute('src'));
        node_subject.innerText = move_node_subject.innerText;
        node_article.innerText = move_node_article.innerText;
    }
    var node_img = document.getElementById(100);
    var node_subject = document.getElementById(10);
    var node_article = document.getElementById(1);
    var update_img = document.getElementsByClassName('img_address');
    var update_subject = document.getElementsByClassName('article_subject');
    var update_text = document.getElementsByClassName('article_text');

    node_img.setAttribute('src', update_img[index1].innerText);
    node_subject.innerText = update_subject[index1].innerText;
    node_article.innerText = update_text[index1].innerText;

    index1++;
    document.body.style.cursor = "auto";
    $('#updating').attr('hidden','hidden');
}