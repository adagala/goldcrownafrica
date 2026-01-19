import { Metadata } from "next";
import SectionTitle from "../../components/sectionTitle";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import Footer from "../../components/footer";
import Container from "../../components/container";

export const metadata: Metadata = {
  title: "Contact Us | Gold Crown Africa",
  description:
    "Get in touch with Gold Crown Africa's headquarters in Nairobi for inquiries about mineral sourcing, refining services, or partnerships.",
  openGraph: {
    type: "website",
    siteName: "Gold Crown Africa",
    url: "https://goldcrownafrica.com/contact",
    title: "Contact Us | Gold Crown Africa",
    description:
      "Contact our Nairobi headquarters for inquiries about mineral sourcing and services.",
    images: [
      {
        url: "https://goldcrownafrica.com/img/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Gold Crown Africa",
    description:
      "Contact our Nairobi headquarters for inquiries about mineral sourcing and services.",
    images: ["https://goldcrownafrica.com/img/logo.png"],
  },
};

function Mark(props: { children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="flex gap-1 text-gold-800 bg-gold-100 rounded-md ring-gold-100 ring-4 dark:ring-gold-900 dark:bg-gold-900 dark:text-gold-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default function Contact() {
  return (
    <>
      <SectionTitle pretitle="Contact Us" title="Visit Our Location">
        Anyday Working Hours
      </SectionTitle>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <div className="text-2xl leading-normal">
                <Mark>
                  <MapPinIcon className="h-8 w-8 my-1" />
                  Headquarters
                </Mark>
              </div>
              <p className="text-xl leading-normal mt-2">
                Kitisuru Peponi Road
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <div className="text-2xl leading-normal">
                <Mark>
                  <PhoneArrowDownLeftIcon className="h-8 w-8 my-1" />
                  Phone
                </Mark>
              </div>
              <p className="text-xl leading-normal mt-2">+254 712 832 436</p>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <div className="text-2xl leading-normal">
                <Mark>
                  <EnvelopeIcon className="h-8 w-8 my-1" />
                  Mail
                </Mark>
              </div>
              <p className="text-xl leading-normal mt-2">
                info@goldcrownafrica.com
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31911.3294051088!2d36.800147!3d-1.218449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17e27fc4fde3%3A0x1464d3dd2e44a14e!2sKitisuru%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1714734702481!5m2!1sen!2sus"
            width="800"
            height="600"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
      <Footer />
    </>
  );
}
