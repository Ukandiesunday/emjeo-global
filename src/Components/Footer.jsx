import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-fit flex flex-col  text-white justify-between gap-[50px] md:flex-row px-[40px] py-[40px]">
      <div className="text-white md:max-w-[300px]">
        <h2 className="text-white font-bold">About Us </h2>

        <p className="pt-3 ">
          Deals on all kinds of building materials, sales and supplies. Such
          cement, rods , nails , paints, zinc, aluminium, sand, granite etc.
          General contracts and services. Such as project manager and
          supervision. Project execution from starting stage to finishing stage.
          Consultancy etc
        </p>
      </div>

      <div>
        <h2 className="text-white font-bold">Contact Us </h2>
        <p className="pt-3">
          75A ABA EKPARAKWA Road, ikot Inyang abia. <br /> Ukanafun LGA,
          Akwa Ibom state .
        </p>
      </div>
    </div>
  );
};

export default Footer;
