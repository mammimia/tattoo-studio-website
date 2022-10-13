import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CircularItem from "./CircularItem";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <motion.section
      ref={ref}
      className="section font-primary"
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <CircularItem inView={inView} title="Full Body Tattoo" value={90} />
          <CircularItem inView={inView} title="Safely Piercing" value={80} />
          <CircularItem inView={inView} title="Full Color Tattoo" value={75} />
          <CircularItem inView={inView} title="Temporary Tattoo" value={95} />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
