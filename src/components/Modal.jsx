import Resultado from "./Resultado"
import Cargando from './Cargando'
import useCotizador from '../hooks/useCotizador'

function Modal() {
    const { speener, setModal, setDatos } = useCotizador()
    const cerrarModal = () => {
        setModal(false)
        setDatos({
            entidad: '',
            fondo: '',
            monto: '',
            plazo: '',
            reportado: false,
            edad: ''
        })
    }
  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-[#000000c5]">
        <div className="w-full md:w-1/2 lg:w-1/3 h-auto bg-white rounded-md shadow-lg py-5 px-7 mx-4 relative">
            <h2 className="text-center text-3xl font-bold text-primary mb-5">{speener ? 'Simulando...' : 'Simulación'}</h2>
            <svg onClick={() => setModal(false)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x absolute top-3 right-3 cursor-pointer" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div className="w-full">
                { speener ? (
                <div className='flex flex-col items-center md:mx-auto py-5 rounded-md w-auto mx-8 md:w-[50%]'>
                    <Cargando />
                </div>
                ) : (
                <div className='flex flex-col bg-slate-100 md:mx-auto py-5 rounded-md px-4 w-full'>
                    <Resultado />
                </div>
                )}
            </div>
            { speener ? '' : (
                <button onClick={ cerrarModal } className="w-full text-center bg-gradient-to-b from-primary to-secundary text-white mt-5 py-2 rounded-md cursor-pointer text-xl" type="button">Aceptar</button>
            ) }
        </div>
    </div>
  )
}

export default Modal