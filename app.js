"use  strict "
 
//convertir  enteros a cadena de texto
var edad=12;
 var edadtxt= String(edad);
//como se usa la funcion booleana
 var edadd=true;

 var mayor= Boolean(2>4);
//como  se  usa  fechas  en javascript
 var fecha=new Date();
//uso de simbolo  en  javascript
 var simbo= Symbol();
 var simbo1= Symbol();
var  simbo2= Symbol('dev');
//esto se hace si   simbo y simbo1 son iguales tambien es una comparacion  symbo==simbo1

// estructura de datos con  JSON se crea un objeto y se  convierte a txt

var persona={nombre:'jessica', tiwter:'jessi@'};

var personas=[
  {nombre:'william',tiwter:'Di@z'},
  {nombre:'jessica',tiwter:'corazon@'}
]
//este es un metodo para convertir un arreglo en una cadena de txt
 var  personaJSON=JSON.stringify(persona);

 //reconvertir de cadena de texto a   aun obj
 
 //operadores  arictmeticos


 // condicion? TRUE: FALSE

var edad=12;
var puedevotar=(edad>18)  ? "puede votar": "no puede votar";
console.log("hola",puedevotar);

//operador  tipo datos
 var dat1 = 10;
 var date2 ="playa";
 var activo = true;

 var personare ={// esto es un objeto 
   edade:34,
   deporte:"correr" 
 }
console.log(typeof dat1);
console.log(typeof date2);
console.log(typeof activo);
console.log(typeof personare);
console.log(typeof personare.deporte);
//condicion if
 var dat3=5;
 var dat4=3;
  var  resultadoo ="sin datos";
  if( dat3>dat4){
    resultadoo="la condicion se cumplio";
  }
  console.log( "El  resultado de la evaluacion if es",resultadoo);

  // estructuta  switch
  var age = 20 ;
  var  result = "";

  switch (age) {
    case 10:
      result = " la edad  es 10";
      
      break;
  case 20:
    result="la edad  es 20";
    break;
    case 30:
      result="la edad es 30";
      
      break;
      default:
        result="ningun caso coincide";
  }
  console.log("el  resultado es "+ result)

  /* ciclos   definidos = for  ciclos indefinidos=while y  do while
    
 // var  productor = 5;
    for (let i = 0; i < productor; i++) {
      console.log("productor"+i); 
      debugger;
      
    }*/

    // control de  ciclos
    var e=0;
    var cuenta=0;

    for (let e = 0; e < cuenta; e++) {
       if (e % 2 == 0) {
         continue;
       }
      cuenta++;
      debugger;
    }
console.log("hay "+cuenta+"numeros impares");
// estructura basica de una funcion

function saludar(){
 var  saludo = "hola mundo";
 //console.log(saludo)
 return saludo;
}
saludar();

// parametros  REST
  function cocinar(ingrediente1,ingrediente2, ...masIngredientes){
    console.log('ingrediente1:',ingrediente1);
    console.log('ingrediente2:',ingrediente2);
    console.log("masIngredientes",masIngredientes);

  }
 cocinar("pollo","tomate","Arroz","frijoles","pescaso");

 //parametros spread
 function cocinar(ingrediente1,ingrediente2,ingrediente3){
  console.log('ingrediente1:',ingrediente1);
  console.log('ingrediente2:',ingrediente2);
  console.log("masIngredientes",masIngredientes);

}
var ingredientebase=["tomate","arroz"];
cocinar(...ingredientebase,"yuca");
// funciones  anonimas para que funcione se quita el use strict
(
function(){
  var mensaje ="hola de nuevo";
  console.log(mensaje);

}
)()
// esta funcion funciona con el use strict
var saluda=function(nombre){
  var mensaje ="hola de nuevo"+nombre;
  return mensaje; 

}

//funcion con callbacks
 function calcular(datoa,datob,sumarCB){
   var  suma=datoa+datob;
   var restare=datoa,datob;
    
   sumarCB(suma);

 }
 calcular(2,3 function(resultate){
   
 })
