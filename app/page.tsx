import { Metadata } from "next";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

export const metadata: Metadata = {
  title: "Gold Crown Africa | Premium Mineral Sourcing & Services",
  description:
    "Gold Crown Africa is the leading mineral sourcing company in Africa, specializing in gold, diamonds, and copper cathodes with ethical practices and professional services.",
  openGraph: {
    type: "website",
    siteName: "Gold Crown Africa",
    url: "https://goldcrownafricagroup.com/",
    title: "Gold Crown Africa | Premium Mineral Sourcing & Services",
    description:
      "Leading mineral sourcing company in Africa, specializing in gold, diamonds, and copper cathodes with ethical practices.",
    images: [
      {
        url: "https://goldcrownafricagroup.com/img/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Crown Africa | Premium Mineral Sourcing & Services",
    description:
      "Leading mineral sourcing company in Africa specializing in gold, diamonds, and copper cathodes.",
    images: ["https://goldcrownafricagroup.com/img/logo.png"],
  },
};

export default function Home() {
  return (
    <>
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
}
