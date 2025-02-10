function HeroSection()
{
    return(
        <>
        <div className="flex font-poppins gap-24 ml-40 scroll-smooth">
            <div className="bg-indie-200 h-[42rem] w-[23rem] border-black border-[12px] rounded-[4rem] mt-7">    
            </div>
            <div className="flex flex-col justify-center items-center h-96 gap-12 w-[45rem] mt-20">
            <div className="text-indie-100 text-7xl font-extrabold font-poppins">
            Showcase and grow your startups
            </div>
            <div className="text-indie-200 text-[16px]">
            Get an Indie Page to show your unique journey and stand out from the crowd. 14118 Solopreneurs are already remarkable!
            </div>
            <div className=' flex gap-2.5'>
            <div className="flex border-1 border-indie-100 items-center bg-gray-800 text-white rounded-lg p-3 w-80 mt-4">
                <span className="text-indie-100">indiepa.ge/</span>
                <input
                    type="text"
                    placeholder="yourname"
                    className="bg-transparent text-white placeholder-gray-500 focus:outline-none ml-2 w-full"
                />
            </div>
            <button className="bg-veronica-300 p-3 rounded-md bg-veronica-700 hover:bg-veronica-800 text-indie-800 w-80 flex items-center justify-center gap-2 group mt-4 transition duration-300 ease-in-out
            focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1 font-semibold">
                <p>CLAIM MY INDIE PAGE</p><span className='group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>→</span></button>
</div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-indie-400 text-indie-200 font-poppins m-auto text-center p-16 gap-16 h-96 mt-14">
            <h1 className="text-6xl font-extrabold">Building in public is mainstream</h1>
            <h3 className="text-2xl">You can&apos;t just build a product and expect people to come...</h3>
            <h5><span className="mt-10"> ⬇ </span>There are more ways to stand out</h5>
        </div>
        </>
    )
}
export default HeroSection;