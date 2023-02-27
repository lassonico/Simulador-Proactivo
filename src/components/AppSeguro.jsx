import useCotizador from '../hooks/useCotizador'
import Formulario from './Formulario'
import LogoFlor from '../assets/flor.svg'
import LogoText from '../assets/TextoLogo.svg'
import Modal from './Modal'

function AppSeguro() {

  const { modal } = useCotizador()

  return (
    <>
      { modal && <Modal /> }
      <div className='flex items-center justify-center mt-2 md:justify-start mb-5 md:fixed md:top-2 md:left-[20px]'>
        <img src={LogoFlor} className="w-10 md:w-[6%]" alt="Imagen Logotipo" />
        <img src={LogoText} className="w-52 md:w-[30%] ml-[-10px]" alt="Imagen texto del logotipo" />
      </div>
      <section className='flex flex-col md:flex-row items-center gap-7 mt-2 md:mt-0 pb-10 mx-2 md:mx-5 md:pb-0'>
        <header className='w-full md:w-1/2 lg:w-1/3 rounded-lg'>
            <h1 className='text-bgl text-center md:text-left text-3xl md:text-5xl font-black'>Simula el credito <span className='text-yellow-400'>de tu Cliente</span></h1>
        </header>
        <main className='w-full bg-bgl md:w-1/2 lg:w-2/3 md:mx-auto shadow rounded-lg pb-6 md:py-5'>
          <Formulario />            
        </main>
      </section>
      <div className='flext justify-center items-center md:absolute md:bottom-0 md:right-[32%]'>
        <p className='text-white text-center mx-auto'>Todos los derechos reservados <span className='font-semibold'>&copy;Poractivo Soluciones Financieras</span></p>
      </div>
    </>
  )
}

export default AppSeguro