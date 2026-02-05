function crearMatriz () {
    let char = '*'
    let matriz = []
    for (let i = 0; i < 4; i++) {
        let fila = []
        for (let j = 0; j < 4; j++)  {
            fila.push(char)
        } 
        matriz.push(fila)
    }
    return matriz
}
const matriz = crearMatriz()

console.log(matriz)




function sumaFilasYColumnas (mat) {
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

function calculoSumaYMediaVector (v) {
    let suma = 0
    for (let i = 0; i < v.length; i++) {
        suma += vector[i]
    }
    console.log(v.length)
    const media = suma / v.length

    return {suma, media}
}

const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(calculoSumaYMediaVector(vector))
// Suma total: 55


function sumaDiagonalMatriz (m) {
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


function divisionElementosMatriz (t, k) {
       let elementoDivisor = t[k]
    for (let i = 0; i < t.length; i++) {
        console.log(t[i] / elementoDivisor)
    }
}

const t = [
  2.5, 5.0, 7.5, 10.0, 12.5, 15.0, 17.5, 20.0, 22.5, 25.0,
  27.5, 30.0, 32.5, 35.0, 37.5, 40.0, 42.5, 45.0, 47.5, 50.0,
  52.5, 55.0, 57.5, 60.0, 62.5, 65.0, 67.5, 70.0, 72.5, 75.0,
  77.5, 80.0, 82.5, 85.0, 87.5, 90.0, 92.5, 95.0, 97.5, 100.0,
  102.5, 105.0, 107.5, 110.0, 112.5, 115.0, 117.5, 120.0, 122.5, 125.0
]



// Si k = 10 (t[10] = 27.5):
// Cada elemento se divide entre 27.5



function insertarElemento (l, k, elemento) {
    for (let i = l.length; i > k; i--) {
        l[i] = l[i - 1]
    }

    l[k] = elemento
    return l
}

// Lista original:
const lista = [10, 20, 30, 40, 50]





const asientos = Array.from({length : 300}, (_, i) => ({
    id : i + 1,
    zona : (i + 1) <= 100 ? 'fumador' : 'noFumador',
    ocupado : false
}))


let vueloOcupado = false
function gestionarReservas (preferencias) {
    if (vueloOcupado) {
        throw new Error ('El vuelo ya esta cerrado')
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


function comprobarCapacidad () {
    const asientosOcupados = asientos.filter(a => a.ocupado)

    if (asientosOcupados === 300) {
        vueloOcupado = true
        throw new Error ('Todos los asientos ya están ocupados')
    }
}



const alumnos = [
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


function mediaPonderada (alumnos, asignaturas) {
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



function mediaGeneralClase (alumnos, asignaturas) {
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


function mediasPorAsignatura (alumnos, asignaturas) {
    const medias = []

    for (let i = 0; i < asignaturas.length; i++) {
        let suma = 0
        let contador = 0
        for (const alumno of alumnos) {
            suma += alumno.notas[i]
            contador++
        }

        medias.push({
            nombre : asignaturas[i].nombre,
            media : contador === 0 ? null : suma / contador
        })
    }

    return medias
}


function porcentajeNoPresentados (alumnos) {
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


for (const alumno of alumnos) {
    console.log(alumno.nombre, mediaPonderada(alumno, asignaturas))
}

console.log('Media general de la clase', mediaGeneralClase(alumnos, asignaturas))

console.log('Medias por asignatura', mediasPorAsignatura(alumnos, asignaturas))

console.log('Porcentaje de no presentados', porcentajeNoPresentados(alumnos))

