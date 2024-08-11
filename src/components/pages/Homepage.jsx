import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="black m-0 p-0 absolute left-1/2 top-[400px] z-0 h-[550px] bg-black w-1/2"></div>
      <div className="black m-0 p-0 absolute left-0 top-[600px] z-0 h-[500px] bg-[#dcdcdc] w-[57%]"></div>
      <div className="CTATOP relative z-1  mt-48">
        <span className="relative z-1 koh-santepheap-bold text-[90px] mt-80">
          Innovative{" "}
        </span>
        <span className="relative z-1 koh-santepheap-regular text-[#4e4e4e] text-[90px]">
          Full Stack
        </span>
        <h1 className="relative z-1 koh-santepheap-regular text-[#4e4e4e] text-[90px]">
          &nbsp;Deve<span className="text-white">loper</span>
        </h1>
      </div>
      <div className="CTATOP relative z-1  mt-48">
        <span className="relative z-1 koh-santepheap-bold text-[90px] mt-80">
          Crafting{" "}
        </span>
        <span className="relative z-1 koh-santepheap-regular text-[#4e4e4e] text-[90px]">
          the
        </span>
        <h1 className="relative z-1 koh-santepheap-regular text-[#4e4e4e] text-[90px]">
          Future of Tec<span className="text-white">hnology</span>
        </h1>
      </div>
    </>
  );
};

export default Homepage;
