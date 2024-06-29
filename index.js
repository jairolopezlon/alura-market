
let estaEncendido = true;
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
  let mensajeOpciones = `
  Opciones Disponibles
  0 - Apagar sistema
  1 - Agregar Producto
  2 - Calcular precio de producto comprados
  3 - Mostrar Total de ventas del dia
  `;
  let option = prompt(mensajeOpciones)


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
      totalDeVenta = precioProducto2 * cantidadProducto + totalDeVenta
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

console.log('el sistema termino')