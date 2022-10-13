import React from "react";
import { footerData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { about, links, program, newsletter } = footerData;

  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <motion.div className="flex-1 flex flex-col gap-y-6" variants={fadeIn("up")}>
            <div className="font-primary text-xl uppercase tracking-[0.08em]">{about.title}</div>
            <div className="leading-relaxed text-[#dbdbdb]">{about.subtitle}</div>
            <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
              <div className="flex items-center gap-x-[10px]">
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          <motion.div className="flex-1 flex flex-col xl:items-center" variants={fadeIn("up")}>
            <div>
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{links.title}</div>
              <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
                {links.items.map((item, index) => {
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a href={href} className="hover:text-white transition">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
          <motion.div className="flex-1" variants={fadeIn("up")}>
            <div className="font-primary text-xl uppercase tracking-[0.08em mb-6">{program.title}</div>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </motion.div>
          <motion.div className="flex-1" variants={fadeIn("up")}>
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">{newsletter.title}</div>
            <div className="leading-relaxed mb-9 text-[#dbdbdb]">{newsletter.subtitle}</div>
            <form className="flex justify-between items-start border-b border-[#b6b6b6]">
              <input
                className="outline-none placeholder:text-base
                 italic placeholder:capitalize bg-transparent pb-2"
                placeholder={newsletter.form.placeholder}
                type="text"
              />
              <button className="text-2xl cursor-pointer" type="submit">
                {newsletter.form.icon}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
