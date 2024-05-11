import Image from "next/image";
import React from "react";
import Container from "./container";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="">
              <Mark>Gold Trading</Mark>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                All our operations are licenced for mining, Purchase and export
                for the countries of origin by the local legal and governmental
                authorities. We are Mining and purchasing Rough Gold in several
                localities in Western and Eastern Africa. Gold is purchased in
                several forms as sand, dust, nugget, bars and ingots.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="">
              <Mark>Diamonds Trading</Mark>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                We source Rough Diamonds from several sub-Saharan countries for
                further cutting and polishing in our manufactories and
                facilities for our client. Our deliveries are made under
                Kimberly protocol terms and conditions by our licensed
                companies. Our gemologists are ready to examine and sort the
                rough stones according to the usual standards.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="">
              <Mark>Copper Cathode Trading</Mark>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                We offer LME non-registered production of DRC and Zambia
                refineries under specific terms and conditions. Cathodes are
                sold including full range of services door to door and we can
                satisfy only limited sector of buyers as we are obligated to
                refineries to support them with the copper ore and finance their
                production.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-xl font-semibold text-gold-800 bg-gold-100 rounded-md ring-gold-100 ring-4 dark:ring-gold-900 dark:bg-gold-900 dark:text-gold-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
