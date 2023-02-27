import { Fragment } from 'react'
import { ENTIDAD, PLAZO, REPORTES, FONDO } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error';
import { formatearMoneda, factorPlazoEntidad, factorPlazoFondo } from '../helpers/index'

function Formulario() {
    
    const { datos, handleChangeDatos, error, setError, simular, setModal } = useCotizador();

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios');

            setTimeout(() => {
                setError('')
            }, 4000);

            return
        }

        let plazoEntidad = factorPlazoEntidad(datos.entidad)

        if( datos.plazo > plazoEntidad){
            setError(`El plazo maximo para ${datos.entidad} es ${plazoEntidad}`)
            setTimeout(() => {
                setError('')
            }, 4000);
    
            return
        }
        
        setError('');
        setModal(true);
        simular();
    }

  return (
    <>
        { error && <Error />}

        <form onSubmit={handleSubmit} className="px-5 md:px-10 py-0 m-auto" >

            <div className='flex flex-col md:flex-row w-full md:gap-2'>
                <div className='my-3 w-full'>
                    <label className='block mb-1 font-semibold text-primary uppercase'>Entidad</label>
                    <select
                        name='entidad'
                        className='w-full p-3 bg-gris rounded-md shadow-md outline-none text-primary'
                        value={datos.entidad}
                        onChange={(e) => handleChangeDatos(e)}
                    >
                        <option value="">Selecciona</option>
                        {ENTIDAD.map(ent => (
                            <option key={ent.id} value={ent.nombre}>{ent.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='my-3 w-full'>
                    <label className='block mb-1 font-semibold text-primary uppercase'>Fondo</label>
                    <select
                        name='fondo'
                        className='w-full p-3 bg-gris rounded-md shadow-md outline-none text-primary'
                        value={datos.fondo}
                        onChange={(e) => handleChangeDatos(e)}
                    >
                        <option value="" >Selecciona</option>
                        { FONDO.map(fondo => (
                            <option key={fondo.id} value={fondo.nombre}>{fondo.nombre}</option>
                        )) }
                    </select>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full md:gap-2'>
                <div className='my-3 w-full'>
                    <label className='block mb-1 font-semibold text-primary uppercase'>Monto</label>
                    <input
                        name='monto'
                        type="text"
                        inputMode='numeric'
                        autoComplete='off'
                        className='w-full p-3 bg-gris rounded-md shadow-md outline-none text-primary'
                        placeholder="Ej: 25.000.000"
                        value={formatearMoneda(datos.monto)}
                        onChange={(e) => handleChangeDatos(e)}
                    />
                </div>
                <div className='my-3 w-full'>
                    <label className='block mb-1 font-semibold text-primary uppercase'>Plazo</label>
                    <select
                        name='plazo'
                        className='w-full p-3 bg-gris rounded-md shadow-md outline-none text-primary'
                        value={datos.plazo}
                        onChange={(e) => handleChangeDatos(e)}
                    >
                        <option value="" >Selecciona el plazo</option>
                        {PLAZO.map( plazo =>(
                            <option key={plazo} value={plazo}>{plazo} meses</option>
                        ) )}
                    </select>
                </div>
            </div>
            <div className='flex justify-between w-full md:w-1/2 gap-2 mb-5'>
                <div className='my-3 w-1/3'>
                    <label className='block mb-1 font-semibold text-primary uppercase'>Reportado</label>
                    <div className='flex gap-3 items-center'>
                        {REPORTES.map(reportado=> (
                            <Fragment key={reportado.id}>
                                <label className='text-primary text-xl'>{reportado.nombre}</label>
                                <input
                                    type="radio"
                                    name='reportado'
                                    value={reportado.id}
                                    onChange={(e) => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className='my-3 w-1/4'>
                    <label className='block mb-1 font-semibold text-primary uppercase'>Edad</label>
                    <input
                        name='edad'
                        type='text'
                        inputMode='numeric'
                        autoComplete='off'
                        className='w-full p-3 bg-gris rounded-md shadow-md outline-none text-primary'
                        value={datos.edad}
                    onChange={(e) => handleChangeDatos(e)}
                    />
                </div>
            </div>
            <input type="submit" value="Cotizar" className='w-full md:w-1/2 block mx-auto transition-all bg-gradient-to-tr from-primary to-secundary text-bgl text-xl uppercase py-2 rounded shadow-md cursor-pointer hover:bg-secundary duration-300'/>
        </form>
    </>
  )
}

export default Formulario