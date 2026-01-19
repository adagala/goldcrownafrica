"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const WhatsApp: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000); // 15 seconds delay for a less intrusive feel

    return () => clearTimeout(timer);
  }, []);

  if (pathname.startsWith("/blog")) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass rounded-3xl shadow-2xl p-8 w-full max-w-sm relative space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex items-center space-x-3">
                <div className="bg-gold-500 p-2 rounded-xl">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.012l-.582 2.128 2.183-.573c.678.371 1.488.596 2.327.597h.028c3.12 0 5.656-2.537 5.657-5.657 0-1.512-.588-2.933-1.657-4.002-1.069-1.07-2.491-1.659-4.003-1.659h-.01a5.619 5.619 0 00-3.192 1.003z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
                    Let&apos;s Converse
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our team is here to help.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                Have a question about our mineral sourcing or investment
                opportunities? Connect with us on WhatsApp for a direct
                consultation.
              </p>

              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  href="https://wa.me/254712832436"
                  target="_blank"
                  className="w-full py-3 bg-gold-600 text-white rounded-xl font-medium text-center hover:bg-gold-500 transition-all shadow-lg shadow-gold-600/20 active:scale-95"
                >
                  Message on WhatsApp
                </Link>
                <button
                  className="w-full py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-gray-700 dark:hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gold-600 p-3.5 rounded-2xl shadow-xl shadow-gold-600/30 hover:bg-gold-500 transition-all group relative"
          aria-label="Contact on WhatsApp"
        >
          <div className="absolute inset-0 bg-gold-400 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <svg
            className="w-8 h-8 text-white relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        </button>
      </motion.div>
    </>
  );
};

export default WhatsApp;
