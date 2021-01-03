var count = 0;

function add(y) {
    count += y;
    // alert("count = " + count);
    shownumber(count);
}

function reset() {
    count = 0;
    shownumber(count);
}

function shownumber(number) {
    document.querySelector("#counttext").innerHTML = number;
}

function hoge(x){
    return x * 2;
}
