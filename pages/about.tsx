import Head from "next/head";
import Navbar from "../components/navbar";

import Benefits from "../components/benefits";
import Footer from "../components/footer";

import benefitTwoImg from "../public/img/14.jpeg";

import { BenefitData } from "../components/data";

const About = () => {
  const data: BenefitData = {
    title: "About Us",
    desc: (
      <div>
        <div className="my-5">
          Our company is oriented to geology applications in mining sector in
          Sub-Saharan part of the African continent.
        </div>
        <div className="my-5">
          Our experience and know-how has been collected over the last 30 years.
          We provide full range of services to our clients and partners. Our
          management is based on highly skilled professionals. Most of our top
          managers are experts and european citizens. We employ highly educated
          and trustworthy local managers. In special cases, the best are even in
          managing positions. All our operations are based on direct connections
          to local mining and processing companies and individuals. All of them
          know us from the very bottom line when we provide them with start up
          or reinvestment services from survey, exploration and mining services
          to trading operations secured via Escrow Account in Nairobi, Republic
          of Kenya.
        </div>
        <div className="my-5">
          Our client investors and partners are our families. The range of
          services are doors to doors secured by own special force to protect
          funds, property and life. Hope you will recognize us as valuable
          partner for your business soon. In case of any necessity, contact us.
        </div>
      </div>
    ),
    image: benefitTwoImg,
    bullets: [],
  };
  return (
    <>
      <Head>
        <title>Gold Crown Africa</title>
        <meta
          name="description"
          content="Gold Crown Africa is the best mineral sourcing company in africa that deals with gold, rough diamonds and copper cathodes. We also deal with refining services, Assayings services, Security Services, mineral mining etc"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Benefits imgPos="right" data={data} />
      <Footer />
    </>
  );
};

export default About;
