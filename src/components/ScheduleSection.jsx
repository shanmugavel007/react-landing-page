import stats from "../assets/stats.webp"
import { IoIosArrowRoundForward } from "react-icons/io"

const ScheduleSection = () => {
  return (
    <section className='mx-auto container flex  gap-24 flex-col justify-between items-center  md:flex-row px-6 py-4 md:px-4 md:py-20'>
       <div className="w-full md:w-1/2">
        <img src={stats} alt="Statistics dashboard" className="w-full" />
       </div>
       <div className=" w-full md:w-1/2 ">
        <h4 className="text-orange-500 font-medium pb-5">SCHEDULE</h4>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-5">Streamline Your Business <br /> With Smart Scheduling Solutions</h1>
        <p className="text-gray-800">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments,
         manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>
         <a href="#" className="text-blue-600 font-medium pt-4 flex items-center gap-2 hover:gap-5 transition-all duration-200">Explore scheduling features <IoIosArrowRoundForward className="size-6"/></a>
       </div>
    </section>
  )
}

export default ScheduleSection