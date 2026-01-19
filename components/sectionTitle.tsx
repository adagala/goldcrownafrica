"use client";

import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

interface SectionTitleProps {
  align?: "left" | "center";
  pretitle?: string;
  title?: string;
  children?: React.ReactNode;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-wider text-gold-600 uppercase"
        >
          {props.pretitle}
        </motion.div>
      )}

      {props.title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mt-3 text-3xl font-serif font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
        >
          {props.title}
        </motion.h2>
      )}

      {props.children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 font-sans"
        >
          {props.children}
        </motion.div>
      )}
    </Container>
  );
};

export default SectionTitle;
