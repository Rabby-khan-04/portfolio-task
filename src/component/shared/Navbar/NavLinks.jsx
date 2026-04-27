import Link from "next/link";
import React from "react";

const NavLinks = ({ title, href }) => {
  return (
    <Link className="nav__link" href={href}>
      {title}
    </Link>
  );
};

export default NavLinks;
