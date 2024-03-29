"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            Creative Web Developer
          </h1>
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and enthusiasm for code, my
            portfolio showcases the diversity in my projects that reflect my
            passion to work on new ideeas.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-4 ring-1 ring-black rounded-lg bg-black text-white">
              View My Work
            </button>
            <button className="p-4 ring-1 ring-black rounded-lg">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
