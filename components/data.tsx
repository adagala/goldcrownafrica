import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/1.jpeg";
import benefitTwoImg from "../public/img/2.jpeg";
import benefitThreeImg from "../public/img/3.jpeg";
import React from "react";
import { StaticImageData } from "next/image";

interface BenefitBullet {
  title: string;
  desc: string;
  icon: any;
}

interface BenefitData {
  title: string;
  desc: string | React.ReactNode;
  image: StaticImageData;
  bullets: BenefitBullet[];
}

const benefitOne: BenefitData = {
  title: "About Us",
  desc: (
    <div>
      Our company is oriented to geology applications in mining sector in Sub
      Sahara part of Africa Continent.{" "}
      <div className="mt-2">
        Our experience and know-how has been collected over the last 30 years.
        We provide full range of services to our clients and partners. Our
        management is based on highly skilled professionals. Most of our top
        managers are experts and european citizens
      </div>
    </div>
  ),
  image: benefitOneImg,
  bullets: [],
};

const benefitTwo: BenefitData = {
  title: "Our Statement",
  desc: `The mission of Gold Crown Africa is to create value for all of our stakeholders through responsible mining. Management strives to act as a responsible corporate citizen by building projects together with the communities near our operations and by committing to using best available techniques as we carry out our actions. We aim to achieve benefits for all parties involved and to contribute to the sustainability and improved livelihoods of the communities in which we operate. Mining responsibly defines who we are as a company and drives our way of doing business. An organization  is only as good as the people behind it and the people behind Gold Crown Africa from manufacturing to management make the difference. We understand that your success is our success.`,
  image: benefitTwoImg,
  bullets: [],
};

const benefitThree: BenefitData = {
  title: "Sustainability",
  desc: `One of our strategic pillars is to incorporate sustainability into business by building economic, social and environmental legacies and mitigating the impacts of its operations. Therefore, we seek to build strong and lasting relationship with our stakeholders, invest in mitigating the effects of our activities, work with high ethical standards, have transparent management and actively contribute to advances related to the environment, biodiversity and sustainable development.`,
  image: benefitThreeImg,
  bullets: [],
};

export { benefitOne, benefitTwo, benefitThree };
export type { BenefitData, BenefitBullet };
