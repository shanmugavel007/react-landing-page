import {featureSection} from "../assets/data"

const FeatureSection = () => {

  return (
    <section className="mx-auto flex flex-col items-center py-16 px-8 ">

        {/* heading */}
        <div className="mx-auto mt-6 mb-10">
       <h1 className="font-bold text-3xl text-center ">How can we help your business?</h1>
       <p className="text-gray-600 py-4 text-center">When you resell besnik, you build trust and increase</p>
      </div>
        

        {/* feature box */}

      <div className="flex  md:flex-row flex-col items-center text-center mb-16 gap-12">
        {featureSection.map((feature,index) => (
        <div key={index} className=" md:w-1/3 flex flex-col items-center ">
          <div className="h-25 w-25 mb-6  rounded-full flex items-center justify-center  text-3xl p-4" 
          style={{backgroundColor: index === 0?"#F1EFF0":index===1?"#FEE7E7":"#FFF3E4"}}>{feature.icon}</div>
          <h3 className="font-medium pb-4 text-2xl">{feature.title}</h3>
          <p className="text-gray-600 text-base">{feature.description}</p>
        </div>
      ))}
      </div>

      {/* button */}
      <div>
      <button className="bg-blue-600 hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 font-medium rounded-full px-3 py-3 text-white w-50 items-center">Become a partner</button>
      </div>
      
    </section>
  );
};

export default FeatureSection;
