import monitorCardImg from "../assets/monitor-card.webp"
import { IoIosArrowRoundForward } from "react-icons/io"

const MonitorSection = () => {
  return (
    <section className='mx-auto container flex  gap-24 flex-col justify-between items-center md:flex-row px-6 py-15 md:px-4 md:py-20'>
        <div className=" w-full md:w-1/2 ">
            <h4 className="text-green-500 font-medium pb-5">MONITOR</h4>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-5">Introducing best mobile <br /> carousels</h1>
            <p className="text-gray-800">Before the ship is really back. Round, round, all around the world. Round,
            all around the world. Round, all around the world. Round, all around the world.</p>
             <a href="#" className="text-blue-600 font-medium pt-4 flex items-center gap-2 hover:gap-5 transition-all duration-200">Learn more about monitoring<IoIosArrowRoundForward className="size-6"/></a>
           </div>
           <div className="w-full md:w-1/2">
            <img src={monitorCardImg} alt="monitor image" className="w-full" />
           </div>
        </section>

  )
}

export default MonitorSection