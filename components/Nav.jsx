"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
