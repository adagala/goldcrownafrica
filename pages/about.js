import Head from "next/head";
import Navbar from "../components/navbar";

import { benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";

import benefitTwoImg from "../public/img/benefit-two.png";

const About = () => {
  const data = {
    title: "About Us",
    desc: (
      <div>
        <div className="my-5">
          Our company is oriented to geology applications in mining sector in
          Sub Sahara part of Africa Continent.
        </div>
        <div className="my-5">
          Experience and our know-how we collect during the last 30 years. We
          provide full range of services to our clients and partners. Our
          management is based on highly skilled professionals. Most of our top
          managers are experts and European citizens. We employ highly educated
          and trustworthy local managers. In special case we, the best are even
          in managing positions. All our operations are based on direct
          connection to local mining and processing companies and individuals.
          All of them know us from the very bottom line when we provide them
          with start up or reinvestment services from survey, exploration and
          mining services to trading operations secured via Escrow Account in
          Nairobi Republic of Kenya.
        </div>
        <div className="my-5">
          Our client investors and partners are our families, the range of
          services are doors to doors secured by own special force to protect
          funds, property and life. Hope you will recognize us as valuable
          partner for your business soon. In case of any necessity contact us
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
          content="Gold Crown Africa is a landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <SectionTitle
        pretitle="Gold Crown Africa Benefits"
        title=" Why should you use this landing page">
        Gold Crown Africa is a landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS.
      </SectionTitle> */}
      <Benefits imgPos="right" data={data} />
      <Footer />
    </>
  );
};

export default About;
