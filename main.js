//PRODUCTOS EN LA WEB

const productos = [];

//AGREGAR STOCK

const sumarStock = () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i].stock += 10; //AGREGA 10 UNIDADES A CADA PRODUCTOS EN STOCK
  }
};

sumarStock();

//AUMENTO DE PRECIO

const aumentarPrecio = () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i].precio += 15; //AUMENTA 15 TODOS LOS PRECIOS
  }
};
aumentarPrecio();

//PROMPT DE CONSULTA DE DESCUENTOS
let productosEnPromo = prompt("¿Que producto buscas? remeras, pantalones, buzos.")
if (productosEnPromo === "remeras") {
  console.log("20% de descuento");
} else if (productosEnPromo === "pantalones") {
  console.log("2x1 en todos los modelos");
} else if (productosEnPromo === "buzos") {
  console.log("25% de descuento");
}
  else {
    alert(`El producto no tiene descuento`)
  }


//Calculo de envio

function calcularMontoEnvio(cantidad, zona) {
  const tarifas = {
    zonanorte: {
      base: 4000,
      envioGratis: {
        minimo: 3,

      }
    },
    zonaoeste: {
      base: 5000,
      envioGratis: {
        minimo: 3,

      }
    },
    zonasur: {
      base: 8000,
      envioGratis: {
        minimo: 3,

      }
    }
  };

  if (!tarifas[zona]) {
    return "Zona no válida";
  }

  const tarifa = tarifas[zona];
  let monto = tarifa.base * cantidad;

  if (cantidad >= tarifa.envioGratis.minimo) {
    monto = 0;
    return "Envío gratis";
  }

  return `${monto.toFixed(2)}`;
}

// Pedir zona y cantidad de prendas por prompt

const zona = prompt("Ingrese la zona de envío (zonanorte, zonaoeste o zonasur):").toLowerCase();
const cantidad = parseFloat(prompt("Ingrese la cantidad de prendas:"));

const montoEnvio = calcularMontoEnvio(cantidad, zona);
alert(`El monto de envío para ${cantidad} prendas a ${zona} es: ${montoEnvio}`);

class listaStock {
  //construccion
  constructor(nombre, codigo, talle, material, precio, stock) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.talle = talle;
    this.material = material;
    this.precio = precio;
    this.stock = stock;
  }
  // creacion de los metodos
}

//instanciar un class
let pro1 = new listaStock(
  "remera",
  "5678",
  "S",
  "algodon 100%",
  "$60000",
  "10 unidades"
);
let pro2 = new listaStock(
  "remera",
  "5679",
  "M",
  "algodon 100%",
  "$60000",
  "15 unidades"
);
let pro3 = new listaStock(
  "remera",
  "5680",
  "L",
  "algodon 100%",
  "$60000",
  "16 unidades"
);
let pro4 = new listaStock(
  "remera",
  "5681",
  "XL",
  "algodon 100%",
  "$60000",
  "19 unidades"
);
let pro5 = new listaStock(
  "remera",
  "5682",
  "XXL",
  "algodon 100%",
  "$60000",
  "20 unidades"
);
let pro6 = new listaStock(
  "bermuda",
  "6523",
  "S",
  "neoprene",
  "$100000",
  "9 unidades"
);
let pro7 = new listaStock(
  "bermuda",
  "6524",
  "M",
  "neoprene",
  "$100000",
  "10 unidades"
);
let pro8 = new listaStock(
  "bermuda",
  "6525",
  "L",
  "neoprene",
  "$100000",
  "6 unidades"
);
let pro9 = new listaStock(
  "bermuda",
  "6526",
  "XL",
  "neoprene",
  "$100000",
  "30 unidades"
);
let pro10 = new listaStock(
  "bermuda",
  "6527",
  "XXL",
  "neoprene",
  "$100000",
  "14 unidades"
);
let pro11 = new listaStock(
  "buzos",
  "7848",
  "S",
  "algodon y friza",
  "$80000",
  "12unidades"
);
let pro12 = new listaStock(
  "buzos",
  "7849",
  "M",
  "algodon y friza",
  "$80000",
  "1 unidades"
);
let pro13 = new listaStock(
  "buzos",
  "7850",
  "L",
  "algodon y friza",
  "$80000",
  "10 unidades"
);
let pro14 = new listaStock(
  "buzos",
  "7851",
  "XL",
  "algodon y friza",
  "$80000",
  "10 unidades"
);
let pro15 = new listaStock(
  "buzos",
  "7852",
  "XXL",
  "algodon y friza",
  "$80000",
  "10 unidades"
);

productos.push(
  pro1.pro2,pro3,pro4,pro5,pro6,pro7,pro8,pro8,pro9,pro10,pro11,pro12,pro13,pro14,pro15);




