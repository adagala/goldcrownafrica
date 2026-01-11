import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between w-full max-w-5xl gap-5 mx-auto text-white bg-gold-600 px-8 py-10 lg:px-16 lg:py-16 lg:flex-nowrap rounded-3xl shadow-xl shadow-gold-600/20 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

        <div className="flex-grow text-center lg:text-left relative z-10">
          <h2 className="text-3xl font-serif font-bold lg:text-4xl tracking-tight">
            Elevate Your Mineral Portfolio
          </h2>
          <p className="mt-3 text-lg font-medium text-white/90 lg:text-xl font-sans max-w-xl">
            Partner with the most trusted sourcing experts in Africa. Exceptional quality, ethically delivered.
          </p>
        </div>

        <div className="flex-shrink-0 w-full text-center lg:w-auto relative z-10">
          <a
            href="/contact"
            className="inline-block py-4 px-10 text-lg font-bold text-center text-gold-600 bg-white rounded-xl transition-all hover:bg-gray-50 hover:shadow-lg active:scale-95"
          >
            Start Consultation
          </a>
        </div>
      </motion.div>
    </Container>
  );
};

export default Cta;