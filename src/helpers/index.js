
export const formatearMoneda = (cantidad) => {
    return cantidad.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
}

// Calcular factor de ajuste por aval

export const factorEdadEnt = (edad, entidad) => {

    let factores

    if(edad <= 65){
        switch (entidad) {
            case "Avista":
                factores = { factor: 84.15, interes: 2.04 }
                break;
            case "Bayport":
                factores = {factor: 93, interes: 1.9}
                break;
            case "ExcelCredit":
                factores = {factor: 81, interes: 2.05}
                break;
            case "Fincomercio":
                factores = { factor: 98, interes: 1.9}
                break
            case "AvVillas":
                factores = { factor: 99, interes: 1.4}
                break
            default:
                break;
        }
    }

    if(edad >= 66 && edad <= 74){
        switch (entidad) {
            case "Avista":
                factores = { factor: 84.05, interes: 1.91 }
                break;
            case "Bayport":
                factores = { factor: 92.8 , interes: 1.8 }
                break;
            case "ExcelCredit":
                factores = { factor: 80.9 , interes: 1.86 }
                break;
            case "Fincomercio":
                factores = { factor: 98 , interes: 1.6 }
                factor = 98
                break
            case "AvVillas":
                factores = { factor: 99 , interes: 1.5 }
                break
            default:
                break;
        }
    }

    if(edad >= 75 && edad <= 79){
        switch (entidad) {
            case "Avista":
                factores = { factor: 84 , interes: 1.91 }
                break;
            case "Bayport":
                factores = { factor: 92.5 , interes: 1.87 }
                break;
            case "ExcelCredit":
                factores = { factor: 80 , interes: 1.95 }
                break;
            case "Fincomercio":
                factores = { factor: 98 , interes: 1.7 }
                break
            case "AvVillas":
                factores = { factor: 99 , interes: 1.6 }
                break
            default:
                break;
        }
    }

    if(edad >= 80 && edad <= 84){
        switch (entidad) {
            case "Avista":
                factores = { factor: 83.8 , interes: 1.90 }
                break;
            case "Bayport":
                factores = { factor: 91.7 , interes: 1.87 }
                break;
            case "ExcelCredit":
                factores = { factor: 79.6 , interes: 1.86 }
                break;
            case "Fincomercio":
                factores = { factor: 97 , interes: 1.7 }
                break
            case "AvVillas":
                factores = { factor: 98 , interes: 1.6 }
                break
            default:
                break;
        }
    }

    return factores

}

export const interes = (entidad) => {
    let interes

    switch (entidad) {
        case "Avista":
            interes = 1.91
            break;
        case "Bayport":
            interes = 1.78
            break;
        case "ExcelCredit":
            interes = 2.01
            break;
        case "Fincomercio":
            interes = 1.67
            break
        case "AvVillas":
            interes = 1.56
            break
        default:
            break;
    }

    return interes
}

export const factorMillon = (entidad) => {
    let factor

    switch (entidad) {
        case "Avista":
            factor = 17850
            break;
        case "Bayport":
            factor = 17460
            break;
        case "ExcelCredit":
            factor = 16960
            break;
        case "Fincomercio":
            factor = 14628
            break
        case "AvVillas":
            factor = 13890
            break
        default:
            break;
    }

    return factor
}

export const factorPlazoEntidad = (entidad) => {
    let plazo

    switch (entidad) {
        case "Avista":
            plazo = 180
            break;
        case "Bayport":
            plazo = 144
            break;
        case "ExcelCredit":
            plazo = 160
            break;
        case "Fincomercio":
            plazo = 120
            break
        case "AvVillas":
            plazo = 120
            break
        default:
            break;
    }

    return plazo
}

export const factorPlazoFondo = (fondo) => {
    let plazo

    switch (fondo) {
        case "Colpensiones":
            plazo = 180
            break;
        case "Fopep":
            plazo = 120
            break;
        case "Fiduprevisora":
            plazo = 144
            break;
        case "Casur":
            plazo = 144
            break
        case "Cremil":
            plazo = 120
            break
        case "Colfondos":
            plazo = 180
            break
        case "Porvenir":
            plazo = 180
            break
        case "Proteccion":
            plazo = 120
            break
        default:
            break;
    }

    return plazo
}

