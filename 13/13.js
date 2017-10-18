var radio = document.getElementsByName('prim');

for (var i=0; i<radio.length; i++) {
   radio[i].onchange = radioChek;
}

function radioChek() {
    console.log (this.value);
}

document.getElementById('one').onclick = radioOne;

function radioOne(){
    var m = document.getElementsByName('prim');
    for (var i=0; i<m.length;i++) {
        if (m[i].checked ) {
            alert (m[i].value);
            break;
        }
    }
}