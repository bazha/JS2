 var block = document.getElementById('one');
// клик мышью
/*block.onclick = function (){
    this.style.background = 'black';
    this.onclick = null;
}
 // двойной клик мышью 
 block.ondblclick = function (){
     this.style.background = 'red';
 }*/
// Вызов контекстного меню /клик правой кнопки мышкой
/*block.oncontextmenu = function (){
    this.style.background = 'gray';
    return false;
}
 
document.oncontextmenu = function (){
    return false;
}*/
// мышь входит на элемент 
 /*block.onmouseenter = function (){
     console.log ('INN!');
     this.style.background = 'gold';
 }
  // мышь уходит с элемента 
 block.onmouseleave = function () {
     this.style.background = 'cyan';
 }*/
// движение мыши внутри блока
 /*var a = 0;
 block.onmousemove = function () {
    a++
     this.style.width = 100 +a+ 'px';
 }*/
   // нажимает держим кнопку мыши любую
 block.onmousedown = function ( event){
     this.style.background = 'blue';
     console.log ('button:' + event.button);
     console.log ('which:' + event.which);
 }
 
 block.onmouseup = function () {
     this.style.background = 'pink';
 }