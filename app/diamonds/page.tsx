import { Metadata } from "next";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import firstImg from "../../public/img/2.jpeg";
import secondImg from "../../public/img/12.jpeg";
import thirdImg from "../../public/img/6.jpeg";
import { BenefitData } from "../../components/data";

export const metadata: Metadata = {
  title: "Polished & Collectible Diamonds | Gold Crown Africa",
  description:
    "Trading certified polished diamonds and rare collectible stones with expert sorting, evaluation, and international certification.",
  openGraph: {
    type: "website",
    siteName: "Gold Crown Africa",
    url: "https://goldcrownafrica.com/diamonds",
    title: "Polished & Collectible Diamonds | Gold Crown Africa",
    description:
      "Certified polished diamonds and rare collectible stones with expert sorting and evaluation.",
    images: [
      {
        url: "https://goldcrownafrica.com/img/2.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polished & Collectible Diamonds | Gold Crown Africa",
    description: "Certified polished diamonds and rare collectible stones.",
    images: ["https://goldcrownafrica.com/img/2.jpeg"],
  },
};

export default function Diamonds() {
  const topSection: BenefitData = {
    title: "Polished Diamonds",
    desc: (
      <div>
        <div className="my-5">
          We are trading polished diamond, certified by recognized Certification
          Authorities as GIA, GLI, HRD and other. Our client choice from our
          stock held in Prague, Czech Republic, Antwerp Belgium and Ramat Gan
          Israel.
        </div>
      </div>
    ),
    image: firstImg,
    bullets: [],
  };
  const middleSection: BenefitData = {
    title: "Collectibles",
    desc: (
      <div>
        <div className="my-5">
          Collectible and special rare diamond, rough or polished are sold under
          special management using our connection to Gem Tech Lab Geneva
          Swizerland and its top management upon special appraisal, using Escrow
          Account at Viamatcare in Kloten Swizerland or their Geneva deposit
          facility. Conditions are based on special database of collectors and
          special investors looking for rare occasional investments. We are also
          co-operating with Christies and Sotheby Auction Hall to place the
          collectibles into Auction.
        </div>
        <div className="my-5">Incase of any inquiry contact us.</div>
      </div>
    ),
    image: secondImg,
    bullets: [],
  };
  const bottomSection: BenefitData = {
    title: "Diamond Sorting & Evaluation",
    desc: (
      <div>
        <div className="my-5">
          The first sorting is made at the time of outcome from the mine or at
          the time of purchase. Results are mostly double checked by independent
          gemology expert. In case we export rough diamond to our cutting and
          polishing facility in Antwerp the second sorting and evaluation is
          made there. If the stones have to be delivered to our clients, the
          next sorting and evaluation is made at the country of origin and the
          buyers should come with their gemology expert. After the price
          settlement is done, the stones are certified by the KP Officers of the
          country of origin for further export and our management arranges the
          export formalities. For sorting and evaluation we use usual
          gemological equipments.
        </div>
      </div>
    ),
    image: thirdImg,
    bullets: [],
  };

  return (
    <>
      <Benefits data={topSection} />
      <Benefits imgPos="right" data={middleSection} />
      <Benefits data={bottomSection} />
      <Footer />
    </>
  );
}
