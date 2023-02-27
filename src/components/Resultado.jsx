import useCotizador from '../hooks/useCotizador'
import { formatearMoneda } from '../helpers/index'

function Resultado() {
    
    const { resultado, datos } = useCotizador()

    if(resultado === 0) return null
  return (
    <>
        <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-bold text-primary'>Cuota:</p>
            <p className='text-2xl font-bold text-secundary ml-6'>{formatearMoneda(resultado)}</p>
        </div>
        <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-bold text-primary'>Monto:</p>
            <p className='text-2xl font-bold text-secundary ml-6'>{formatearMoneda(+datos.monto)}</p>
        </div>
        <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-bold text-primary'>Plazo:</p>
            <p className='text-2xl font-bold text-secundary ml-6'>{datos.plazo} meses</p>
        </div>
    </>
  )
}

export default Resultado