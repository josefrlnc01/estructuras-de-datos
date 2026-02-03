function inventarioAlmacenes(inventario) {
  const almacenes = ['Almacén Norte', 'Almacén Sur', 'Almacén Este'];
  const categorias = ['Electrónica', 'Ropa', 'Hogar', 'Alimentos'];
  const productos = [
    ['Laptops', 'Tablets', 'Phones'],
    ['Camisas', 'Pantalones', 'Zapatos'],
    ['Sillas', 'Mesas', 'Lámparas'],
    ['Arroz', 'Pasta', 'Aceite']
  ];

  const productosStockCriticoArr = []


  let mayorInventario = 0
  let almacenMayorInventario = 0
  let productoMayorStock = 0
  let nombreProductoMayorStock = 0

  for (let i = 0; i < inventario.length; i++) {
    let totalInventarioAlmacén = 0

    for (let j = 0; j < inventario[i].length; j++) {
      //Obtención del total del inventario por almacen
      totalInventarioAlmacén += inventario[i][j]

      for (let k = 0; k < inventario[i][j].length; k++) {
        //Obtención de producto con mayor stock
        if (productoMayorStock < inventario[i][j][k]) {
          productoMayorStock = inventario[i][j][k]
          nombreProductoMayorStock = productos[j][k]
        }
        //Adición al array de productos con stock menor a 30
        if (inventario[i][j][k] < 30) {
          productosStockCriticoArr.push({
            almacen: almacenes[i],
            categoria: categorias[j],
            producto: productos[j][k]
          })
        }
      }
    }

    //Asignación de almacén con mayor inventario
    if (mayorInventario < totalInventarioAlmacén) {
      mayorInventario = totalInventarioAlmacén,
        almacenMayorInventario = i
    }
  }


  let categoriaConMenosStock = Infinity
  let nombreCategoriaConMenosStock = 0

  for (let j = 0; j < inventario[0].length; j++) {
    let stockCategoria = 0
    for (let i = 0; i < inventario.length; i++) {
      //Obtención de stock por categoría de producto
      stockCategoria += inventario[i][j]

    }

    //Asignación de categoría con menos stock total
    if (categoriaConMenosStock > stockCategoria) {
      categoriaConMenosStock = stockCategoria
      nombreCategoriaConMenosStock = j
    }
  }

  //Obtención de productos criticos
  const criticos = productosCriticos(productosStockCriticoArr)
 
  return {
    almacenMayorInventario: almacenes[almacenMayorInventario],
    nombreCategoriaConMenosStock: categorias[nombreCategoriaConMenosStock],
    criticos,
    nombreProductoMayorStock 
  }
}


function productosCriticos (prod) {
  let prodCriticos = {}

  for (let i = 0; i < prod.length; i++) {
    const clave = `${prod[i].almacen}-${prod[i].producto}`
    prodCriticos[clave] = {
      almacen : prod[i].almacen,
      categoria : prod[i].categoria,
      producto : prod[i].producto
    }
  }

  return prodCriticos
}

/*
    Encuentra el almacén con mayor inventario total
Encuentra qué categoría tiene menos stock sumando todos los almacenes
Crea una función que devuelva un reporte de productos con stock crítico (< 30 unidades) indicando almacén, categoría y producto
Encuentra el producto específico con mayor stock en todo el sistema
BONUS: Crea una función que redistribuya inventario: si un almacén tiene > 50 unidades de un producto y otro tiene < 20, transfiere 15 unidades
*/

function redistribuirInventario (inventario) {
    for (let j = 0; j < inventario[0].length; j++) {
      let almacenConPocoStock = -1
      let almacenConMuchoStock = -1
      for (let k = 0; k < inventario[0][j].length; k++) {
        for (let i = 0; i < inventario.length; i++) {
          if (inventario[i][j][k] > 50 && almacenConMuchoStock !== -1) {
            almacenConMuchoStock = i
          } 
          if (inventario[i][j][k] < 20 && almacenConPocoStock !== -1) {
            almacenConPocoStock = i
          }
        }
      }
      if (almacenConMuchoStock !== -1 && almacenConPocoStock !== -1) {
        inventario[almacenConMuchoStock][j][k] -= 15
        inventario[almacenConPocoStock][j][k] += 15
      }
    }
}

// Inventario de 3 almacenes, cada uno con 4 categorías, cada categoría con 3 productos
const inventario = [
  // Almacén 1
  [
    [50, 30, 20],   // Electrónica: laptops, tablets, phones
    [100, 80, 60],  // Ropa: camisas, pantalones, zapatos
    [40, 25, 15],   // Hogar: sillas, mesas, lámparas
    [200, 150, 100] // Alimentos: arroz, pasta, aceite
  ],
  // Almacén 2
  [
    [30, 40, 50],
    [70, 90, 80],
    [20, 30, 25],
    [180, 160, 140]
  ],
  // Almacén 3
  [
    [45, 35, 25],
    [95, 85, 75],
    [35, 28, 18],
    [190, 170, 130]
  ]
]
console.log(redistribuirInventario(inventario))