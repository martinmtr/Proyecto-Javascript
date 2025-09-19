let productsCar = JSON.parse(localStorage.getItem("carrito")) || [];

const renderizarProductos = () => {
  let conteiner = document.querySelector(".productos-carrito");
  let htmlDeProductos = "";

  productsCar.forEach((producto) => {
    htmlDeProductos += `
            <div class="producto">
                <img src=${producto.imagen}>
                <h3>${producto.nombre}</h3>
                <h5>${producto.precio}</h5>
                <p>Cantidad: ${producto.cantidad || 1}</p>
                <button onclick="removeFromCar(${
                  producto.id
                })">Eliminar del carrito</button>
            </div>
        `;
  });
  conteiner.innerHTML = htmlDeProductos;
};

//ELIMINAR UN PRODUCTO DEL CARRITO
const removeFromCar = (id) => {
  const productoEnCarrito = productsCar.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    } else {
      productsCar = productsCar.filter((producto) => producto.id !== id);
    }

    localStorage.setItem("carrito", JSON.stringify(productsCar));

   
    renderizarProductos();

    
  } else {
   
  }
};


renderizarProductos();

//VACIAR CARRITO
let removeProducts = document.getElementById("Vaciar");
removeProducts.addEventListener("click", () => {
  Swal.fire({
    title: "Seguro que quieres vaciar tu carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si, vaciar",
    denyButtonText: `Seguir sumando productos`,
  }).then((result) => {
   
    if (result.isConfirmed) {
      localStorage.removeItem("carrito");
      productsCar = [];
      renderizarProductos();
      Swal.fire("Carrito sin productos", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Continua con tu compra", "", "info");
    }
  });
});

//CALCULO DE ENVIO

function calcularEnvio() {
  const zona = document.getElementById("selectionZone").value.toLowerCase();
  const cantidad = parseInt(document.getElementById("cantidad").value);

  if (isNaN(cantidad) || cantidad < 1) {
    Swal.fire("Ingresa una cantidad válida de prendas.");
    return;
  }

  if (cantidad > 3) {
    Swal.fire("El envio es gratis por seleccionar más de 3 productos!");
    return;
  }

  if (zona === "") {
    Swal.fire(" Selecciona una zona de envío.");
    return;
  }
  let costo;

  switch (zona) {
    case "norte":
      costo = 5000;
      break;
    case "sur":
      costo = 7000;
      break;
    case "este":
      costo = 6000;
      break;
    case "oeste":
      costo = 6500;
      break;
    case "caba":
      costo = 4000;

      break;
    default:
      Swal.fire("Zona no válida. Usa ");
      return;
  }

  Swal.fire(` El costo de envío para la zona "${zona}" es de $${costo}.`);
}
