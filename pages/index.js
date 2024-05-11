import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import diamondsImg from "../public/img/9.jpeg";

const Home = () => {
  return (
    <>
      <Head>
        <title>Gold Crown Africa</title>
        <meta
          name="description"
          content="Gold Crown Africa is the best mineral sourcing company in africa that deals with gold, rough diamonds and copper cathodes. We also deal with refining services, Assayings services, Security Services, mineral mining etc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Gold Crown Africa Benefits"
        title=" Why should you should trust us"
      >
        We deal with refining services, Assayings services, Security Services,
        mineral mining etc.
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
      <SectionTitle
        pretitle="Our Featured"
        title="Mineral Trading Products"
      ></SectionTitle>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
