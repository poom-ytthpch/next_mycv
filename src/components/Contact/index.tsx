"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoMail, IoCall, IoLocation } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa";

export default function Contact() {
  const refHeader = useRef(null);
  const refCard = useRef(null);

  const headerInView = useInView(refHeader, { margin: "-10% 0px -10% 0px" });
  const cardInView = useInView(refCard, { margin: "-10% 0px -10% 0px" });

  return (
    <div className="w-full py-20 px-6 flex flex-col items-center">
      <motion.h2
        ref={refHeader}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.45 }}
        className="text-4xl font-bold text-center mb-10 text-[light-dark(var(--white-text),var(--dark-text))]"
      >
        CONTACT
      </motion.h2>

      <motion.div
        ref={refCard}
        initial={{ opacity: 0, y: 40 }}
        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-xl p-8 rounded-3xl shadow-xl bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/5 flex flex-col gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
            <IoMail className="md:text-2xl" />
          </div>
          <span className="md:text-lg font-medium break-all">
            ch.yutthapichai@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
            <IoCall className="md:text-2xl" />
          </div>
          <span className="md:text-lg  font-medium">+66 80-208-4855</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow flex items-center justify-center">
            <IoLocation className="md:text-2xl" />
          </div>
          <span className="md:text-lg  font-medium">
            1198/562 Origin Play Sri Udom Station Bangkok, Thailand
          </span>
        </div>

        <div className="flex gap-5 mt-4 justify-center">
          <a href="https://github.com/poom-ytthpch" target="_blank">
            <FaGithub
              size={28}
              className="hover:scale-125 transition-transform duration-200"
            />
          </a>

          <a href="https://linkedin.com/in/poom-ytthpch" target="_blank">
            <FaLinkedin
              size={28}
              className="hover:text-blue-600 hover:scale-125 transition"
            />
          </a>

          <a href="#" target="_blank">
            <FaLine
              size={28}
              className="hover:text-green-500 hover:scale-125 transition"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
