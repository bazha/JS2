$(document).ready(function(){
var link= $('.menu-link');
var headerMenu=$('.header');
var navLink=$('.header a');

link.click(function(){
  link.toggleClass('menu-link-active');
  headerMenu.toggleClass('header-active')
});
 navLink.click(function(){
    link.toggleClass('menu-link-active');
    headerMenu.toggleClass('header-active')
  });

});