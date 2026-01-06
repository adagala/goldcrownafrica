import React from "react";
import Image from "next/image";
import Link from "next/link";

function WhatsApp() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white rounded-2xl shadow-lg px-8 py-7 w-80 relative animate-fadeIn space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 font-black text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="text-gold-600 font-bold text-lg">
              Let&apos;s Converse
            </div>
            <div className="text-gray-600">Contact us on WhatsApp.</div>
            <div className="flex gap-2">
              <Link
                className="px-4 py-1 bg-teal-500 rounded-lg"
                href="https://wa.me/254712832436"
                target="_blank"
              >
                Connect
              </Link>
              <button
                className="px-4 py-1 border rounded-lg bg-white text-trueGray-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-5 md:bottom-8 right-5 md:right-8">
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp Logo"
          width="64"
          height="64"
          className="w-12 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </>
  );
}

export default WhatsApp;
