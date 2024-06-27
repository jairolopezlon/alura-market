
let estaEncendido = true;
let saldoInicial = 10000;
let totalDeVentas = 0;
let totalDeVenta = 0;

let producto1 = 'Helado';
let precioProducto1 = 300;
let producto2 = 'Arroz';
let precioProducto2 = 500;
let producto3 = 'Gaseosa';
let precioProducto3 = 200;
let producto4 = 'Aceite';
let precioProducto4 = 600;

while (estaEncendido) {
  let mensajeOpciones = `
  Opciones Disponibles
  0 - Apagar sistema
  1 - Agregar Producto
  2 - Calcular precio de producto comprados
  `;
  let option = prompt(mensajeOpciones)


  /**
   * saldo inicial
   * 
   * 
   * hitorial de pagos
   * ver productos
   * cambios a devolver
   * descuento de producto
   * medios de pagos
   * devoluciones
   * escanear producto
   * validar producto duplicado
   * 
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

    if (productoSeleccionado == 1) {
      nombreProductoSeleccionado = 'Helado'
    } else if (productoSeleccionado == 2) {
      nombreProductoSeleccionado = 'Arroz'
    } else if (productoSeleccionado == 3) {
      nombreProductoSeleccionado = 'Gaseosa'
    } else if (productoSeleccionado == 4) {
      nombreProductoSeleccionado = 'Aceite'
    }

    console.log(`se agrego el producto: ${nombreProductoSeleccionado}`)

  } else if (option == 2) {
    console.log('se se calculo el precio de los producto')
  } else if (option == 3) {

  } else if (option == 4) {

  }
  else {
    alert('❗❗Opcion indicada no existe \n\n' + mensajeOpciones)
  }
}

console.log('el sistema termino')