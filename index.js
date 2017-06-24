var assert = require("assert");
//EJERCICIO 1
/*function Rectangulo(){
  this.area = function(base,altura){
    this.base = base;
    this.altura = altura;
    return this.base * this.altura;
  };
}
*/
function Rectangulo(base,altura){
  this.base = base;
  this.altura = altura;
  this.area = function(){

    return (this.base * this.altura);
  };
}

//EJERCICIOS 2
/*function Persona(){
  this.calcularEdad = function(nombre, dia, mes, a_nacim){
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.a_nacim = a_nacim;
    this.annio_actual=2017;
    return ("La edad actual de "+this.nombre + " es " + (this. annio_actual - this.a_nacim));
  }
}*/
function Persona(nombre,dia,mes,a_nacim){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.a_nacim = a_nacim;
  //this.annio_actual=2017;
  this.calcularEdad = function(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    if(month < this.mes){
         return ("La edad actual de "+this.nombre + " es " + ((year - this.a_nacim)-1));
    }
    else{
        return ("La edad actual de "+this.nombre + " es " + (year - this.a_nacim)); 
    }  
   
  }
}

//EJERCICIO 3
/*function Humano(){
  this.hablar = function(nombre,edad,pasatiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
    return ("Hola soy " + this.nombre + " tengo " + this.edad+" años y me gusta "+this.pasatiempo);
  }
}*/
function Humano(nombre,edad,pasatiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
    this.hablar = function(){
          return ("Hola soy " + this.nombre + " tengo " + this.edad+" años y me gusta "+this.pasatiempo);
    }
}




/*var rectangulo = new Rectangulo();
var persona = new Persona();
var humano = new Humano();*/


var rectangulo = new Rectangulo(3,4);
var persona = new Persona("Sú",23,8,1991);
var humano = new Humano("Maria", 24, "bailar");

describe("Ejercicios Objetos", function(){
  describe("Ejercicio 1", function(){
    it("Prueba con altura y base", function(){
      //assert.equal(12,rectangulo.area(3,4));
        assert.equal(12,rectangulo.area());
    });
  });

  describe("Ejercicio 2", function(){
     it("Si el mes actual es menor que el mes de nacimiento es 25", function(){
       //assert.equal("La edad actual de Sú es 26",persona.calcularEdad("Sú",23,8,1991));
        assert.equal("La edad actual de Sú es 25",persona.calcularEdad());
     });
     /*it("Si el mes actual es mayor que el mes de nacimiento es 26", function(){
       //assert.equal("La edad actual de Sú es 26",persona.calcularEdad("Sú",23,8,1991));
        assert.equal("La edad actual de Sú es 26",persona.calcularEdad());
     });*/

  });

  describe("Ejercicio 3", function(){
     it("Prueba con Datos", function(){
       //assert.equal("Hola soy Maria tengo 24 años y me gusta bailar",humano.hablar("Maria", 24, "bailar"));
         assert.equal("Hola soy Maria tengo 24 años y me gusta bailar",humano.hablar());

     });

  });

});
