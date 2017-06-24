var assert = require("assert");

//EJERCICIO 1
function Rectangulo(base,altura){
  this.base = base;
  this.altura = altura;
  this.area = function(){

    return (this.base * this.altura);
  };
}

//EJERCICIO 3
function Humano(nombre,edad,pasatiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
    this.hablar = function(){
          return ("Hola soy " + this.nombre + " tengo " + this.edad+" años y me gusta "+this.pasatiempo);
    }
}


var rectangulo = new Rectangulo(3,4);
var humano = new Humano("Maria", 24, "bailar");

describe("Ejercicios Objetos", function(){
  describe("Ejercicio 1", function(){
    it("Prueba con altura y base", function(){
      //assert.equal(12,rectangulo.area(3,4));
        assert.equal(12,rectangulo.area());
    });
  });

  describe("Ejercicio 3", function(){
     it("Prueba con Datos", function(){
       //assert.equal("Hola soy Maria tengo 24 años y me gusta bailar",humano.hablar("Maria", 24, "bailar"));
         assert.equal("Hola soy Maria tengo 24 años y me gusta bailar",humano.hablar());

     });

  });

});
