var m = [99,205,541,542];

/*for (var i=0; i<m.length; i++ ) {
    document.getElementById('out').innerHTML+= m[i]+'<br>';
}*/
console.log (m);

function masOut() {
    var p = document.getElementById('out');
    var str ='';
    for (var i=0; i<m.length; i++ ) {
         str += i +'--' +m[i] +'<br>';
    } 
     p.innerHTML = str;
}
masOut();

function p1(){
    
    var i1 = document.getElementById('i1').value;
    m.push(i1);
    masOut();
}

function p2() {
    m.pop(i1);
    masOut();
}
    
    