const year=new Date().getFullYear()
import logo from "../../public/logo-myfolio.png"
function Footer() {
  return (
    <div className='font-poppins flex justify-center gap-2 p-8 bg-indie-700 items-center text-sm md:text-lg text-indie-100'>
        <img src={logo} className="md:h-10 md:w-10 h-6 w-6"/><span className="mt-3">MyFolio.tech © {year}</span> 
    </div>
  )
}

export default Footer