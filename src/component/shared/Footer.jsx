import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="line__break"></div>
      <div className="container py-5 relative sm:flex flex-col gap-4 sm:justify-between items-center">
        <div className="max-sm:text-center max-sm:mb-4">
          <p className="text-light-gray text-sm">
            &copy; 2026 Arifujjaman Rabby Khan. All rights reserved.
          </p>
        </div>
        <div className="flex items-center max-sm:justify-center gap-4">
          <a href="https://www.linkedin.com/in/rabbykhan17/" target="_blank">
            <FaLinkedin className="text-light-gray hover:text-primary text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/rabbykhan17/" target="_blank">
            <FaGithub className="text-light-gray hover:text-primary text-2xl" />
          </a>
          <a href="https://www.facebook.com/rabbykhan04/" target="_blank">
            <FaFacebook className="text-light-gray hover:text-primary text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
