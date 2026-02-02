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

console.log(ventasPorDiasDeLaSemana(ventasDiarias))