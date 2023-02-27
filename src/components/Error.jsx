import useCotizador from "../hooks/useCotizador"

function Error() {

    const { error } = useCotizador()

  return (
    <div className="text-red-500 text-center text-xl my-2 font-normal">{error}</div>
  )
}

export default Error