import React from "react";
import Image from "next/image";
import mainlogo from "../../../public/mainlogo.svg";
import arrow from "../../../public/arrow.svg";
import theme from "../../../public/theme.svg";
import SearchHeader from "./search";
import Profile from "./profile";

type Props = {};

function Header({}: Props) {
  return (
    <div className="py-[22px] flex items-center space-x-[54px] mb-[16px]">
      <Image src={mainlogo} height={36} width={194} alt={"jiffyscan"} />
      <div className="space-x-[40px] text-[16px] text-[#5A5A62] flex">
        <span>Home</span>
        <span className="flex">
          <p>Blockchain</p>
          <Image src={arrow} height={24} width={24} alt={"arrow"} />
        </span>
        <span className="flex">
          <p>Developers</p>
          <Image src={arrow} height={24} width={24} alt={"arrow"} />
        </span>
        <span className="flex">
          <p>More</p>
          <Image src={arrow} height={24} width={24} alt={"arrow"} />
        </span>
        <span>About 4337</span>
      </div>
      <SearchHeader />
      <Profile />
      <Image src={theme} height={24} width={24} alt={"theme"} />
    </div>
  );
}

export default Header;
