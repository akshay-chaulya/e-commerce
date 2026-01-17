import React from "react";
import Title from "@/components/common/Title";
import { assets } from "@/assets/assets";
import NewsletterBox from "@/components/common/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1="Contact" text2="Us" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-120" alt="" />
        <div className="flex flex-col justify-center gap-6 items-start text-gray-500">
          <b className="text-gray-600 font-semibold text-xl">OUR STORE</b>
          <p>
            54709 Willms Station
            <br />
             Suite 350, Washington, USA</p>
          <p>
            <span>Tel: (415) 555‑0132</span>
            <br />
            <span>Email: akshay.officalhelp@gmail.com</span>
          </p>

          <b className="text-gray-600 font-semibold text-xl">CAREERS FOREVER</b>
          <p>Learn more about our teams and job openings.</p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 text-black">Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default Contact;
