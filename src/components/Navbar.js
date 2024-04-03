import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import Image from "next/image";
import Clock from "./../assets/colck.png";
import Card from "./../assets/card.png";
import Coin from "./../assets/bitcoin.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-10 px-5">
      <div className="flex items-center justify-center gap-3 bg-white rounded-2xl py-1 px-3 cursor-pointer ml-10">
        <Image
          src={Coin}
          alt="card"
          style={{ width: "100px" }}
          className="w-20 absolute left-0"
        />
        <h3 className="font-bold text-xl text-purple-900">BNBUSD</h3>
        <h5 className="text-xs font-bold text-purple-900">$228.5332</h5>
      </div>

      <div className="flex items-center justify-center text-green-500 gap-16 bg-white rounded-2xl p-1 cursor-pointer">
        <FaArrowLeft fontSize="20px" />
        <Image
          src={Card}
          alt="card"
          style={{ width: "100px" }}
          className="w-20 absolute"
        />
        <FaArrowRight fontSize="20px" />
      </div>

      <Image
        src={Clock}
        alt="clock"
        style={{ width: "70px" }}
        className="absolute right-40"
      />
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="flex items-center  bg-white rounded-2xl gap-1 py-1 px-7 cursor-pointer mr-5">
          <h3 className="font-bold text-xl text-purple-700 text-start">
            00:38
          </h3>
          <h5 className="text-xs font-bold text-purple-900 pr-4">5m</h5>
        </div>

        <div className="p-2 rounded-xl text-white bg-purple-800 shadow-2xl">
          <IoMdHelpCircleOutline fontSize="25px" />
        </div>
        <div className="p-2 rounded-xl text-white bg-purple-800 shadow-2xl">
          <AiOutlineTrophy fontSize="25px" />
        </div>
        <div className="p-2 rounded-xl text-white bg-gray-300 shadow-2xl">
          <BiHistory fontSize="25px" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
