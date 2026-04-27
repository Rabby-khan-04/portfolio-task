"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Link as SmoothScroll } from "react-scroll";

import logo from "@/../public/logo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 p-3"
    >
      <nav className="navbar flex items-center justify-between rounded-xl p-4">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} height={40} alt="logo" priority />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-3 lg:flex">
          <li>
            <Link href="/" className="nav__link">
              Home
            </Link>
          </li>

          <li>
            <SmoothScroll
              to="about"
              smooth
              offset={-80}
              duration={500}
              className="nav__link cursor-pointer"
            >
              About
            </SmoothScroll>
          </li>

          <li>
            <SmoothScroll
              to="portfolio"
              smooth
              offset={-80}
              duration={500}
              className="nav__link cursor-pointer"
            >
              Portfolio
            </SmoothScroll>
          </li>

          <li>
            <SmoothScroll
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="nav__link cursor-pointer"
            >
              Contact
            </SmoothScroll>
          </li>
        </ul>

        {/* Right Side */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <a
              href="https://github.com/Rabby-khan-04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-light transition-all duration-300 hover:text-primary" />
            </a>
          </li>

          <li>
            <a href="mailto:ajrabbyk72@gmail.com" className="btn__sm">
              Lets Work
            </a>
          </li>
        </ul>

        {/* Mobile Dropdown */}
        <Dropdown open={open} setOpen={setOpen} />
      </nav>
    </motion.header>
  );
};

export default Navbar;
