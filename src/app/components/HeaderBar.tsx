import { Search } from "lucide-react";
import React from "react";
import Image from "next/image";

function HeaderBar() {
  return (
    <div className="w-full fixed top-0 bg-[#ffffff00] h-[80px] px-10 grid grid-cols-2 items-center">
      <div className="cursor-pointer">
        <Image src="/SO-sri-lanka.png" width={200} height={200} alt="logo" />
      </div>
      <div className="flex gap-[100px] text-white bold ">
        <div className=" flex gap-5">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Home</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <Search size={20} /> Search
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
