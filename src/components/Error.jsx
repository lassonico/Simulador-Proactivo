import useCotizador from "../hooks/useCotizador"

function Error() {

    const { error } = useCotizador()

  return (
    <div className="text-red-500 text-center text-lg my-2 mx-3 font-normal">{error}</div>
  )
}

export default Error