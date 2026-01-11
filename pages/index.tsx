import Head from "next/head";
import Hero from "../components/hero";
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
        <title>Gold Crown Africa | Premium Mineral Sourcing & Services</title>
        <meta
          name="description"
          content="Gold Crown Africa is the leading mineral sourcing company in Africa, specializing in gold, diamonds, and copper cathodes with ethical practices and professional services."
        />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gold Crown Africa" />
        <meta property="og:url" content="https://goldcrownafrica.com/" />
        <meta property="og:title" content="Gold Crown Africa | Premium Mineral Sourcing & Services" />
        <meta property="og:description" content="Leading mineral sourcing company in Africa, specializing in gold, diamonds, and copper cathodes with ethical practices." />
        <meta property="og:image" content="https://goldcrownafrica.com/img/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gold Crown Africa | Premium Mineral Sourcing & Services" />
        <meta name="twitter:description" content="Leading mineral sourcing company in Africa specializing in gold, diamonds, and copper cathodes." />
        <meta name="twitter:image" content="https://goldcrownafrica.com/img/logo.png" />

        <link rel="icon" href="/favicon.png?v=0.0.1" />
      </Head>

      <Hero />
      <SectionTitle
        pretitle="Gold Crown Africa Benefits"
        title=" Why should you should trust us"
      >
        We deal with refining services, assayings services, security Services,
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
          relations, employees, environment, health and safety, security and
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
