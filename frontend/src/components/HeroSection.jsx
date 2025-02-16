function HeroSection() {
  return (
    <>
      <div className="flex font-poppins">
        <div className="bg-indie-200 h-[42rem] w-[23rem] border-black border-[12px] rounded-[4rem] mx-auto"></div>
        <div className="m-auto">
          <div className="flex flex-col justify-center h-96 gap-12 w-[45rem]">
            <div className="text-indie-100 text-7xl font-extrabold font-poppins">
              Showcase and grow your startups
            </div>
            <div className="text-indie-200 text-[16px]">
              Get an Indie Page to show your unique journey and stand out from
              the crowd. 14118 Solopreneurs are already remarkable!
            </div>
            <div className="flex gap-2.5">
              <div className="flex border-1 h-12 border-indie-100 items-center bg-gray-800 text-white rounded-lg px-3 w-80">
                <span className="text-indie-100">indiepa.ge/</span>
                <input
                  type="text"
                  placeholder="yourname"
                  className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full"
                />
              </div>
              <button
                className="bg-veronica-300 py-3 h-12 rounded-md bg-veronica-700 hover:bg-veronica-800 text-indie-800 w-80 flex items-center justify-center gap-2 group transition duration-300 ease-in-out
            focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1 font-semibold cursor-pointer"
              >
                <p>CLAIM MY INDIE PAGE</p>
                <span className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-indie-400 text-indie-200 font-poppins text-center my-8 gap-16 h-96">
        <h1 className="text-6xl font-extrabold">
          Building in public is mainstream
        </h1>
        <h3 className="text-2xl">
          You can&apos;t just build a product and expect people to come...
        </h3>
        <h5>
          <span> ⬇ </span>There are more ways to stand out
        </h5>
      </div>
    </>
  );
}
export default HeroSection;
