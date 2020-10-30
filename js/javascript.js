//json

function agregarHtml(nombre, precio, imagen, id, tieneAlcohol) {
  console.log(`el producto "${nombre}" tiene alcohol? ${tieneAlcohol}`)
  var claseAlcohol = 'sin_alcohol_clase';
  if (tieneAlcohol == true) {
    claseAlcohol = 'con_alcohol_clase';
  }
  var html = `<div class="card col-md-4 mt-5 ${claseAlcohol}" style="width: 18rem; border: none; background-color: black">
<img src=${imagen} class="card-img-top imagenTrago" alt="..." />
<div class="card-body">
    <h5 class="card-title">${nombre}<strong> $${precio}</strong> </h5>
    <label for="">Cantidad</label>
    <input class="ingresoCantidad" type="number" id=${id} value="0" />
    <a href="#" class="btn btn-dark" id="suma" onClick="sumartragos('${id}')">Añadir al carrito</a>
</div>
</div>`;
  return html;
}

//Jquery//

var cantidadTragos = $("#cantidad");

function mostrarTragos() {

  var urlAPI = 'https://run.mocky.io/v3/cac6f690-55e5-40eb-9295-42bd3801940b';
  console.log('Llamamos a la API: ', urlAPI);
  $.ajax({
    url: urlAPI,
    method: 'GET'
  }).then(function (respuestaApi) {
    console.log('Datos ajax: ', respuestaApi);
    var listatragos = respuestaApi.productos;

    var listaProductos = $("#listaProductos");
    for (var i = 0; i < listatragos.length; i++) {
      var miProd = listatragos[i];
      var htmlProd = agregarHtml(miProd.nombre, miProd.precio, miProd.imagen, miProd.id, miProd.tiene_alcohol);
      listaProductos.html(listaProductos.html() + htmlProd);
    }
  });

}

var listaCarrito = [];
// precio, cantidad y producto nombre
function sumartragos(idProducto) {
  console.log("la cantidad de tragos pedidos del ", idProducto)
  var cantidadtragos = document.getElementById(idProducto).value;
  document.getElementById("cantidad").innerHTML = cantidadtragos + " tragos seleccionados";
  // buscar por idProducto el nombre y precio del producto en stock
  var productoEncontrado = null;
  for (var i = 0; i < listatragos.length; i++) {
    var miProd = listatragos[i];
    if (idProducto == miProd.id) {
      productoEncontrado = miProd;
    };
  }
  console.log(productoEncontrado.precio);
  console.log(productoEncontrado.nombre);
  console.log(cantidadtragos);
  idProducto.innerHTML = productoEncontrado.precio;


  //   // agregar el precio, cantidad y nombre prod a la lista de carrito
  // listaCarrito.push({
  //   precio: productoEncontrado.precio,
  //   producto: productoEncontrado.nombre,
  //   cantidad: cantidadtragos,
  // })

}


$("#sinalcohol").click(function () {
  $(".sin_alcohol_clase").fadeIn();
  $(".con_alcohol_clase").fadeOut(1000);
});

$("#conalcohol").click(function () {
  $(".sin_alcohol_clase").fadeOut(1000);
  $(".con_alcohol_clase").fadeIn();
});

$("#todos").click(function () {
  $(".sin_alcohol_clase").fadeIn();
  $(".con_alcohol_clase").fadeIn();
});

mostrarTragos();