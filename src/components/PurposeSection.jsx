import {features} from "../assets/data"

const PurposeSection = () => {

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <p className="text-purple-600 font-medium py-1.5">ACHIEVE MORE</p>
          <h1 className=" text-3xl md:text-4xl md:w-4/5 font-bold ">
            Purpose of a convoy is to keep your team
          </h1>
        </div>
          {
            features.map((feature,index)=>
            (<div key={index} className="flex">
              <div className="mr-4 pt-4">{feature.icon}</div>
              <div>
              <h3 className="font-medium text-xl">{feature.title}</h3>
              <p className="text-gray-600 pt-3">{feature.description}</p>
              </div>
            </div>))
          }
      </div>
    </section>
  );
};

export default PurposeSection;
