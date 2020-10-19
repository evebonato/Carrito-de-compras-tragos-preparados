

 function sumartragos (idinput) {
   console.log("la cantidad de tragos pedidos del ", idinput)
   var cantidadtragos = document.getElementById(idinput).value;
   console.log('  La cantidad es: ',cantidadtragos);
   document.getElementById("cantidad").innerHTML = cantidadtragos + " tragos seleccionados";
 }

//json

 var trago1 = {
  "nombre":"mojito",
  "precio":350, 
  "ingredientes":"lima,ron,menta,azucar",
  "stock": 30,
 }

 localStorage.setItem('trago1', JSON.stringify(trago1));
 
 console.log(trago1["precio"]);


var trago1 = '{"nombre":"mojito", "precio":350, "ingredientes":"lima,ron,menta,azucar", "stock":30}'
var cartaTragos = JSON.parse(trago1);
console.log(cartaTragos);

if (cartaTragos.stock ==0) {
  console.log("Lo sentimos, no hay mas stock por estanoche")
}

else {
  console.log("contamos con stock de este rico trago") 
}


// var trago1 = new Tragos(
//   "Limonada Caribeña",
//   "tequila, jugo de limon, jugo de lima, rodaja de lima, hielo",
//   300
// );

// var trago2 = new Tragos(
//   "Queen",
//   "Jugo de manzana, limon, hielo, martini extra seco",
//   300
// );

// var trago3 = new Tragos("Gancia veraniego, "vodka, licor de cafe, hielo", 300);

// var trago4 = new Tragos(
//   "Vodka Tropical",
//   "Licuado de durazno, vino blanco, champagne, hielo",
//   450
// );

// var trago5 = new Tragos(
//   "Fernet Intervenido",
//   "tequila, jugo de naranja, granadina , hielo",
//   450
// );


// console.log(tragos1, tragos2, tragos, tragos3, tragos4, tragos5, tragos6);
// console.log(tragos.precio);

// /* Arrays con metodos y propiedades*/

// function pedidotrago() {
//   var tragos = [
//     "Mojito",
//     "Limonada Caribeña",
//     "Queen",
//     "Gancia Veraniego",
//     "Vodka Tropical",
//     "Fernet intervenido",
//     
//   ];
//   var tragossinalcohol = [
//     "daikiri",
//     "sprite con limon",
//     "coca cola",
//     "Cerveza sin alcohol",
//     "Limonada con menta",
//     "Iced Coffee",
//   ];
//   var cartadetragos = tragos.concat(tragossinalcohol);
//   var nombre = prompt("Ingresa tú nombre");
//   alert(
//     nombre +
//       " Bienvenidx a nuestro bar online, elige alguno de los tragos que ofrecemos con/sin alcohol:  " +
//       cartadetragos.join(", ")
//   );
//   var tragoapedir = prompt("Cuál trago quisieras pedir?");
//   alert("Hola " + nombre + " enseguida te enviaremos tú " + tragoapedir);
// }
// pedidotrago();

//document.getElementById("suma").addEventListener("click", calcular);

// document.getElementById("nombre").addEventListener("keypress", entertecla);

// function entertecla(tecla) {
//   if (tecla.which == 13) {
//     var descripcion = document.createElement("h1");

//     var texto = document.createTextNode("Linda noche para tomar unos tragos");

//     descripcion.appendChild(texto);

//     document.body.appendChild(descripcion);
//   }
// }

// var ingresoInput = document.getElementById("nombre").value;

// console.log(ingresoInput);

// document.getElementById("nombre").value = "ingresa lo que quieras";

///////////////////////////////////////////////////////////////