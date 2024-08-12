import React from "react";

const Homepage = () => {
  return (
    <>
      {/* Done responsive upto 1024px*/}
      <img src="images/HomeCTA/Group 3.svg" className="w-full mt-48" alt="" />
      <div className="statement mt-48 koh-santepheap-regular text-2xl">
        I Build Seamless Web Solutions and Explore Cutting-Edge Tech Trends.
      </div>
      <div className="statement koh-santepheap-regular text-2xl text-[#4e4e4e]">
        Passionate about Coding and Machine Learning.
      </div>
      <div className="Exploremywork mt-20 koh-santepheap-regular text-xl">
        Explore my work
      </div>
      <button className="Explore bg-black text-white p-3 xl:p-6 w-1/4 xl:w-1/5  koh-santepheap-bold mt-4 rounded-full text-xl xl:text-2xl">
        Explore
      </button>
      <div className="gettingtoknow pl-[3vw] flex justify-between items-center mt-48">
        <div className=" bg-black w-[50vw] h-fit rounded-[5vw] text-white shadow-2xl shadow-black px-[5vw] pt-[5vw] pb-[2.5vw] flex flex-col items-center  gap-4 xl:gap-8">
          <h1 className="koh-santepheap-bold text-2xl xl:text-4xl">
            Getting to know me ...
          </h1>
          <p className=" text-sm xl:text-[16px]  2xl:text-lg leading-5 koh-santepheap-regular text-left">
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
          <h1 className="koh-santepheap-regular text-xs xl:text-sm leading-5">
            Checkout my Resume
          </h1>
          <button className="Resume w-[40%] bg-white text-black p-2 xl:p-3 text-center koh-santepheap-bold rounded-full text-sm xl:text-xl ">
            Resume
          </button>
        </div>
        <div className="w-[40vw]">
          <img src="./images/MyImage.svg" alt="" className="w-full" />
        </div>
      </div>
      <div className="statement mt-60 koh-santepheap-regular text-2xl">
        I've always been fascinated by how technology can solve real-world
        problems,
      </div>
      <div className="statement koh-santepheap-regular text-2xl text-[#4e4e4e]">
        and I'm driven by a passion to create innovative solutions that make a
        difference.
      </div>
      <div className="CTATOP3   mt-60">
        <h1 className=" koh-santepheap-regular leading-snug text-[#4e4e4e] text-[90px]">
          Explore My
        </h1>
        <span className=" koh-santepheap-bold leading-snug text-[90px] mt-80">
          Innovative{" "}
        </span>
        <span className=" koh-santepheap-regular leading-snug text-[#4e4e4e] text-[90px]">
          Projects
        </span>
      </div>
      <div className="projct1 flex justify-evenly items-center mt-60">
        <div className="left w-[60%]">
          <video
            src="videos/Project1.mp4"
            type="video/mp4"
            autoPlay
            muted
            className="rounded-3xl h-auto shadow-2xl shadow-black"
          ></video>
        </div>
        <div className="right bg-black w-[33%] rounded-[4vw] text-white shadow-2xl shadow-black pt-8 xl:pt-16 pb-4 xl:pb-8 px-[3vw] flex flex-col gap-3 xl:gap-6 justify-evenly items-center">
          <h1 className="koh-santepheap-bold text-2xl xl:text-3xl">
            Buy me a chai
          </h1>
          <p className="text-xs xl:text-sm  2xl:text-lg leading-5 koh-santepheap-light text-left">
            A platform designed to connect developers with potential supporters
            who can fund their projects. “Get Me a Chai allows developers to
            raise funds by presenting their ideas and needs, while people can
            contribute financially to support their favorite projects. The
            platform fosters a community of innovation and collaboration by
            making it easy for developers to access the resources they need.
          </p>
          <h1 className="koh-santepheap-regular text-xs xl:text-sm ">
            Explore more
          </h1>
          <button className="Explore bg-white text-black p-2 2xl:p-3 w-1/2 koh-santepheap-bold rounded-full text-sm 2xl:text-lg">
            Explore
          </button>
        </div>
      </div>
      <div className="projct2 flex justify-evenly items-center mt-60">
        <div className="left bg-[#bdbdbd] w-[33%] rounded-[4vw] text-black shadow-2xl shadow-black pt-8 xl:pt-16 pb-4 xl:pb-8 px-[3vw] flex flex-col gap-3 xl:gap-6 justify-evenly items-center">
          <h1 className="koh-santepheap-bold text-2xl xl:text-3xl">PassOP</h1>
          <p className="text-xs xl:text-sm  2xl:text-lg leading-5 koh-santepheap-regular text-left">
            A secure and intuitive tool for managing and protecting your
            passwords. Features include military-grade encryption, autofill,
            synchronization across devices, and a password generator. Built with
            modern web technologies and designed to balance top-notch security
            with ease of use.
          </p>
          <h1 className="koh-santepheap-regular text-xs xl:text-sm ">
            Explore more
          </h1>
          <button className="Explore bg-black text-white p-2 2xl:p-3 w-1/2 koh-santepheap-bold rounded-full text-sm 2xl:text-lg">
            Explore
          </button>
        </div>
        <div className="right w-[60%]">
          <video
            src="videos/Project2.mp4"
            type="video/mp4"
            autoPlay
            muted
            className="rounded-3xl h-auto shadow-2xl shadow-black"
          ></video>
        </div>
      </div>
      <div className="CTATOP3   mt-80">
        <h1 className="koh-santepheap-regular leading-snug text-[#4e4e4e] text-[90px]">
          Skills and
        </h1>
        <span className=" koh-santepheap-bold leading-snug text-[90px] mt-80 w-fit">
          Technologies
        </span>
      </div>
      <div className="red mt-80 pb-80 bg-[#ff6060] h-fit rounded-t-[200px] flex flex-wrap items-center justify-evenly content-start p-48 ">
        <img src="images/redbox/CSS3.svg" alt="" className="mb-20" />
        <img src="images/redbox/Figma.svg" alt="" className="w-96" />
        <img src="images/redbox/GitHub.svg" alt="" className="mb-20" />
        <img src="images/redbox/Html 5.svg" alt="" />
        <img src="images/redbox/JavaScript.svg" alt="" className="mb-20 w-96" />
        <img src="images/redbox/Next.js.svg" alt="" className="w-96" />
        <img src="images/redbox/Nodejs.svg" alt="" />
        <img src="images/redbox/NPM.svg" alt="" className="mb-20" />
        <img src="images/redbox/Numpy.svg" alt="" className="w-56" />
        <img src="images/redbox/Python.svg" alt="" className="mb-20 w-96" />
        <img src="images/redbox/React Native.svg" alt="" className="w-56" />
        <img
          src="images/redbox/Tailwindcss.svg"
          alt=""
          className="mb-20 w-96"
        />
        <div className="statement mt-48 koh-santepheap-regular text-2xl">
          I leverage a diverse range of frameworks, libraries, and technologies
          to build innovative and effective solutions.
        </div>
        <div className="statement koh-santepheap-regular text-2xl text-[#ffc4c4]">
          Each sticker represents a key component of my development toolkit,
        </div>
        <div className="statement koh-santepheap-regular text-2xl text-[#ffc4c4]">
          showcasing the breadth of my technical expertise and my ability to
          adapt to different project requirements.{" "}
        </div>
        <div className="CTATOP3  mt-60">
          <span className="koh-santepheap-bold leading-snug  text-[90px] mt-80">
            Let's bring{" "}
          </span>
          <span className="koh-santepheap-bold leading-snug  text-[#ffc4c4] text-[90px]">
            your
          </span>
          <h1 className=" koh-santepheap-bold leading-snug text-[#ffc4c4] text-[90px]">
            ideas to life
          </h1>
        </div>
        <div className="Exploremywork mt-20 koh-santepheap-regular text-xl w-full">
          Get in touch
        </div>
        <button className="Explore bg-black text-white p-6 px-32 koh-santepheap-bold mt-4 rounded-full text-2xl">
          Contact
        </button>
      </div>
    </>
  );
};

export default Homepage;
