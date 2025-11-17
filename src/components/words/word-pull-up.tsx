"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

export function WordsPullUp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  return (
    <div className="flex ">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={inView ? "animate" : { opacity: 0, x: -20 }}
          custom={i}
          className={cn(
            "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
            "pr-2",
            className
          )}
        >
          {current == "" ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
