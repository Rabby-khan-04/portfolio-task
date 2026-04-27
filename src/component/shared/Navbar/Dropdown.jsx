"use client";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Link as SmoothScroll } from "react-scroll";
import { FaGithub } from "react-icons/fa";

const Dropdown = ({ open, setOpen }) => {
  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1 },
    }),
    exit: {
      y: 90,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="block lg:hidden">
      {/* Menu Button */}
      <button type="button" onClick={openMenu} className="btn__rounded">
        <HiOutlineMenuAlt2 className="text-2xl text-white" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90"
          >
            {/* Close Button */}
            <div
              onClick={closeMenu}
              className="absolute right-5 top-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-accent"
            >
              X
            </div>

            {/* Menu Items */}
            <ul className="flex h-full flex-col items-center justify-center gap-6">
              {[
                { type: "link", label: "Home", href: "/" },
                { type: "scroll", label: "About", to: "about" },
                { type: "scroll", label: "Portfolio", to: "portfolio" },
                { type: "scroll", label: "Contact", to: "contact" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={itemVariants}
                >
                  {item.type === "link" ? (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="dropdown__nav__link"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <SmoothScroll
                      to={item.to}
                      smooth
                      offset={-80}
                      duration={500}
                      onClick={closeMenu}
                      className="dropdown__nav__link cursor-pointer"
                    >
                      {item.label}
                    </SmoothScroll>
                  )}
                </motion.li>
              ))}

              {/* Bottom Actions */}
              <motion.li
                className="flex items-center gap-4"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={itemVariants}
                custom={5}
              >
                <a
                  href="https://github.com/Rabby-khan-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FaGithub className="text-2xl text-light transition-all duration-300 hover:text-primary" />
                </a>

                <a
                  href="mailto:ajrabbyk72@gmail.com"
                  onClick={closeMenu}
                  className="btn__sm"
                >
                  Lets Work
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
