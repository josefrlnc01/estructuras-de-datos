function masVentas(ventas) {
    let indiceMejorSucursal = 0
    let mayorVentas = 0
    for (let i = 0; i < ventas.length; i++) {
        let total = 0
        for (let j = 0; j < ventas[i].length; j++) {
            total += ventas[i][j]
        }
        if (mayorVentas < total) {
            mayorVentas = total
            indiceMejorSucursal = i
        }
    }

    return `La sucursal con más ventas es la sucursal ${indiceMejorSucursal + 1} con ${mayorVentas} ventas`
}


const ventas = [
    [100, 200, 150],  // Sucursal A
    [50, 80, 90],     // Sucursal B
    [300, 100, 200],  // Sucursal C
    [20, 40, 30]      // Sucursal D
];




function ventasPorDiasDeLaSemana(ventas) {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    let ventasTotales = []
    let promediosSemanales = []
    let comparador = ventas[0][0]
    let tiendaMayorVentasEnUnDia = 0
    let diaMayorVentas = 0

    for (let i = 0; i < ventas.length; i++) {
        let totalVentasSemana = 0
        let promedioSemanal = 0
        let totalVentasDia = 0
        for (let j = 0; j < ventas[i].length; j++) {
            totalVentasSemana += ventas[i][j]
            totalVentasDia = ventas[i][j]

            promedioSemanal = (totalVentasSemana / 7).toFixed(2)
            if (comparador < totalVentasDia) {
                comparador = totalVentasDia
                tiendaMayorVentasEnUnDia = i
                diaMayorVentas = j 
            }
        }
        promediosSemanales.push(promedioSemanal)
        ventasTotales.push(totalVentasSemana)

    }

    const menorVentasSemana = Math.min(...ventasTotales)
    const mayorVentasEnUnDia = comparador
    return { menorVentasSemana, 
        mayorVentasEnUnDia, 
        tiendaMayorVentasEnUnDia,
        promediosSemanales, 
        diaMayorVentas : dias[diaMayorVentas]}
}


const ventasDiarias = [
    [50, 60, 70, 80, 90, 150, 140],
    [120, 150, 180, 200, 220, 300, 250],
    [80, 90, 100, 110, 130, 180, 160],
    [200, 210, 190, 180, 170, 280, 290]
];




function colegio (calificaciones) {
    const materias = ['Matemáticas', 'Ciencia', 'Historia', 'Inglés'];
    const estudiantes = ['Ana', 'Carlos', 'María', 'Pedro', 'Luis', 'Saul'];
    const estudiantesRiesgoArr = []

    let materiaConPromedioMasAlto = 0
    let nombreMateriaConPromedioMasAlto = 0
    for (let i = 0; i < calificaciones.length; i++) {
        let totalMateria = 0
        let promedioMateria = 0
        for (let j = 0; j < calificaciones[i].length; j++) {
            //Obtención total de notas por materia
            totalMateria += calificaciones[j][i]
            //Promedio de la materia
               promedioMateria = totalMateria / calificaciones[j].length
        }
        if (materiaConPromedioMasAlto < promedioMateria) {
            materiaConPromedioMasAlto = promedioMateria
            nombreMateriaConPromedioMasAlto = i
        }
    }

    let estudianteConPromedioMasBajo = Infinity
    let nombreEstudiantePromedioMasBajo = 0

    for (let i = 0; i < calificaciones.length; i++) {
        let totalNotasEstudiante = 0
        let promedioEstudiante = 0
        for (let j = 0; j < calificaciones[i].length; j++) {
            //Obtención total notas por estudiante
            totalNotasEstudiante += calificaciones[i][j]
        }
        //Promedio de cada estudiante
        promedioEstudiante = totalNotasEstudiante / calificaciones[i].length
      
        if (promedioEstudiante <= 70) {
            estudiantesRiesgoArr.push({
                nombre : estudiantes[i],
                promedio : promedioEstudiante
            })
          
        }
        if (estudianteConPromedioMasBajo > promedioEstudiante) {
            estudianteConPromedioMasBajo = promedioEstudiante
            nombreEstudiantePromedioMasBajo = i
        } 
    }
    
   const estudiantesEnRiesgo = estudiantesRiesgo(estudiantesRiesgoArr)
    console.log(estudiantesEnRiesgo)
    return {
        nombreMateriaConPromedioMasAlto : materias[nombreMateriaConPromedioMasAlto],
        nombreEstudiantePromedioMasBajo : estudiantes[nombreEstudiantePromedioMasBajo]
     
    }
}

// Calificaciones de 5 estudiantes en 4 materias
const calificaciones = [
  [85, 90, 78, 92],  // Estudiante 1: Math, Ciencia, Historia, Inglés
  [70, 65, 80, 75],  // Estudiante 2
  [95, 98, 100, 96], // Estudiante 3
  [60, 55, 62, 58],  // Estudiante 4
  [88, 85, 90, 87],   // Estudiante 5
    [21, 32, 90, 82]   // Estudiante 5
];

console.log(colegio(calificaciones))

function estudiantesRiesgo (est) {
    let estudiantesRiesgo = {}
    for (let i = 0; i < est.length; i++) {
        estudiantesRiesgo[est[i].nombre] = {
            nombre : est[i].nombre,
            promedio : est[i].promedio
        }
    }

    return estudiantesRiesgo
}

/*Encuentra qué materia tiene el promedio más alto
Encuentra qué estudiante tiene el promedio más bajo
Crea una función que devuelva un objeto con los estudiantes que están "en riesgo"*/ 


function borrado (coches) {
    
    for (let i = 0; i < coches.length; i++) {
        coches[i] = coches[i + 1]
    }
    coches.pop()
  
    return coches
}


const coches = [
    'seat',
    'audi',
    'ford',
    'opel',
    'bmw'
]


console.log(borrado(coches))

