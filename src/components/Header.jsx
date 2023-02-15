import React from "react";
import Typed from "react-typed"
const Header = () => {
  return (
    <>
    <div className="nav flex justify-between px-12 pt-6 pb-2 border-b-2 border-black shadow-slate-500 shadow-md max-w-[1440px] mx-auto">
      <div className="flex items-center ">
        <img src="/Asssets/aimslogo.png" alt="" className="w-[70px]" />
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl font-semibold text-[#b69888]">AIMS</p>
          <p className="text-[6px]">A WORLD OF POSSIBILITIES</p>
        </div>
      </div>
        <ul className="flex  justify-between items-center gap-4 max-w-[450px] p-2 w-full">
            <li className="hover:bg-[#b69888] px-2 py-1 hover:text-white cursor-pointer">Home</li>
            <li className="hover:bg-[#b69888] px-2 py-1 hover:text-white cursor-pointer">About</li>
            <li className="hover:bg-[#b69888] px-2 py-1 hover:text-white cursor-pointer">Contact</li>
            <li className="hover:bg-[#b69888] px-2 py-1 hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:bg-[#b69888] px-2 py-1 hover:text-white cursor-pointer">Videos</li>
        </ul>
      </div>
      {/* <div>
    <Typed
    strings={[
        "your virtual university",
        "your basic school",
        "your skills academy"
    ]}
    typeSpeed={100}
    backSpeed={50}
    loop
    />
      </div> */}
    </>
  );
};

export default Header;
