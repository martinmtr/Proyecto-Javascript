


let productsCar = JSON.parse(localStorage.getItem("carrito")) || [] ;

const renderizarProductos = () => {
  let conteiner = document.querySelector(".productos-carrito");
  let htmlDeProductos = "";

  productsCar.forEach((producto) => {
    htmlDeProductos += `
    <div class="producto">
    <img src=${producto.imagen}>--+ 
      <h3>${producto.nombre}</h3>
      <h5>${producto.precio}</h5>
      <button onclick="removeForId(${producto.id})">Eliminar del carrito</button>
    </div>
    `;
  });
  conteiner.innerHTML = htmlDeProductos;
};

renderizarProductos();

//ELIMINAR UN PRODUCTO DEL CARRITO

const removeForId = (id) => {
    let filtrado = productsCar.filter( (producto) => producto.id !== id);
    productsCar = filtrado;
    localStorage.setItem("carrito", JSON.stringify(productsCar));
    renderizarProductos();

}//VACIAR CARRITO
let removeProducts = document.getElementById("Vaciar");
  removeProducts.addEventListener("click", ()=>{
    localStorage.removeItem("carrito");
    productsCar = [];
    renderizarProductos();
  });


 

//CALCULO DE ENVIO

function calcularEnvio() {
      const zona = document.getElementById('selectionZone').value.toLowerCase();
      const cantidad = parseInt(document.getElementById('cantidad').value);

     if (isNaN(cantidad) || cantidad <1){
        alert("Ingresa una cantidad válida de prendas.");
        return;
     }

     if(cantidad>3) {
        alert("El envio es gratis por seleccionar más de 3 productos!");
        return;
     }

if (zona === "") {
        alert(" Selecciona una zona de envío.");
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
          alert("Zona no válida. Usa " );
          return;
      }

      alert(` El costo de envío para la zona "${zona}" es de $${costo}.`);
    }