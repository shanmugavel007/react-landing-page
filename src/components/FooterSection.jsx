import { FaFacebookF, FaTwitter, FaTwitterSquare } from "react-icons/fa"
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa6"

const FooterSection = () => {
  return (
    <footer className="bg-gray-50">
        <div className="container pt-20 pb-10 mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3  md:col-span-4  md:gap-6 lg:grid-cols-6 ">
            {/* brand logo  column */}
            <div className=" w-full md:max-w-md grid col-span-3  md:col-span-4 lg:col-span-2 ">
            <div className="flex items-center gap-1 cursor-pointer">
                <div className="h-4 w-4 rounded-full bg-blue-600/75"></div>
                <div className="h-4 w-4 -ml-2 rounded-full bg-red-600 "></div>
                <span className="font-medium text-xl">The Next Design</span>
            </div>
            <p className="text-gray-500 py-5">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
            <div className="flex gap-3">
                <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-200"><FaFacebookF className="size-5"/></a>
                <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-gray-600 hover:text-white hover:bg-blue-400 transition-all duration-200"><FaTwitter className="size-5"/></a>
                <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-gray-600 hover:text-white hover:bg-blue-700 transition-all duration-200"><FaLinkedinIn className="size-5"/></a>
            </div>
            </div>
            
            <div className="flex flex-col">
                <h1 className="font-medium text-lg mb-3">Company</h1>
                <a href="#" className="mb-3 text-gray-600">About</a>
                <a href="#" className="mb-3 text-gray-600">Terms of Use</a>
                <a href="#" className="mb-3 text-gray-600">Privacy Policy</a>
                <a href="#" className="mb-3 text-gray-600">How it Works</a>
                <a href="#" className="mb-3 text-gray-600">Contact Us</a>
            </div>

            <div className="flex flex-col">
                <h1 className="font-medium text-lg mb-3">GetHelp</h1>
                <a href="#" className="mb-3 text-gray-600">Support Carrer</a>
                <a href="#" className="mb-3 text-gray-600">24h Service</a>
                <a href="#" className="mb-3 text-gray-600">Quick Chat</a>
            </div>

            <div className="flex flex-col">
                <h1 className="font-medium text-lg mb-3">Support</h1>
                <a href="#" className="mb-3 text-gray-600">FAQ</a>
                <a href="#" className="mb-3 text-gray-600">Policy</a>
                <a href="#" className="mb-3 text-gray-600">Business</a>
            </div>

            <div className="flex flex-col ">
                <h1 className="font-medium text-lg mb-3">Contact</h1>
                <a href="#" className="mb-3 text-gray-600">WhatsApp</a>
                <a href="#" className="mb-3 text-gray-600">Support 24</a>
            </div>
            </div>
{/* footer bottom */}
<div className="mt-20 py-7 border-t-2 border-gray-200 flex  flex-col items-center gap-4 md:flex-row  justify-between">
    <p className="text-gray-600  text-sm">Copyright © {new Date().getFullYear()} codetutorbd.com</p>
    <p className="text-gray-600 text-sm">Created by Shanmugavel</p>
</div>
</div>

    </footer>
  )
}

export default FooterSection