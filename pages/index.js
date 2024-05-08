import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
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
      <Hero />
      <SectionTitle
        pretitle="Gold Crown Africa Benefits"
        title=" Why should you use this landing page"
      >
        Gold Crown Africa is a landing page & marketing website template for
        startups and indie projects. Its built with Next.js & TailwindCSS.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <SectionTitle pretitle="" title="">
        <div>
          We recognise the importance of developing our responsible mining
          practices for the benefit of our stakeholder group as a whole. We aim
          to operate through acting responsibly in relation to our people, the
          environment and the communities in which we operate is central to
          achieving our objectives.
        </div>
        <div className="mt-8">
          Our sustainability practices are focused on those areas that are
          material to our business and operations, these being community
          relations, employees, environment, health and safety, and security and
          human rights.
        </div>
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Our Featured"
        title="Mineral Trading Products"
      ></SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
