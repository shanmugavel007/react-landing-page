import { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className=" px-4 py-20  ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-10 ">Pricing</h1>
        <div className="grid md:grid-cols-2 p-5 gap-8 ">
          <div className=" bg-white p-8 shadow-lg">
            <p className="text-gray-500 text-xl mb-5">Starter</p>
            <h1 className="font-bold text-3xl mb-5 rounded-lg">${starterPrice}/mo</h1>
          </div>
          <div className=" p-8 h-auto  shadow-lg ">
            <p className="text-gray-500 text-xl mb-5">Business</p>
            <h1 className="font-bold text-3xl mb-5  rounded-lg">${businessPrice}/mo</h1>
          </div>
          
        </div>
        <div></div>
      </div>

      <div className="text-gray-600 text-center max-w-xl mx-auto">
    <p className="py-4">{productCount} products</p>
    <div className="flex items-center gap-5 mb-10">
        <span>1</span>
        <input type="range" min={1} max={50} value={productCount} onChange={(e)=>setProductCount(parseInt(e.target.value))} className=" h-2 bg-gray-200 rounded-full flex-1 cursor-pointer appearance-none"/>
        <span>50</span>
    </div>
    <p className="text-gray-500 text-xl my-5">Ready to get started?</p>
    <button className="py-3 px-6 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-transform ">Get Started</button>

      </div>
      <div></div>
    </section>
  );
};

export default PricingSection;
