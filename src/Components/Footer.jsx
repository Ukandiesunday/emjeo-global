import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black h-fit flex flex-col  text-white justify-between gap-[50px] md:flex-row px-[30px] py-[40px]">
      <div className="text-white md:max-w-[300px]">
        <h2 className="text-white font-bold">About Us </h2>

        <p className="pt-3 text-[14px] leading-[30px]">
          Deals on all kinds of building materials, sales and supplies. Such as
          cement, rods , nails , paints, wood, zinc, aluminium, sand, granite
          etc. General contracts and services. Such as project manager and
          supervision. Project execution from starting stage to finishing stage.
          Consultancy etc
        </p>
      </div>

      <div className="space-y-5">
        <h2 className="text-white font-bold">Contact Us </h2>
        <p className="pt-3 text-[14px] leading-[30px]">
          75A ABA EKPARAKWA Road, ikot Inyang abia. <br /> Ukanafun LGA,
          Akwa Ibom state .
        </p>
        <p>08140875502/09025426469</p>
        <a href="mailto:emjoeglobalenterprisesandservi@gmail.com">
          emjoeglobalenterprisesandservi@gmail.com
        </a>
        <div className="flex space-x-5 mt-7">
          <a href="https://www.facebook.com/share/16QoXMCNb5/" target="_blank">
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a href="https://wa.me/2348140875502" target="_blank">
            <BsWhatsapp className="text-green-500 text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
