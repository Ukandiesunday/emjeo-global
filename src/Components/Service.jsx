import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="px-[30px] py-[50px]">
      <h2 className="text-[35px] font-bold capitalize pb-2">
        Our goods & services
      </h2>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <Image
            src={"/images/emjosand.jpeg"}
            alt="service"
            height={200}
            width={400}
            className="rounded-lg"
          />

          <p className="pt-5">
            Deals on all kinds of sand for building and construction. All
            delivered to your door steps
          </p>
        </div>
        <div>
          <Image
            src={"/images/emjo-rods.jpeg"}
            alt="service"
            height={200}
            width={400}
            className="rounded-lg"
          />
          <p className="pt-5">
            Deals on all kinds of iron rods of different sizes. All ship to your
            site at affordable rates
          </p>
        </div>

        <div>
          <Image
            src={"/images/emjo.jpeg"}
            alt="service"
            height={400}
            width={400}
            className="rounded-lg"
          />
          <p className="pt-5">Leasing of building equipments</p>
        </div>

        <div>
          <Image
            src={"/images/cemet.jpeg"}
            alt="service"
            height={400}
            width={400}
            className="rounded-lg"
          />
          <p className="pt-5">
            Deals on all kinds of cements, such as superset, Dangote, Bua,
            unicem. All ship to your site at affordable rates.
          </p>
        </div>
        <div>
          <Image
            src={"/images/tools.jpeg"}
            alt="service"
            height={400}
            width={400}
            className="rounded-lg"
          />
          <p className="pt-5">Leasing of building equipments</p>
        </div>
        <div>
          <Image
            src={"/images/zinc.jpeg"}
            alt="service"
            height={400}
            width={400}
            className="rounded-lg"
          />
          <p className="pt-5">
            Deals on all kinds roofing sheets, such as Nigerian Zinc, Cameroon
            different colours, Aluminium sheet, long span, metro tiles , step
            tile, Metcopo, Zinc Nail. All kinds of Nails. Wood , and carpentry
            service, wood treatment,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
