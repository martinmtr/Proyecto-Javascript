
let productos = [];
const obtenerProductos = async () => {
  try {
    const response = await fetch("./api.json");
    if (!response.ok);
    const data = await response.json();
    productos = data.productos;
    renderizarProductos(productos);
  } catch (error) {}
};

const renderizarProductos = (productosParaRenderizar) => {
  let conteiner = document.querySelector(".productos");
  let htmlDeProductos = "";

  productosParaRenderizar.forEach((producto) => {
    htmlDeProductos += `
      <div class="producto">
        <img src=${producto.imagen}>
        <h3>${producto.nombre}</h3>
        <h5>$${producto.precio}</h5>
        <button onclick="addToCar(${producto.id})">Agregar al carrito</button>
      </div>
    `;
  });

  conteiner.innerHTML = htmlDeProductos;
};

obtenerProductos();


let car = JSON.parse(localStorage.getItem("carrito")) || [];

const addToCar = (id) => {

    const addedProduct = productos.find((producto) => producto.id === id);

    if (addedProduct) {
       
        const productInCar = car.find((item) => item.id === id);
Toastify({
  text: "Agregaste a carrito",
  duration: 3000,
  close: true,
  gravity: "top", 
  position: "right",
  stopOnFocus: true, 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){}
}).showToast();
        if (productInCar) {
            
            productInCar.cantidad++;
        } else {
           
            car.push({ ...addedProduct, cantidad: 1 });
        }
        
       
        localStorage.setItem("carrito", JSON.stringify(car));
    } else {
        
    }
};