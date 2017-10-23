document.onmousemove = function () {
    document.getElementsByTagName('body') [0].insertAdjacentHTML ('BeforeEnd', '<img src= "https://cdn3.iconfinder.com/data/icons/scarycons/140/black-cat-64.png" id="cat">');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';
    
    
    document.onmousemove = function (event) {
    cat.style.left = event.clientX + 50+ 'px';
    cat.style.top = event.clientY  +'px';
}
}







