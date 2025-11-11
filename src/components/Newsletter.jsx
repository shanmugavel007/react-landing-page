import { HiArrowRight } from "react-icons/hi"

const Newsletter = () => {
  return (
   <section className="container py-20 mx-auto px-4 sm:px-6 md:px-8" id="newsletter">

    <div className="bg-blue-600 rounded-2xl">
      <div className="relative md:px-16 px-6 py-16  md:py-24">

        <div className="absolute rounded-r-2xl rounded-l-none bg-blue-700 w-1/2 top-0 right-0 hidden md:block clip-path-slant h-full"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* left content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl mb-4">Subscribe newsletter</h2>
          <p className="text-white text-sm sm:text-base">Best cooks and best delivery guys all at your service. Hot tasty food</p>
        </div>

        {/* right content */}

        <div className="w-full sm:w-auto flex flex-col  md:items-center sm:flex-row gap-4 sm:gap-0 ">
          <input type="email" placeholder="Enter your email address" 
          className=" w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none  focus:ring-2 ring-green-400"/>
          <button className="w-full   sm:w-auto  cursor-pointer bg-green-500 hover:scale-105 hover:bg-green-600 transition-transform duration-200 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-r-xl sm:rounded-l-none flex gap-2 items-center justify-center ">
          <span >Discover</span>
          <HiArrowRight className="size-5"/>
          </button>
        </div>
        </div>
      </div>
    </div>

<style>
  
{
  
`.clip-path-slant{
  clip-path: polygon(20% 0%,100% 0%,100% 100%,0% 100%)
}`
}
</style>
    
   </section>
  )
}

export default Newsletter    