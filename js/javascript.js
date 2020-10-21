//json
var listatragos = [{
    "id": "trago1",
    "nombre": "mojito",
    "imagen": "./img/trago1.jfif",
    "precio": 350,
    "ingredientes": "lima,ron,menta,azucar",
    "stock": 30,
  },
  {
    "id": "trago2",
    "nombre": "Limonada Caribeña",
    "imagen": "./img/trago2.jfif",
    "precio": 300,
    "ingredientes": "limon, azucar, hojas de menta, vodka",
    "stock": 30,
  },
  {
    "id": "trago3",
    "nombre": "Queen",
    "imagen": "./img/trago3.jfif",
    "precio": 300,
    "ingredientes": "frutillas, aperol, azucar, ron",
    "stock": 30,
  },
  {
    "id": "trago4",
    "nombre": "Gancia veraniego",
    "imagen": "./img/trago4.jfif",
    "precio": 300,
    "ingredientes": "gancia, limon, soda, hielo",
    "stock": 30,
  },
  {
    "id": "trago5",
    "nombre": "Vodka tropical",
    "imagen": "./img/trago5.jfif",
    "precio": 450,
    "ingredientes": "vodka, rodajas de pomelo, limon, menta, azucar",
    "stock": 30,
  },
  {
    "id": "trago6",
    "nombre": "Fernet intervenido",
    "imagen": "./img/trago6.jfif",
    "precio": 450,
    "ingredientes": "fernet, cocacola, hielo, limas",
    "stock": 30,
  }
]


// var miNombre = "evee"
// var ejemplo = `hola mi nombre es ${miNombre}`;
// console.log(ejemplo)

function agregarHtml(nombre, precio, imagen, id) {
  var html = `<div class="card col-md-4 mt-5" style="width: 18rem; border: none; background-color: black">
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

for (var i = 0; i < listatragos.length; i++) {
  var miProd = listatragos[i];
  var htmlProd = agregarHtml(miProd.nombre, miProd.precio, miProd.imagen, miProd.id)
  console.log("   y mi html es: " + htmlProd);
  document.getElementById("listaProductos").innerHTML += htmlProd;
}


function sumartragos(idinput) {
  console.log("la cantidad de tragos pedidos del ", idinput)
  var cantidadtragos = document.getElementById(idinput).value;
  console.log('  La cantidad es: ', cantidadtragos);
  document.getElementById("cantidad").innerHTML = cantidadtragos + " tragos seleccionados";
}