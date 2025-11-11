// import { services } from "../assets/data"

import { BsStack } from "react-icons/bs"
import { HiLightBulb } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { BiTime } from "react-icons/bi"

const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

const Services = () => {
  return (
    <div>
    
    <section id="services" className="py-20 container mx-auto  sm:px-6 md:px-8 ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-15 md:gap-20 lg:gap-24">

        {/* header&desc */}

      <div className="md:max-w-1/3 w-full ">
      <h1 className="text-3xl md:text-4xl font-bold mb-5 ">Future of support with new shape</h1>
      <p className="text-gray-600 text-lg mb-5">Discuss your goals, determine success metrics, identify problems</p>

      <div className="flex items-center gap-3 mb-3 ">
        <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center ">
        <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
      </div>
      <span className="text-gray-600 ">UX design content strategy</span>
      </div>

      <div className="flex items-center gap-3 ">
        <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center ">
        <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
      </div>
      <span className="text-gray-600 ">Development bring</span>
      </div>
  
    <button className="bg-indigo-600 hover:scale-105 transition-all text-white py-3 px-8 rounded-full mt-8 cursor-pointer">Get Started</button>
    </div>
    {/* services cards */}
<div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-8">

  {
    services.map((service,index)=>(
      <div key={index} className="max-w-72 bg-white  p-5 hover:scale-105 transition-transform hover:shadow-lg cursor-pointer rounded-lg ">
        <div className="mb-4">{service.icon}</div>
        <h1 className="mb-3 font-medium text-xl">{service.title}</h1>
        <p className="text-gray-600 mb-5">{service.description}</p>
        <a  className="text-indigo-700 font-medium" href={service.link}>LEARN MORE</a>

      </div>
    ))
  }

  <div>
  
  </div>


</div>
      </div>
    </section> 
    
    
    </div>
  )
}

export default Services