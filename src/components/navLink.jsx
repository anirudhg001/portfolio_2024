"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.URL && "bg-black text-white"
      }`}
      href={`link.url`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
