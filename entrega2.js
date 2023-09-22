//Clase molde para los tachos de pintura
class Item {
  constructor(color, litros, precio) {
    this.color = color;
    this.litros = litros;
    this.precio = precio;
  }
}

//items de la pintureria
const blanco = new Item("Pintura BLANCA", "20lts", 15.0);
const rojo = new Item("Pintura ROJA", "20lts", 20.0);
const negro = new Item("Pintura NEGRA", "20lts", 13.0);
const azul = new Item("Pintura AZUL", "20lts", 22.0);
const marron = new Item("Pintura MARRON", "20lts", 18.0);

const inventario = [blanco, rojo, negro, azul, marron];

//Array para el invetario donde vamos a ir metiendo los items que compremos
const carrito = [];

//Dinero disponible para la compra
let dinero = 60.0;

//Funcion para agregar las pinturas al carrito
function agregarCarrito(producto) {
  if (dinero >= producto.precio) {
    carrito.push(producto);
    dinero -= producto.precio;
    console.log(`Se ha agregado ${producto.color} al carrito.`);
    console.log(`Dinero restante: $${dinero.toFixed(2)}`);
  } else {
    console.log("No tienes suficiente dinero para comprar este artículo.");
  }
}

//Funcion para quitar las pinturas del carrito y que nos devuelva el dinero
function quitarDelCarrito(producto) {
  const index = carrito.indexOf(producto);
  if (index !== -1) {
    carrito.splice(index, 1);
    dinero += producto.precio;
    console.log(`Se ha quitado ${producto.color} del carrito.`);
    console.log(`Dinero restante: $${dinero.toFixed(2)}`);
  } else {
    console.log(`${producto.color} no está en el carrito.`);
  }
}

// Función para quitar los productos en el carrito y actualizar el dinero
function quitarProductos(producto) {
  const index = carrito.indexOf(producto);
  if (index !== -1) {
    const productoQuitado = carrito.splice(index, 1)[0]; // Obtener el producto quitado
    if (productoQuitado) {
      dinero += productoQuitado.precio; // Devuelve el dinero del producto eliminado
      console.log(`Se ha quitado ${productoQuitado.color} del carrito.`);
      console.log(
        `Dinero devuelto por ${
          productoQuitado.color
        }: $${productoQuitado.precio.toFixed(2)}`
      );
      console.log(`Dinero restante: $${dinero.toFixed(2)}`);
    }
  } else {
    console.log(`${producto.color} no está en el carrito.`);
  }
}

//Funcion que nos muestra el carrito
function mostrarCarrito() {
  console.log(`SALDO DISPONIBLE: $${dinero.toFixed(2)}`);
  console.log("CARRITO DE COMPRAS: ");
  for (const producto of carrito) {
    console.log(`Color: ${producto.color}
  Litros: ${producto.litros} 
  Precio: $${producto.precio.toFixed(2)}`);
  }
}
