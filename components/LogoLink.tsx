import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = ({ applyPadding }: { applyPadding: boolean }) => {
  return (
    <Link
      href="/"
      className={`cursor-pointer flex items-center gap-1 ${
        applyPadding ? "px-4" : ""
      }`}
    >
      <Image src="/icons/logo.svg" width={34} height={34} alt="horizon-logo" />
      <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
        Horizon
      </h1>
    </Link>
  );
};

export default LogoLink;
