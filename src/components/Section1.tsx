'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Section1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      href: "https://www.instagram.com/nattyfancy.co/",
      label: "Instagram",
      logo: "/IG.png",
      className: "rounded-md group-hover:rotate-12 transition-transform duration-300"
    },
    {
      href: "https://wa.me/+6283108871532",
      label: "Whatsapp 1",
      logo: "/WA.png",
      className: "rounded-md group-hover:-rotate-12 transition-transform duration-300"
    },
    {
      href: "https://wa.me/+6287886885788",
      label: "Whatsapp 2",
      logo: "/WA.png",
      className: "rounded-md group-hover:rotate-12 transition-transform duration-300"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <motion.div 
        className="flex flex-col text-center py-5 gap-3"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="relative">
          <Image
            src="/NattyFancy.jpg"
            priority
            alt="logo"
            width={200}
            height={200}
            className="rounded-full ring-4 ring-black shadow-md"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-0"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeatType: "reverse" }}
          />
        </div>
        <motion.p 
          className="text-black text-4xl font-bold py-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Natty Fancy
        </motion.p>
      </motion.div>
      <motion.div 
        className="w-full max-w-sm flex flex-col items-center text-center gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex group items-center w-[280px] py-2 px-6 text-white bg-gradient-to-r from-pink-800 to-red-800 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:from-pink-700 hover:to-red-700"
            >
              <Image src={link.logo} alt="logo" width={50} height={50} className={link.className} />
              <span className="flex-1 text-lg font-medium transition-transform duration-300 group-hover:translate-x-2">{link.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Follow us for the latest updates and offers!</p>
      </motion.div>
    </motion.div>
  );
}

