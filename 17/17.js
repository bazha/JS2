 var goods = {
      "282821" : { 
         "name" : "яблоко",
          "cost" : 50,
          "cap" : "https://cdn4.iconfinder.com/data/icons/dooffy_design_christmas/PNG/128/dooffy_ikony_christmas_0004_apple.png",    
          "sklad" : "да"
      },
     "28252" : { 
         "name" : "авокадо",
          "cost" : 35,
          "cap" : "https://cdn3.iconfinder.com/data/icons/fruits-8/512/avocado-128.png",     
          "sklad" : "нет"
     },
     "122525" : { 
         "name" : "клубника",
          "cost" : 45,
          "cap" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",     
          "sklad" : "нет"
     }
 };
console.log(goods);

var out = '';
for (var key in goods ) {
     out+='Название: ' +goods[key].name + '<br>'; //Имя товара
     out+='Цена: ' +goods[key].cost + '<br>'; // Цена товара
     out+='Наличие: ' +goods[key].sklad + '<br>'; // Есть ли товар на рынке 
     out+='<img src="' +goods[key].cap+ '">'; // картинка товара 
     out+='<hr>';
}
document.getElementById('out').innerHTML = out ;