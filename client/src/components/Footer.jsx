import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer(){
    return(
        <div className="">
            <div className="py-6 px-4 font-bold bg-primary">
                <p className="font-heading text-light text-3xl">NutriFind</p>
            </div>
            <div className="py-6 px-4 bg-light-900 ">
                <p className="text-sm text-light font-body">Learn more about NutriFind</p>
            </div>
            <hr className="border-light-700"></hr>
            <div className="py-6 bg-light-900 grid grid-cols-2 font-body text-light text-sm">
                <div className="px-4">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>
                <div className="px-4">
                    <p>Contact NutriFind</p>
                    <p>Copyright</p>
                </div>
            </div>
            <div className="flex flex-row"></div>
        </div>
    )
}