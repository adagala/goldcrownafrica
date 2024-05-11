import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";

import Benefits from "../components/benefits";
import Footer from "../components/footer";

import firstServiceImg from "../public/img/5.jpeg";
import secondServiceImg from "../public/img/3.jpeg";
import thirdServiceImg from "../public/img/17.jpeg";
import fourthServiceImg from "../public/img/16.jpeg";
import fifthServiceImg from "../public/img/10.jpeg";
import sixthServiceImg from "../public/img/7.jpeg";

const About = () => {
  const firstService = {
    title: "Safety Services",
    desc: (
      <div>
        <div className="my-5">
          For physical safety we are under protection by Maritime SVS Squad, for
          geopolitical risk management there are no real instruments except
          adequate behaviour to avoid any conflict .sometimes it does not help
          and we have to use another mode of safety services in cooperation
          Governmental Army troops or National Police Squads .Sometimes its even
          hard to recognize who is a real police officer on the road, sometimes
          even rebels wear regular army uniforms and many even the higher ranked
          officers are rebel troops members or leaders.This all we have to
          recognize before we step in contrary position and be sure we know how
          to handle the crisis situation right the way.There is not much to
          present ,countries in Africa are mostly underdeveloped and citizens
          are upset watching their leaders making billions of dollars leaving
          own nation under pseudo-development that in fact means poverty.
        </div>
      </div>
    ),
    image: firstServiceImg,
    bullets: [],
  };
  const secondService = {
    title: "Assaying Services",
    desc: (
      <div>
        <div className="my-5">
          In collaboration with MM Laboratories Solution Ltd our JV partners ,we
          are able to offer a full spectrum of smelting services to customers
          across the sub-saharan region. We specialise in smelting gold through
          Electric Induction Furnace. This environmentally friendly technique
          enables us to convert large lots of gold and into grain, or smaller
          category bars of various sizes and purity levels. Our expertise allows
          us to convert gold according to the client's request, while assuring
          the highest degree of quality and accuracy with the shortest turn
          around times at a very competitive premium .Gold is processed directly
          at MM Laboratory premises and whatever came into Lab never leave
          stronghold except in the case of export.All rough gold deliveries are
          melted and tested in whole amount of consignment .Bars are examined
          and marked ,saved in our strongholds and exported by our agents
          directly to refineries.We are currently using mobile or portable labs
          that offer full-scale assaying services on site and also established
          or permanent labs that use the traditional Fire assay method ,also
          known as the cupellation method to determine the concentration of
          gold.The technique uses Titration and Inductive Coupled Plasma or ICP
          to determine the purity of metals, with very high precision. X-ray
          Fluorescence is used to determine the elements present inside the
          alloys. ICP is also used to verify the purity of scrap gold that
          cannot be detected by fire assay due to influence of contamination
          group elements. It is also used to cross check the final product and
          results to determine chemical concentration and company waste chemical
          specifications for disposal or reuse.Our services are open to anybody
          who want to be sure his goods are valuable as declared by its
          supply.To find more about our gold smelting and assaying services
          please contact us.
        </div>
        <div className="my-5">Incase of any inquiry contact us.</div>
      </div>
    ),
    image: secondServiceImg,
    bullets: [],
  };
  const thirdService = {
    title: "Mineral Mining",
    desc: (
      <div>
        <div className="my-5">
          The actual mining projects are for copper Ore, Gold and Diamond
          mining, there are several activities we do indirectly as we serve
          other mining facilities on expertise level and provide them with the
          mining tools and equipment support.
        </div>
        <div className="my-5">
          The operations are not large, we are mostly in venture agreement with
          local communities and mining associations. Mined rough metal is then
          processed and after processing exported to be sold for reasonable
          market price.
        </div>
        <div className="my-5">
          Our prices are discounted, but not dreams coming from internet
          business World wide. As we find most of those prices unrealistic, we
          don’t work with every body, but have own production and do not argue
          with chain of brokers and intermediaries. Mining is the only
          insurance; we will always have direct access to rough materials. All
          other experiences with mining substitution failed very soon.
        </div>
      </div>
    ),
    image: thirdServiceImg,
    bullets: [],
  };

  const fourthService = {
    title: "Refining Services",
    desc: (
      <div>
        <div className="my-5">
          In special occasions, we provide our clients with refining services,
          but limited by installed and explored capacity of each refinery we are
          in partnership or under contract. Refining services we use to provide
          in Tanzania are not available for now. We are in a process to
          establish a new refinery in Nairobi Republic of Kenya. Our present
          refining partners are in UAE- Dubai and Fujairah.
        </div>
        <div className="my-5">
          In case we deliver to those refineries, we have to be sure the quality
          presented to us by Gold owners is accurate and this is why we do not
          deliver without sampling and testing of the whole consignment volume.
        </div>
        <div className="my-5">
          Refining services for copper ore traders are available from time to
          time, but not permanently as the capacity are tight.
        </div>
      </div>
    ),
    image: fourthServiceImg,
    bullets: [],
  };
  const fifthService = {
    title: "Global Logistics",
    desc: (
      <div>
        <div className="my-5">
          All goods we export from the countries of origin we provide with full
          export documentations . The usual term for full export documentation
          takes 4-5days.We do not let any stranger touch our goods till end up
          to the final destination. Materials are certified by MM Laboratories,
          exported by our companies and secured by our security squad.
        </div>
        <div className="my-5">
          For some exceptional occasions mostly on our client requests we use
          Malca Amit or Brinks Agencies for transportation and G4S for security.
        </div>
        <div className="my-5">
          Export from port of loading is secured by our arrangements with Sea
          Port Authorities , Export using Airfreight is arranged by valuable
          Cargo Department Officers at the International Air port and secured by
          our licensed inspectors.
        </div>
        <div className="my-5">
          Ministries and their authorized and licensed agencies always manage
          all documents without over handling our cargo to any custody.
        </div>
        <div className="my-5">
          For import and export in UAE, our venture partner IGT LLC is appointed
          to contract and manage all issues for processing and smooth export to
          final destination.
        </div>
        <div className="my-5">
          Our management and security squad presence make processes always
          transparent to our clients agents and us. Processes are made always by
          our management and security squad presence.
        </div>
      </div>
    ),
    image: fifthServiceImg,
    bullets: [],
  };
  const sixthService = {
    title: "Security & Storage",
    desc: (
      <div>
        <div className="my-5">
          Our operation requires a specific measure to take care of our funding,
          safe transportation, personal security assistance, valuable cargo
          deliveries, special safe keeping and handling at the International
          Airport. Our security squad is recruited from former military and
          paramilitary troops knowing well their jobs. All the security issues
          are under maritime SVS Ltd, our JV partner management. All the details
          you may find at{" "}
          <Link
            target="_blank"
            href="https://www.svsrisk.com"
            className="w-full px-4 py-2 -ml-4 text-gold-600 rounded-md hover:text-gold-500 focus:text-gold-500 focus:bg-gold-100 focus:outline-none"
          >
            www.svsrisk.com
          </Link>
        </div>
      </div>
    ),
    image: sixthServiceImg,
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Benefits data={firstService} />
      <Benefits imgPos="right" data={secondService} />
      <Benefits data={thirdService} />
      <Benefits imgPos="right" data={fourthService} />
      <Benefits data={fifthService} />
      <Benefits imgPos="right" data={sixthService} />
      <Footer />
    </>
  );
};

export default About;
