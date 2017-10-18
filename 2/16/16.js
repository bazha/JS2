var man = {
    "name" : "Alex",
    "sex" : "male",
    "age" : 58,
    "id" : "21545214f"
};
console.log(man);
console.log(man.name);
console.log(man['name']);
var  a = 'name';
console.log (man[a]);

var man2 = {
    "name" : "Alex",
    "sex" : "male",
    "age" : 25,
    "id" : "21545214f",
    "year": function() {
        return 2017- this.age;
    }
};
    
    console.log (man2.year() );

var md = {
    "mas" : [5,21,25,545,87],
    "sum" : function(){
        var sum = 0;
        for ( var i = 0; i<this.mas.length; i++){
            sum = sum + this.mas[i];
        }
        return sum;
    }
}
console.log (md.sum());