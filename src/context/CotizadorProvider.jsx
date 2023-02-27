import { createContext, useState } from 'react'
import { factorEdadEnt } from '../helpers/index'

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) =>{

    const [ datos, setDatos ] = useState({
        entidad: '',
        fondo: '',
        monto: '',
        plazo: '',
        reportado: '',
        edad: ''
    })

    const [ error, setError ] = useState('');
    const [ resultado, setResultado ] = useState(0)
    const [ modal, setModal ] = useState(false);
    const [ speener, setSpeener ] = useState(false)

    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const simular = () => {
        
        let resultado
        // Base: Monto
        resultado = factorEdadEnt(datos.edad, datos.entidad)

        let monto = (datos.monto / resultado.factor) * 100
        let int = resultado.interes / 100

        let cuota = (int * monto) / ( 1 - ( Math.pow((1 + int ), -datos.plazo )))

        resultado = +cuota.toFixed(0)

        setSpeener(true)

        setTimeout(() => {
            setResultado(resultado)
            setSpeener(false)
        }, 4000);
    } 

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                setDatos,
                handleChangeDatos,
                error,
                setError,
                simular,
                resultado,
                modal,
                setModal,
                speener
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext