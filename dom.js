//const productos = [
//  { nombre: "Boardshorts Classic", tipo: "Short de baño", marca: "Quiksilver", precio: 55 },
//{ nombre: "Lycra UV Pro", tipo: "Remera de lycra", marca: "Rip Curl", precio: 45 },
//{ nombre: "Neoprene Full Suit 3/2mm", tipo: "Traje de neopreno", marca: "O'Neill", precio: 180 },
//{ nombre: "Camiseta Surf Tribe", tipo: "Camiseta", marca: "Billabong", precio: 35 },
//{ nombre: "Zapatillas Reef Rover", tipo: "Zapatillas", marca: "Reef", precio: 70 },
//{ nombre: "Gorra Surf Life", tipo: "Gorra", marca: "Hurley", precio: 25 },
//{ nombre: "Campera Windbreaker", tipo: "Campera liviana", marca: "Volcom", precio: 90 },
//{ nombre: "Bermuda Cargo Beach", tipo: "Bermuda", marca: "Element", precio: 60 },
//{ nombre: "Sandalias Flip Flop", tipo: "Ojotas", marca: "Havaianas", precio: 20 },
//{ nombre: "Hoodie After Surf", tipo: "Buzo con capucha", marca: "RVCA", precio: 65 }
//

//const renderProducts = () => {
//  let contenedor = document.querySelector(".productos");
//  let htmlCompletoDeProductos = "";

//  productos.forEach((producto) => {
//    htmlCompletoDeProductos += `
//    <div class="producto">
//    <img src="./img/buzo quiksilver.jpg" alt="" />
//      <h3>${producto.nombre}</h3>
//      <h5>${producto.precio}</h5>
//      <button onclick="agregarProducto(${producto.id})">Agregar al carrito</button>
//    </div>
//    `;
//  });
//  contenedor.innerHTML = htmlCompletoDeProductos;
//};
//
//renderProducts();



// SEGUNDA ENTREGA

const productos = [
  {
    nombre: "Boardshorts Classic",
    tipo: "Short de baño",
    marca: "Quiksilver",
    precio: 55000,
    imagen: "img/boardshorts.jpg",
    id: 1
  },
  {
    nombre: "Lycra UV Pro",
    tipo: "Remera de lycra",
    marca: "Rip Curl",
    precio: 45000,
    imagen: "img/lycra.jfif",
    id: 2
  },
  {
    nombre: "Neoprene Full Suit",
    tipo: "Traje de neopreno",
    marca: "O'Neill",
    precio: 180000,
    imagen: "img/neoprene.jpg",
    id: 3
  },
  {
    nombre: "Camiseta Surf Tribe",
    tipo: "Camiseta",
    marca: "Billabong",
    precio: 35000,
    imagen: "img/remeraquicksilver.jpg",
    id: 4
  },
  {
    nombre: "Gorra Surf Life",
    tipo: "Gorra",
    marca: "Hurley",
    precio: 25000,
    imagen: "img/gorra.jpg",
    id: 5
  },
  {
    nombre: "Campera Windbreaker",
    tipo: "Campera liviana",
    marca: "Volcom",
    precio: 90000,
    imagen: "img/campera.jpg",
    id: 6
  },
  {
    nombre: "Bermuda Cargo Beach",
    tipo: "Bermuda",
    marca: "Element",
    precio: 60000,
    imagen: "img/bermuda.jpg",
    id: 7
  },
  {
    nombre: "Sandalias Flip Flop",
    tipo: "Ojotas",
    marca: "Havaianas",
    precio: 20000,
    imagen: "img/sandalias.jfif",
    id: 8
  },
  {
    nombre: "Hoodie After Surf",
    tipo: "Buzo con capucha",
    marca: "RVCA",
    precio: 65000,
    imagen: "img/buzoquiksilver.jpg",
    id: 9
  }
];


const renderizarProductos = () => {
  let conteiner = document.querySelector(".productos");
  let htmlDeProductos = "";

  productos.forEach((producto) => {
    htmlDeProductos += `
    <div class="producto">
    <img src=${producto.imagen}>
      <h3>${producto.nombre}</h3>
      <h5>${producto.precio}</h5>
      <button onclick="addToCar(${producto.id})">Agregar al carrito</button>
    </div>
    `;
  });
  conteiner.innerHTML = htmlDeProductos;
};

renderizarProductos();
let car = JSON.parse(localStorage.getItem("carrito")) || [];
const addToCar = (id) => {
   let addedProduct = productos.find((producto) => producto.id === id);
   car.push(addedProduct);
   localStorage.setItem("carrito", JSON.stringify(car));
};

