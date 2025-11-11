import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full container mx-auto  py-20 flex flex-col sm:flex-row sm:items-center overflow-hidden">
      <div className="w-[300px] shrink-0 font-medium sm:font-semibold text-left px-8 text-gray-600 border-l-4 border-l-blue-600 bg-white py-2 z-10 sm:text-base  text-xl">
        Proud partner at <br /> Hubspot & Segment
      </div>

      <div className="flex mt-8 sm:mt-0  animate-marquee ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company logo"
            className="mx-12 w-30 h-8 object-contain grayscale opacity-70 hover:grayscale-0 transition-all duration-100"
          />
        ))}

        {/* duplicate logos */}

        {logos.map((logo, index) => (
          <img key={`duplicate-${index}`} src={logo} alt="company logo" className="mx-12 w-30 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-100"/>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
