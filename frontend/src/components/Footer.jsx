const year=new Date().getFullYear()
function Footer() {
  return (
    <div className='font-poppins flex text-center justify-center p-8 bg-indie-700 sm:flex-row sm:justify-evenly flex-col text-sm md:text-lg text-indie-100'>
      🔥  MyFolio.tech 🔥  © {year} 
    </div>
  )
}

export default Footer