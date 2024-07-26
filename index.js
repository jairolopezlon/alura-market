
const options = [
  {
    textToShow: 'Apagar sistema',
    numOption: 0,
    optionId: 'btnPowerOff',
    fun: 'powerOffSystem'
  },
  {
    textToShow: 'Mostrar Producto',
    numOption: 1,
    optionId: 'btnShowProducts',
    fun: 'renderProducts'
  },
  {
    textToShow: 'Calcular precio de producto comprados',
    numOption: 2,
    optionId: 'btnGetSubtotal',
    fun: 'renderTotal'
  },
  {
    textToShow: 'Mostrar Total de ventas del dia',
    numOption: 3,
    optionId: 'btnGetTotal',
    fun: 'tempFun'
  }
]
const currentPurchase = []

const productsList = [
  {
    'name': 'Helado',
    'price': '300',
    'countSelled': 0
  },
  {
    'name': 'Arroz',
    'price': '500',
    'countSelled': 0
  },
  {
    'name': 'Gaseosa',
    'price': '200',
    'countSelled': 0
  },
  {
    'name': 'Aceite',
    'price': '600',
    'countSelled': 0
  }
]

function renderOptions1(options) {
  let textOptions = 'Opciones Disponibles'
  options.forEach(option => {
    textOptions += `\n\t${option.numOption} - ${option.textToShow}`
    // console.log(`${option.numOption} - ${option.textToShow}`)
  })
  return textOptions
}


let estaEncendido = false;
let saldoInicial = 10000;
let totalDeVentas = 0;
let totalDeVenta = 0;

let totalCantidadDeVentas = 0;
let totalCantidadProductoEnVenta = 0;
let cantidadProductoMasVendido = 0
let nombreProductoMasVendido = ''

let producto1 = 'Helado';
let precioProducto1 = 300;
let cantidadProducto1 = 0;
let producto2 = 'Arroz';
let precioProducto2 = 500;
let cantidadProducto2 = 0;
let producto3 = 'Gaseosa';
let precioProducto3 = 200;
let cantidadProducto3 = 0;
let producto4 = 'Aceite';
let precioProducto4 = 600;
let cantidadProducto4 = 0;

while (estaEncendido) {

  let option = prompt(renderOptions1(options))


  /**
   * saldo inicial
   * ver productos
   * 
   * 
   * 
   * hitorial de pagos
   * cambios a devolver
   * descuento de producto
   * medios de pagos
   * devoluciones
   * escanear producto
   * validar producto duplicado
   * */

  if (option == 0) {
    estaEncendido = false
  } else if (option == 1) {
    let productoSeleccionado = prompt(`
       *** Por favor indica el numero del producto a elegir: ***      
       producto 1 = Helado
       producto 2 = Arroz
       producto 3 = Gaseosa
       producto 4 = Aceite 
      `)
    let nombreProductoSeleccionado = ''

    let cantidadProducto = parseInt(prompt('Indicar cantidad de producto'))

    if (productoSeleccionado == 1) {
      nombreProductoSeleccionado = 'Helado'
      totalDeVenta = precioProducto1 * cantidadProducto + totalDeVenta
      cantidadProducto1 = cantidadProducto1 + cantidadProducto
    } else if (productoSeleccionado == 2) {
      nombreProductoSeleccionado = 'Arroz'
      totalDeVenta = precioProducto2 * cantidadProducto + totalDeVenta
      cantidadProducto2 = cantidadProducto2 + cantidadProducto
    } else if (productoSeleccionado == 3) {
      nombreProductoSeleccionado = 'Gaseosa'
      totalDeVenta = precioProducto3 * cantidadProducto + totalDeVenta
      cantidadProducto3 = cantidadProducto3 + cantidadProducto
    } else if (productoSeleccionado == 4) {
      nombreProductoSeleccionado = 'Aceite'
      totalDeVenta = precioProducto4 * cantidadProducto + totalDeVenta
      cantidadProducto4 = cantidadProducto4 + cantidadProducto
    }
    totalCantidadProductoEnVenta++

    console.log(`se agrego el producto: ${nombreProductoSeleccionado}`)

  } else if (option == 2) {
    const mensajeCantidad = totalCantidadProductoEnVenta == 1 ? 'producto comprado' : 'productos comprados'
    const articuloTexto = totalCantidadProductoEnVenta == 1 ? 'un' : 'los'
    console.log(`se se calculo el precio para ${articuloTexto} ${totalCantidadProductoEnVenta} ${mensajeCantidad}`)
    console.log(`el total de su compra es: ${totalDeVenta}`)
    totalDeVentas = totalDeVentas + totalDeVenta
    totalCantidadDeVentas++
    totalCantidadProductoEnVenta = 0
    totalDeVenta = 0
  } else if (option == 3) {
    console.log(`el total de ventas del dia: ${totalDeVentas}`)
    console.log(`el cantidad de ventas del dia: ${totalCantidadDeVentas}`)
    console.log(`el producto1: ${producto1} se vendieron ${cantidadProducto1} unidades`)
    console.log(`el producto1: ${producto2} se vendieron ${cantidadProducto2} unidades`)
    console.log(`el producto1: ${producto3} se vendieron ${cantidadProducto3} unidades`)
    console.log(`el producto1: ${producto4} se vendieron ${cantidadProducto4} unidades`)

    if (cantidadProducto1 > cantidadProductoMasVendido) {
      nombreProductoMasVendido = producto1
      cantidadProductoMasVendido = cantidadProducto1
    }
    if (cantidadProducto2 > cantidadProductoMasVendido) {
      nombreProductoMasVendido = producto2
      cantidadProductoMasVendido = cantidadProducto2
    }
    if (cantidadProducto3 > cantidadProductoMasVendido) {
      nombreProductoMasVendido = producto3
      cantidadProductoMasVendido = cantidadProducto3
    }
    if (cantidadProducto4 > cantidadProductoMasVendido) {
      nombreProductoMasVendido = producto4
      cantidadProductoMasVendido = cantidadProducto4
    }

    console.log(`el producto mas vendido fue: ${nombreProductoMasVendido} y se vendieron ${cantidadProductoMasVendido} unidades`)




  } else if (option == 4) {

  }
  else {
    alert('❗❗Opcion indicada no existe \n\n' + mensajeOpciones)
  }
}

// console.log('el sistema termino')


// Opciones Disponibles
//   0 - Apagar sistema
//   1 - Agregar Producto
//   2 - Calcular precio de producto comprados
//   3 - Mostrar Total de ventas del dia
//   `


// function clearConsole() {
//   console.clear()
// }
function loadElementHTML() {
  const optionsContainer = document.querySelector('.container-options')
  const productsContainer = document.querySelector('.products-container')
  const subtotalContainer = document.querySelector('.subtotal-container')
  const btnPowerOn = document.querySelector('#btnPowerOn')
  const totalSpan = document.querySelector('#total')
  const btnShowProducts = document.querySelector('#btnShowProducts')

  return {
    optionsContainer,
    btnPowerOn,
    productsContainer,
    btnShowProducts,
    subtotalContainer,
    totalSpan
  }
}

function renderOptions(options, optionsContainer) {

  options.forEach(option => {
    const btn = `<button id="${option.optionId}" data-opt_num="${option.numOption}" onclick="${option.fun}()" >${option.textToShow}</button>`
    optionsContainer.innerHTML += btn
  })

}
function tempFun() {
  console.log('temporal')
}

function powerOffSystem() {
  const elementsHTML = loadElementHTML()
  elementsHTML.optionsContainer.innerHTML = ''
  elementsHTML.btnPowerOn.style.display = 'block'
}

function renderProducts() {

  const elementsHTML = loadElementHTML()
  elementsHTML.btnShowProducts.setAttribute('disabled', true)
  productsList.forEach(product => {
    const productItemHTML = `<button onclick="addProduct('${product.name}', ${product.price} )" >${product.name} - $${product.price}</button>`
    elementsHTML.productsContainer.innerHTML += productItemHTML
  })

}

function addProduct(productName, price) {
  currentPurchase.push({
    name: productName,
    price,
    count: 1
  })
  console.log(currentPurchase)
}

function getSubtotal() {
  const subtotal = {}

  currentPurchase.forEach(product => {

    if (subtotal[product.name]) {
      subtotal[product.name].subtotal += product.price
      subtotal[product.name].count += product.count
    } else {
      subtotal[product.name] = {
        name: product.name,
        subtotal: product.price,
        count: product.count
      }
    }

  })
  return subtotal
}

function renderTotal() {
  let total = 0
  let subTotal = getSubtotal()
  const elementsHTML = loadElementHTML()

  elementsHTML.subtotalContainer.innerHTML = ''

  Object.values(subTotal).forEach(item => {
    const itemHTML = `<li> ${item.name} ${item.count} ${item.subtotal} </li>`
    elementsHTML.subtotalContainer.innerHTML += itemHTML
    total += item.subtotal
  })

  elementsHTML.totalSpan.innerHTML = `$ ${total}`
}

function clearCurrentPurchase() {
  currentPurchase.slice(0)
}

function run() {
  const elementsHTML = loadElementHTML()
  renderOptions(options, elementsHTML.optionsContainer)
  elementsHTML.btnPowerOn.style.display = 'none'

  // renderOptions(options)
}

