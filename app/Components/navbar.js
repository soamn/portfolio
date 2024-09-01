"use client";
import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="  w-screen p-4  absolute top-[80%] text-white flex  gap-10 lg:gap-32 justify-center text-lg  "
      >
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
          href="/"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
          href="/Projects"
        >
          Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
          href="/Contact
        "
        >
          Contact
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
          href="https://soblogs-p8qizzoaq-soamns-projects.vercel.app/"
        >
          Blog
        </motion.a>
      </motion.nav>
    </div>
  );
};

export default Navbar;
