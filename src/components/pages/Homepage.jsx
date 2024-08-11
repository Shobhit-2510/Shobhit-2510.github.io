import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="black m-0 p-0 absolute left-1/2 top-[400px] z-0 h-[550px] bg-black w-1/2"></div>
      <div className="black m-0 p-0 absolute left-0 top-[600px] z-0 h-[500px] bg-[#dcdcdc] w-[57%]"></div>
      <div className="CTATOP relative z-1  mt-48">
        <span className="relative z-1 koh-santepheap-bold lh100 text-[90px] mt-80">
          Innovative{" "}
        </span>
        <span className="relative z-1 koh-santepheap-regular lh100 text-[#4e4e4e] text-[90px]">
          Full Stack
        </span>
        <h1 className="relative z-1 koh-santepheap-regular lh100 text-[#4e4e4e] text-[90px]">
          &nbsp;Deve<span className="text-white">loper</span>
        </h1>
      </div>
      <div className="CTATOP relative z-1  mt-48">
        <span className="relative z-1 koh-santepheap-bold lh100 text-[90px] mt-80">
          Crafting{" "}
        </span>
        <span className="relative z-1 koh-santepheap-regular lh100 text-[#4e4e4e] text-[90px]">
          the
        </span>
        <h1 className="relative z-1 koh-santepheap-regular lh100 text-[#4e4e4e] text-[90px]">
          Future of Tec<span className="text-white">hnology</span>
        </h1>
      </div>
      <div className="statement mt-96 koh-santepheap-regular text-xl">
        I Build Seamless Web Solutions and Explore Cutting-Edge Tech Trends.
      </div>
      <div className="statement koh-santepheap-regular text-xl text-[#4e4e4e]">
        Passionate about Coding and Machine Learning.
      </div>
      <div className="Exploremywork mt-20 koh-santepheap-regular text-xl">
        Explore my work
      </div>
      <button className="Explore bg-black text-white p-6 px-32 koh-santepheap-bold mt-4 rounded-full text-2xl">
        Explore
      </button>
      <div className="gettingtoknow top-96 pl-24 p-12 flex justify-between mr-[-130px] items-center mt-20">
        <div className=" bg-black w-[720px] h-[650px] rounded-[80px] text-white">
          <h1 className="koh-santepheap-bold mt-[88px] mb-8">
            Getting to know me ...
          </h1>
          <p className="text-xl mx-20 text-left">
            Hi, I’m Shobhit, a passionate Full-Stack Developer with a keen
            interest in coding and machine learning. I specialize in crafting
            dynamic, user-friendly web applications that integrate both
            front-end and back-end technologies. Driven by a love for innovative
            solutions, I’m excited by the challenges and opportunities presented
            by modern tech and the future of machine learning. My approach
            combines a strong technical foundation with creative problem-solving
            skills to build impactful, future-ready solutions. Explore my
            projects to see how I bring ideas to life, or get in touch to
            discuss potential collaborations.
          </p>
          <h1 className="koh-santepheap-regular mt-10 text-lg">
            Checkout me Resume
          </h1>
          <button className="Explore bg-white text-black p-4 px-24 koh-santepheap-bold mt-4 rounded-full text-2xl">
            Resume
          </button>
        </div>
        <div className=" bg-[#dcdcdc] w-[800px] h-[800px] rounded-full">
          hello
        </div>
      </div>
    </>
  );
};

export default Homepage;
