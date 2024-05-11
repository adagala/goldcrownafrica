import Head from "next/head";
import Navbar from "../components/navbar";

import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Container from "../components/container";

import firstImg from "../public/img/11.jpeg";
import secondImg from "../public/img/14.jpeg";
import thirdImg from "../public/img/13.jpeg";

const About = () => {
  const topSection = {
    title: "",
    desc: (
      <div>
        <div className="my-5">
          All our operations are licenced for mining, Purchase and export for
          the countries of origin by the local legal and governmental
          authorities. We are Mining and purchasing Rough Gold in several
          localities in Western and Eastern Africa. Gold is purchased in several
          forms as sand, dust, nugget, bars and ingots. The purchases are always
          made upon full consignment, smelting and quality specification using
          fire Assay, Cupellation, specific gravity determination and Digital
          XRF Scanner. After the quality determination, we pay using our Bank
          Accounts in Local Commercial banks. Whenever the payment is made, Our
          Esquire shall release the funds held on Escrow Account to re-charge
          our operational Accounts to be able to continue in purchases from
          local miners, communities and small scale mining associations.
        </div>
        <div className="my-5">
          {" "}
          Gold is purchased in several forms as sand, dust, nugget, bars and
          ingots. The purchases are always made upon full consignment, smelting
          and quality specification using fire Assay, Cupellation, specific
          gravity determination and Digital XRF Scanner.
        </div>
        <div>
          After the quality determination, we pay using our Bank Accounts in
          Local Commercial banks. Whenever the payment is made, Our Esquire
          shall release the funds held on Escrow Account to re-charge our
          operational Accounts to be able to continue in purchases from local
          miners, communities and small scale mining associations.
        </div>
      </div>
    ),
    image: firstImg,
    bullets: [],
  };
  const middleSection = {
    title: "",
    desc: (
      <div>
        <div className="my-5">
          We offer LME non-registered production of DRC and Zambia refineries
          under specific terms and conditions. Cathodes are sold including full
          range of services door to door and we can satisfy only limited sector
          of buyers as we are obligated to refineries to support them with the
          copper ore and finance their production. Whoever thinks we can do it
          without prepayments from our buyers is out of our possibilities.
        </div>
      </div>
    ),
    image: secondImg,
    bullets: [],
  };
  const bottomSection = {
    title: "",
    desc: (
      <div>
        <div className="my-5">
          We source Rough Diamonds from several sub-Saharan countries for
          further cutting and polishing in our manufactories and facilities for
          our client. Our deliveries are made under Kimberly protocol terms and
          conditions by our licensed companies. Our gemologists are ready to
          examine and sort the rough stones according to the usual standards.
          Stones are transported upon all the export legalization and Royal tees
          payments by Brinks, Malca Amit or their appointed and authorized
          agencies to the final Destinations. The final destinations are Antwerp
          Belgium and Ramat Gan Israel mostly.
        </div>
      </div>
    ),
    image: thirdImg,
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
      <Benefits data={topSection} />
      <Container className="text-lg lg:text-xl xl:text-xl">
        Escrow Account is held in Nairobi Republic of Kenya this is to make sure
        all the transactions are made in both parties safely and accurate.
        Whenever the Gold is purchased, we do the basic treatment for purity up
        to the actual location to deliver to MHM Refinery the highest possible
        quality. The sampling and testing is provided by MM laboratories
        management. We are now a couple of months using Dubai and Abu Dhabi UAE
        as the final destination for rough metals deliveries and refining
        processes made there is to all parties involved in trading satisfaction.
        The relationship with refineries is maintained by Inspired General
        Trading LLc in Dubai UAE and its top management. Export and import
        clearing and handling is fully under IGT control. For security purposes
        we are contracting G4Si Dubai. Refineries we cooperate with are in UAE
        International Free Zones. The details for possible suppliers are
        attached in our SPA draft.The details for possible investors willing and
        able to turn their money under short, middle and long term contractual
        conditions and profit on secured trading with precious metals are
        available please contact us.
      </Container>
      <Benefits imgPos="right" data={middleSection} />
      <Container className="text-lg lg:text-xl xl:text-xl">
        We are focused to buyers they are mostly end users , as there is very
        limited space for traders who cannot afford to pay the products in steps
        as described in our FCO. Cathodes products in DRC are after inspection
        in refinery warehouse loaded in on train or trucks and transported to
        Kapiri Mposhi to Tazara Train Station. They are inspected again. Using
        the Railway they arrive to Dar es Salaam preferable or Durban. They are
        discharged under our customs inspections directly at the shipping yard
        and after quality inspection, loaded into shipping containers.
        Containers are charged on the board. Cathodes produced in Zambia are
        transported from Refineries to the nearest Train Station and follow the
        same way as in case of cathodes from DRC origin. Part of production is
        ready to leave the warehouse in Lusaka, mostly Manica bonded warehouses
        or another destination in Zambia. The physical and quality control is on
        the highest level to protect our buyers interest and our good name. All
        the transactions are under supervision of our special Armored Squad. All
        the payments are made through Escrow Account in Nairobi Republic of
        Kenya
      </Container>
      <Benefits data={bottomSection} />
      <Footer />
    </>
  );
};

export default About;
