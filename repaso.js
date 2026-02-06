function crearMatriz() {
    let char = '*'
    let matriz = []
    for (let i = 0; i < 4; i++) {
        let fila = []
        for (let j = 0; j < 4; j++) {
            fila.push(char)
        }
        matriz.push(fila)
    }
    return matriz
}
const matriz = crearMatriz()

console.log(matriz)




function sumaFilasYColumnas(mat) {
    let sumaFilas = 0
    let sumaColumnas = 0
    const vectorFilas = []
    const vectorColumnas = []
    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[i].length; j++) {
            sumaFilas += mat[i][j]
            sumaColumnas += mat[j][i]
        }

        vectorFilas.push(sumaFilas)
        vectorColumnas.push(sumaColumnas)
    }


    return {
        vectorFilas,
        vectorColumnas
    }
}


const matriz2 = [
    [2, 4, 6],    // Fila 0: suma = 12
    [1, 3, 5],    // Fila 1: suma = 9
    [7, 8, 9]     // Fila 2: suma = 24
]

console.log(sumaFilasYColumnas(matriz2))

function calculoSumaYMediaVector(v) {
    let suma = 0
    for (let i = 0; i < v.length; i++) {
        suma += vector[i]
    }
    console.log(v.length)
    const media = suma / v.length

    return { suma, media }
}

const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(calculoSumaYMediaVector(vector))
// Suma total: 55


function sumaDiagonalMatriz(m) {
    let sumaDiagonal = 0
    for (let i = 0; i < m.length; i++) {
        for (let j = i; j <= i; j++) {
            sumaDiagonal += m[i][j]
        }
    }

    return sumaDiagonal
}

const matriz3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(sumaDiagonalMatriz(matriz3))

// Diagonal principal: 1, 6, 11, 16
// Suma: 1 + 6 + 11 + 16 = 34


function divisionElementosMatriz(t, k) {
    let elementoDivisor = t[k]
    for (let i = 0; i < t.length; i++) {
        console.log(t[i] / elementoDivisor)
    }
}

const t = [
    2.5, 5.0, 7.5, 10.0, 12.5, 15.0, 17.5, 20.0, 22.5, 25.0, 125.0,
    27.5, 30.0, 32.5, 35.0, 37.5, 40.0, 42.5, 45.0, 47.5, 50.0,
    52.5, 55.0, 57.5, 60.0, 62.5, 65.0, 67.5, 70.0, 72.5, 75.0,
    77.5, 80.0, 82.5, 85.0, 87.5, 90.0, 92.5, 95.0, 97.5, 100.0,
    102.5, 105.0, 107.5, 110.0, 112.5, 115.0, 117.5, 120.0, 122.5
]



// Si k = 10 (t[10] = 27.5):
// Cada elemento se divide entre 27.5



function insertarElemento(l, k, elemento) {
    for (let i = l.length; i > k; i--) {
        l[i] = l[i - 1]
    }

    l[k] = elemento
    return l
}

// Lista original:
const lista = [10, 20, 30, 40, 50]





const asientos = Array.from({ length: 300 }, (_, i) => ({
    id: i + 1,
    zona: (i + 1) <= 100 ? 'fumador' : 'noFumador',
    ocupado: false
}))


let vueloOcupado = false
function gestionarReservas(preferencias) {
    if (vueloOcupado) {
        throw new Error('El vuelo ya esta cerrado')
    }

    const asientoLibre = asientos.find((a) => a.zona === preferencias && !a.ocupado)


    if (asientoLibre) {
        asientoLibre.ocupado = true
        comprobarCapacidad()
        return `Éxito, asiento reservado: asiento ${asientoLibre.id}, zona : ${asientoLibre.zona}`
    } else {
        return `Agotado, no quedan más asientos libres en la zona de ${preferencias}`
    }
}


function comprobarCapacidad() {
    const asientosOcupados = asientos.filter(a => a.ocupado)

    if (asientosOcupados === 300) {
        vueloOcupado = true
        throw new Error('Todos los asientos ya están ocupados')
    }
}



const alumnos1 = [
    {
        nombre: 'Alumno1',
        notas: [7, 8, 6, 9, 5, 6, 8, 7]
    },
    {
        nombre: 'Alumno2',
        notas: [5, null, 4, 6, 5, 7, 6, null]
    },
    {
        nombre: 'Alumno3',
        notas: [9, 9, 8, 9, 8, 8, 9, 9]
    },
    {
        nombre: 'Alumno4',
        notas: [null, null, 5, 6, 4, null, 6, 5]
    }
]


const asignaturas = [
    { nombre: 'Matemáticas', coef: 2 },
    { nombre: 'Programación', coef: 3 },
    { nombre: 'Física', coef: 2 },
    { nombre: 'Bases de Datos', coef: 3 },
    { nombre: 'Sistemas', coef: 2 },
    { nombre: 'Redes', coef: 1 },
    { nombre: 'Algoritmos', coef: 3 },
    { nombre: 'Ingeniería Software', coef: 2 }
]


function mediaPonderada(alumnos, asignaturas) {
    let suma = 0
    let sumaCoef = 0
    for (let i = 0; i < alumnos.notas.length; i++) {
        const nota = alumnos.notas[i]
        let coef = asignaturas[i].coef

        if (nota !== null) {
            suma += nota * coef
            sumaCoef += coef
        }
    }

    return sumaCoef === 0 ? null : suma / sumaCoef
}



function mediaGeneralClase(alumnos, asignaturas) {
    let suma = 0
    let contador = 0
    for (const alumno of alumnos) {
        const media = mediaPonderada(alumno, asignaturas)

        if (media !== null) {
            suma += media
            contador++
        }
    }

    return contador === 0 ? null : suma / contador
}


function mediasPorAsignatura(alumnos, asignaturas) {
    const medias = []

    for (let i = 0; i < asignaturas.length; i++) {
        let suma = 0
        let contador = 0
        for (const alumno of alumnos) {
            const nota = alumno.notas[i]

            if (nota !== null) {
                suma += nota
                contador++
            }
        }

        medias.push({
            nombre: asignaturas[i].nombre,
            media: contador === 0 ? null : suma / contador
        })
    }

    return medias
}


function porcentajeNoPresentados(alumnos) {
    let suma = 0
    let contadorNoPresentados = 0
    let contadorNotas = 0
    for (const alumno of alumnos) {
        for (const nota of alumno.notas) {
            if (nota === null) contadorNoPresentados++
            contadorNotas++
        }
    }

    return contadorNoPresentados && contadorNotas === 0 ? null : (contadorNotas / 100) * contadorNoPresentados
}


/*for (const alumno of alumnos) {


    console.log(alumno.nombre, mediaPonderada(alumno, asignaturas))
}

console.log('Media general de la clase', mediaGeneralClase(alumnos, asignaturas))

console.log('Medias por asignatura', mediasPorAsignatura(alumnos, asignaturas))

console.log('Porcentaje de no presentados', porcentajeNoPresentados(alumnos))*/

function calculoCuadrados() {
    let numero = 1
    let cuadrado = 1
    const cuadrados = []
    while (numero <= 100) {
        const numeroALCuadrado = cuadrado * numero
        numero++
        cuadrado++
        cuadrados.push(numeroALCuadrado)
    }

    return cuadrados
}


calculoCuadrados()

function tabla2Dimensiones() {
    const matriz = []
    for (let i = 0; i < 3; i++) {
        const fila = []
        for (let j = 0; j < 4; j++) {
            fila.push(j)
        }
        matriz.push(fila)
    }

    return matriz
}

const resultado = tabla2Dimensiones()



const almacenes = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    nombre: `Almacén ${i + 1}`,
    stock: [
        { productoId: 1, nombre: 'Tornillos', ventas: Math.floor(Math.random() * 100) },
        { productoId: 2, nombre: 'Tuercas', ventas: Math.floor(Math.random() * 100) },
        { productoId: 3, nombre: 'Clavos', ventas: Math.floor(Math.random() * 100) }
    ]
}))



function ventasAlmacenes(almacenes) {
    let sumaVentas = 0
    let totalProductos = 0
    const almacenesVentasSuperioresAMedia = []
    for (const alm of almacenes) {
        for (const prod of alm.stock) {
            sumaVentas += prod.ventas
            totalProductos++
        }

    }
    const media = sumaVentas === 0 ? null : sumaVentas / totalProductos


    for (const alm of almacenes) {
        let totalAlmacen = 0
        for (const prod of alm.stock) {
            totalAlmacen += prod.ventas
        }
        if (totalAlmacen > media) {
            almacenesVentasSuperioresAMedia.push({
                nombre: alm.nombre,
                total: totalAlmacen
            })
        }

    }


    return { almacenesVentasSuperioresAMedia }
}
const resultadoVentas = ventasAlmacenes(almacenes)



function maximoEIndice(t) {
    let temp = 0
    let indice = 0
    for (let i = 0; i < t.length; i++) {
        if (temp < t[i]) {
            temp = t[i]
            indice = i
        }
    }


    return {
        numeroMayor: temp,
        indice
    }
}



const minutosAntesDeSalida = 30
let reservasActivas = true
let listaDeEspera = false
const asientosVuelo = Array.from({ length: 180 }, (_, i) => ({
    id: i + 1,
    clase: (i + 1) <= 20 ? 'ejecutiva' : 'turista',
    reservado: false
}))
const listaEspera = []



function reservarVuelo(preferencias, nombre) {

    if (minutosAntesDeSalida < 30) {
        listaDeEspera = true
        reservasActivas = false
    }

    if (listaDeEspera && !reservasActivas) {
        return mandarAListaDeEspera(preferencias, nombre)
    }

    const hueco = asientosVuelo.find(a => a.clase === preferencias && !a.reservado)

    if (!hueco) {
        return comprobarAsientos(preferencias, nombre)
    }

    hueco.reservado = true

    return `Asiento ${hueco.id} para la clase ${hueco.clase} reservado correctamente`

}



function comprobarAsientos(preferencias, nombre) {
    const ocupados = asientosVuelo.filter(a => a.reservado)

    if (ocupados.length >= 180) {
        return mandarAListaDeEspera(preferencias, nombre)
    }
    const libre = asientosVuelo.find(p => p.clase !== preferencias && !p.reservado)
    if (libre) {
        return `No hay asientos en tu clase elegida pero si la hay en ${libre.clase}`
    }

    return mandarAListaDeEspera(preferencias, nombre)
}



function mandarAListaDeEspera(preferencias, nombre) {
    if (!listaEspera.find(p => p.nombre === nombre)) {
        listaEspera.push({
            nombre: nombre,
            clase: preferencias
        })
        return 'Fuiste incluido en la lista de espera para el siguiente vuelo'
    } else {
        return `${nombre} ya está en la lista de espera`
    }

}



console.log(reservarVuelo('turista', 'Raul'))

console.log(reservarVuelo('ejecutiva', 'Gonzalo'))


const alumnos2 = [
  { nombre: 'Alumno1',  notas: [6, 7, 8] },
  { nombre: 'Alumno2',  notas: [5, 6] },
  { nombre: 'Alumno3',  notas: [9, 8, 7, 6] },
  { nombre: 'Alumno4',  notas: [4, 5, 6] },
  { nombre: 'Alumno5',  notas: [7, 7, 8, 9] },
  { nombre: 'Alumno6',  notas: [6, 5] },
  { nombre: 'Alumno7',  notas: [8, 9, 9, 8, 7] },
  { nombre: 'Alumno8',  notas: [3, 4] },
  { nombre: 'Alumno9',  notas: [5, 6, 7] },
  { nombre: 'Alumno10', notas: [9, 9, 8] },

  { nombre: 'Alumno11', notas: [6, 6, 6] },
  { nombre: 'Alumno12', notas: [7, 8] },
  { nombre: 'Alumno13', notas: [5, 5, 6, 7] },
  { nombre: 'Alumno14', notas: [4, 5] },
  { nombre: 'Alumno15', notas: [8, 7, 6] },
  { nombre: 'Alumno16', notas: [9, 8, 9, 10] },
  { nombre: 'Alumno17', notas: [6, 7] },
  { nombre: 'Alumno18', notas: [5, 6, 5] },
  { nombre: 'Alumno19', notas: [7, 7, 7, 7] },
  { nombre: 'Alumno20', notas: [8, 9] },

  { nombre: 'Alumno21', notas: [6, 6] },
  { nombre: 'Alumno22', notas: [5, 4, 6] },
  { nombre: 'Alumno23', notas: [9, 8, 7, 8] },
  { nombre: 'Alumno24', notas: [3, 4] },
  { nombre: 'Alumno25', notas: [7, 6, 5] },
  { nombre: 'Alumno26', notas: [8, 8, 9] },
  { nombre: 'Alumno27', notas: [6, 7, 8, 9, 10] },
  { nombre: 'Alumno28', notas: [4, 5] },
  { nombre: 'Alumno29', notas: [7, 8, 7] },
  { nombre: 'Alumno30', notas: [9, 9, 9, 8] }
]



function notas (alumnos) {
    const notasAlumnoYMedia = []
   
    
    for (const alumno of alumnos) {
         let totalNotasAlumno = 0
        const notasAlumno = alumno.notas
        for (let i = 0; i < notasAlumno.length; i++) {
            totalNotasAlumno += notasAlumno[i]
        }

        const mediaAlumno = totalNotasAlumno / notasAlumno.length

        notasAlumnoYMedia.push( {
            notas : notasAlumno,
            nombre : alumno.nombre,
            media : mediaAlumno
        })
    }

    return notasAlumnoYMedia
}


const resultadoNotas = notas(alumnos2)


console.log(resultadoNotas)



const alumnos3 = [
  { nombre: 'Ana', nota: 7 },
  { nombre: 'Luis', nota: 5 },
  { nombre: 'Marta', nota: 9 },
  { nombre: 'Juan', nota: 6 }
]


function notas2 (alumnos) {
    let totalNotas = 0
    const resultado = []
    for (const alumno of alumnos) {
        totalNotas += alumno.nota
    }

    const media = totalNotas / alumnos3.length
   
    for (const alumno of alumnos) {
         const diferencia = alumno.nota - media
         resultado.push({
            nota : alumno.nota,
            nombre : alumno.nombre,
            diferencia
         })
    }

    return {
        resultado,
        media
    }
}


const resultadoNotas2 = notas2(alumnos3)

console.log(resultadoNotas2)





function notasConCentinela () {
    const notas = []
    let nota = 0
    
    while (nota !== 99) {
       nota = Number(prompt('Introduce una nota, para finalizar introduce el valor 99'))
      
    if ((nota > 10 || nota < 0) && nota !== 99) {
        alert('Nota inválida, esta no se incluirá')
       continue
    }

    if (nota === 99) {
        break
    }
       notas.push(nota)

    }

    let sumaTotal = 0

    for (let i = 0; i < notas.length; i++) {
        sumaTotal += notas[i]
    }

    const media = sumaTotal / notas.length


    alert(`Las notas son ${notas}`)
    alert(`La suma total de las notas es ${sumaTotal}`)
    alert(`La media de las notas es ${media}`)
}



notasConCentinela()



