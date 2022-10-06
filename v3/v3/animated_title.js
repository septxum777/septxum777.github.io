var rev = "forward";

function titlebar(val) {
    var title  = location.hostname;
    var speed = 300;
    var position = val;
    var length = title.length;

    if(rev == "forward") {
        if(position < length) {
            position = position + 1;
            scroll = title.substr(0, position);
            document.title = scroll;
            timer = window.setTimeout("titlebar("+position+")",speed);
        }
        
        else {
            rev = "backwards";
            timer = window.setTimeout("titlebar("+position+")",speed);
        }
    }

    else {
        if(position > 0) {
            position = position - 1;
            var alt_length = length - position;
            scrol = title.substr(alt_length, length);
            document.title = scrol+"ㅤ";
            timer = window.setTimeout("titlebar("+position+")",speed);
        }

        else {
            rev = "forward";
            timer = window.setTimeout("titlebar("+position+")",speed);
        }
    }
}

titlebar(0);