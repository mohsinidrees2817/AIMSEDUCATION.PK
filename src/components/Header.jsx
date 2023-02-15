import React from "react";
import Typed from "react-typed"
const Header = () => {
  return (
    <>
    <div className="nav flex justify-between px-12 py-6">
      <div className="flex items-center p-2">
        <img src="/Asssets/aimslogo.png" alt="" className="w-[70px]" />
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl font-semibold text-[#b69888]">AIMS</p>
          <p className="text-[6px]">A WORLD OF POSSIBILITIES</p>
        </div>
      </div>
        <ul className="flex  justify-between items-center gap-4 max-w-[450px] p-2 w-full">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Videos</li>


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
