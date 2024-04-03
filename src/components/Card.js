import React from "react";
import { RiPlayCircleLine } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { AiTwotoneStop } from "react-icons/ai";

function Card() {
  return (
    <div className="flex items-center justify-between py-20 px-5">
      {/* =============================================================================================== */}

      <div className="w-64 bg-white h-80 cursor-pointer shadow-2xl rounded-3xl filter grayscale-70">
        <div className="flex items-center justify-between px-4 py-1 border-b-1  text-gray-600 bg-gray-300 rounded-tl-3xl rounded-tr-3xl">
          <div className="flex items-center gap-1 text-gray-600">
            <AiTwotoneStop fontSize="20px" />
            <h5 className="font-bold">Expired</h5>
          </div>
          <h5>#218484</h5>
        </div>
        <div className="w-full py-8 flex flex-col items-center justify-center">
          <div className="flex items-center flex-col">
            <h3 className="text-green-500 font-bold">UP</h3>
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 1.94 </p>Payout
            </h5>
          </div>
          <div className=" flex flex-col p-5 border-2 border-pink-500 rounded-lg ">
            <h5 className="font-bold text-xs">CLOSED PRICE</h5>
            <div className="flex justify-between items-center gap-2 py-1">
              <h3 className="text-pink-500 font-bold">$228.5364</h3>
              <p className="flex items-center justify-between gap-2 p-1 text-white border-pink-500 rounded-lg border bg-pink-500">
                <FaArrowDown /> $-0.1066
              </p>
            </div>
            <div className="flex justify-between items-center text-purple-900 gap-2">
              <h5 className="text-xs">Locked Price:</h5>
              <h5 className=" text-xs">$229.6330</h5>
            </div>

            <div className="flex justify-between items-center text-purple-900  gap-2">
              <h4 className="font-bold text-sm">Prize Pool:</h4>
              <h4 className="font-bold text-sm">7.5771 BNB</h4>
            </div>
          </div>
          <div className="flex items-center flex-col text-black">
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 2.06x </p>Payout
            </h5>
            <h3 className="font-bold text-pink-500">DOWN</h3>
          </div>
        </div>
      </div>

      {/* =============================================================================================== */}


      <div className="w-64 bg-white h-80 cursor-pointer shadow-2xl rounded-3xl filter grayscale-70">
        <div className="flex items-center justify-between px-4 py-1 border-b-1  text-gray-600 bg-gray-300 rounded-tl-3xl rounded-tr-3xl">
          <div className="flex items-center gap-1 text-gray-600">
            <AiTwotoneStop fontSize="20px" />
            <h5 className="font-bold">Expired</h5>
          </div>
          <h5>#218485</h5>
        </div>
        <div className="w-full py-8 flex flex-col items-center justify-center">
          <div className="flex items-center flex-col">
            <h3 className="text-green-500 font-bold">UP</h3>
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 1.76 </p>Payout
            </h5>
          </div>
          <div className=" flex flex-col p-5 border-2 border-pink-500 rounded-lg ">
            <h5 className="font-bold text-xs">CLOSED PRICE</h5>
            <div className="flex justify-between items-center gap-2 py-1">
              <h3 className="text-pink-500 font-bold">$228.9473</h3>
              <p className="flex items-center justify-between gap-2 p-1 text-white border-pink-500 rounded-lg border bg-pink-500">
                <FaArrowDown /> $-0.5791
              </p>
            </div>
            <div className="flex justify-between items-center text-purple-900 gap-2">
              <h5 className="text-xs">Locked Price:</h5>
              <h5 className=" text-xs">$229.5264</h5>
            </div>

            <div className="flex justify-between items-center text-purple-900  gap-2">
              <h4 className="font-bold text-sm">Prize Pool:</h4>
              <h4 className="font-bold text-sm">5.2427 BNB</h4>
            </div>
          </div>
          <div className="flex items-center flex-col text-black">
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 2.32x </p>Payout
            </h5>
            <h3 className="font-bold text-pink-500">DOWN</h3>
          </div>
        </div>
      </div>

      {/* =============================================================================================== */}


      <div className="w-64 bg-white h-80 cursor-pointer shadow-2xl rounded-3xl">
        <div className="flex items-center justify-between px-4 py-1 border-b-4 border-purple-600 text-purple-600">
          <div className="flex items-center gap-1 text-purple-600">
            <RiPlayCircleLine fontSize="20px" />
            <h5 className="font-bold">LIVE</h5>
          </div>
          <h5>#218486</h5>
        </div>
        <div className="w-full py-7 flex flex-col items-center justify-center">
          <div className="flex items-center flex-col">
            <h3 className="text-green-500 font-bold">UP</h3>
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 2.15x </p>Payout
            </h5>
          </div>
          <div className=" flex flex-col p-5 border-2 border-pink-500 rounded-lg ">
            <h5 className="font-bold text-xs">LAST PRICE</h5>
            <div className="flex justify-between items-center gap-2 py-1">
              <h3 className="text-pink-500 font-bold">$228.5332</h3>
              <p className="flex items-center justify-between gap-1 p-1 text-white border-pink-500 rounded-lg border bg-pink-500">
                <FaArrowDown /> $-0.4141
              </p>
            </div>
            <div className="flex justify-between items-center text-purple-900 gap-2">
              <h5 className="text-xs">Locked Price:</h5>
              <h5 className=" text-xs">$228.5332</h5>
            </div>

            <div className="flex justify-between items-center text-purple-900 gap-2">
              <h4 className="font-bold text-sm">Prize Pool:</h4>
              <h4 className="font-bold text-sm">8.5143 BNB</h4>
            </div>
          </div>
          <div className="flex items-center flex-col text-black">
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 1.87x </p>Payout
            </h5>
            <h3 className="font-bold text-pink-500">DOWN</h3>
          </div>
        </div>
      </div>

      {/* =============================================================================================== */}

      <div className="w-64 bg-white h-80 cursor-pointer shadow-2xl rounded-3xl">
        <div className="flex items-center justify-between px-4 py-1 border-b text-white bg-purple-600 rounded-tl-3xl rounded-tr-3xl">
          <div className="flex items-center gap-1 text-white">
            <RiPlayCircleLine fontSize="20px" />
            <h5 className="font-bold">Next</h5>
          </div>
          <h5>#218486</h5>
        </div>
        <div className="w-full relative py-7 flex flex-col items-center justify-center">
          <div className="flex items-center flex-col">
            <h3 className="text-green-500 font-bold">UP</h3>
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 1.35x </p>Payout
            </h5>
          </div>

          {/* <div className=" flex flex-col p-5 border-2 bg-white  rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 "> */}
          <div className=" flex flex-col p-5 border-2 border-pink-500 bg-white rounded-lg  ">
            <div className="flex justify-between items-center text-purple-900 gap-4  ">
              <h4 className="font-bold text-sm">Prize Pool:</h4>
              <h4 className="font-bold text-sm">8.5143 BNB</h4>
            </div>
            <div className="flex items-center justify-center px-6 py-1 mb-1 mt-1  border-green-500 rounded-lg border bg-green-500">
              <p className="text-white font-bold">Enter UP</p>
            </div>
            <div className="flex items-center justify-center px-12 py-1 border-pink-500 rounded-lg border bg-pink-500  ">
              <p className="text-white font-bold">Enter DOWN</p>
            </div>
          </div>

          <div className="flex items-center flex-col text-black ">
            <h5 className="text-purple-900 flex gap-1 text-sm">
              <p className="font-bold "> 3.84x </p>Payout
            </h5>
            <h3 className="font-bold text-pink-500">DOWN</h3>
          </div>
        </div>
      </div>

      {/* ==================================================================================================== */}

      <div className="w-64 relative bg-white h-65 cursor-pointer shadow-2xl rounded-3xl">
        <div className="flex items-center justify-between px-3 py-1 text-purple-900 bg-gray-300 rounded-tl-3xl rounded-tr-3xl">
          <div className="flex items-center gap-1 text-purple-900">
            <MdAccessTime fontSize="20px" />
            <h5 className="font-bold">Later</h5>
          </div>
          <h5>#218488</h5>
        </div>
        <div className="w-full relative flex flex-col items-center justify-center py-16">
          <span className="text-gray-300 font-bold">UP</span>
          <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg px-14 py-3">
            <p className="text-purple-900 font-bold text-sm">Entry starts</p>
            <h2 className="text-purple-900 font-bold text-xl">~00:38</h2>
          </div>
          <span className="text-gray-300 font-bold">DOWN</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
