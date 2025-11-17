"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export enum FontSize {
  H1,
  H2,
  H3,
  H4,
  H5,
}

export function LettersPullUp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={inView ? "animate" : { opacity: 0, x: -20 }}
          custom={i}
          viewport={{ once: false, amount: 0.3 }}
          className={cn(
            "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
            className
          )}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
