var assert = require("assert");

function Persona(nombre,dia,mes,a_nacim){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.a_nacim = a_nacim;
  this.calcularEdad = function(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var cadena = "";
    var edad_actual =0;

   if(month == this.mes){
      if(day >= this.dia){
        edad_actual = (year - this.a_nacim);
        cadena = "La edad actual de "+this.nombre + " es " + edad_actual;
      }
      else{
        edad_actual = (year - this.a_nacim) -1;
        cadena = "La edad actual de "+this.nombre + " es " + edad_actual;
      }
    }
    else if(month < this.mes){
      edad_actual = (year - this.a_nacim) -1;
      cadena = "La edad actual de "+this.nombre + " es " + edad_actual;
    }
    else{
      edad_actual = (year - this.a_nacim);
      cadena = "La edad actual de "+this.nombre + " es " + edad_actual;
    }
    return cadena;
  }
}

function edadPersona(name, day, month, year){
  persona = new Persona(name, day, month, year);
  return (persona.calcularEdad());
}

edadPersona("Maria", 09,12,1992);


describe("Funcion Persona", function(){
  it("Fecha nacimiento mayor que fecha actual", function(){
      assert.deepEqual("La edad actual de Maria es 24",edadPersona("Maria", 09,12,1992));
  });
  it("Fecha nacimiento menor que fecha actual", function(){
      assert.deepEqual("La edad actual de Maria es 25",edadPersona("Maria", 09,05,1992));
  });
  it("Fecha nacimiento igual que fecha actual", function(){
      assert.deepEqual("La edad actual de Maria es 25",edadPersona("Maria", 24,05,1992));
  });
});
