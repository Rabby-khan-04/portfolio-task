"use client";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import CodeEditor from "../codeEditor/CodeEditor";
import IconBox from "@/component/shared/IconBox";

const Banner = () => {
  const handleDownloading = () => {
    const link = document.createElement("a");
    link.href = "/Resume_of_Arifujjaman_Rabby_Khan.pdf";
    link.download = "Resume_of_Arifujjaman_Rabby_Khan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section className="banner py-10 sm:py-16 md:py-20 lg:py-32">
      <div className="container grid lg:grid-cols-8 gap-8">
        <div className="intro lg:col-span-5 space-y-6 self-center">
          <h3 className="text-lg font-semibold text-primary">
            Welcome to a space I’ve built on the web
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold hero__heading">
            I{"'"}m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Rabby Khan
            </span>
            , a MernStack developer.
          </h1>
          <div className="flex items-center gap-3 md:gap-5 flex-wrap">
            <IconBox Icon={FaReact} title="React.js" />
            <IconBox Icon={SiNextdotjs} title="Next.js" />
            <IconBox Icon={IoLogoNodejs} title="Node.js" />
            <IconBox Icon={SiMongodb} title="MongoDB" />
            <IconBox Icon={SiTailwindcss} title="Tailwind" />
          </div>
          <p className="text-light-gray text-lg">
            I love writing code that takes things next level creating highly
            performant websites, automated API integrations, building my own
            dev-tools, and creating stunning user-experiences that makes you
            feel WOW!.
          </p>
          <p className="text-light-gray text-lg">
            I am always keen to learn and explore new technologies, frameworks
            and programming languages. Currently, I{"'"}m learning about
            Three.js.
          </p>
          <div className="flex items-center gap-8">
            <a href="mailto:ajrabbyk72@gmail.com" className="primary__btn">
              Let{"'"}s Work
            </a>
            <button
              type="button"
              onClick={handleDownloading}
              className="outline__btn"
            >
              Resume
            </button>
          </div>
        </div>
        <div className="code__editor lg:col-span-3 self-end">
          <div className="flex justify-end gap-1.5 mb-4">
            <span className="about__tag border-cyan-400/20 bg-cyan-900/70">
              Cyclist
            </span>
            <span className="about__tag border-green-400/20 bg-green-900/70">
              Code Wizard
            </span>
            <span className="about__tag border-orange-400/20 bg-orange-700/70">
              Tech Geek
            </span>
            <span className="about__tag border-gray-400/20 bg-gray-900/70">
              Freelancer
            </span>
          </div>
          <CodeEditor />
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
