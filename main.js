


//PRODUCTOS EN LA WEB

const productos = [
  {
    nombre: "Remeras estampadas",
    precio: 45,
    material: "100% algodón",
    stockTalles: { XXL: "2"},
  },
  {
    nombre: "Bermudas de surf",
    precio: 120,
    material: "neoprene",
    stock: 12,
  },
  {
    nombre: "Pantalon rusty ",
    precio: 150,
    material: "Jeans",
    stock: 20,
  },
  {
    nombre: "Buzos",
    precio: 100,
    talles: "XXL",
    material: "100% algodón",
    stock: 15,
  },

];

//AGREGAR STOCK


const sumarStock = () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i].stock += 10;                //AGREGA 10 UNIDADES A CADA PRODUCTOS EN STOCK
  }
 };
 
sumarStock();



//AUMENTO DE PRECIO

const aumentarPrecio = () => {
  for (let i = 0; i < productos.length; i++){
    productos[i].precio += 15;               //AUMENTA 15 TODOS LOS PRECIOS 
  }
 
};
aumentarPrecio();

console.log(productos)




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
alert(`El monto de envío para ${cantidad} prendas a ${zona} es: ${montoEnvio}`)