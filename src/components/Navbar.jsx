import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const loc = useLocation();
  const [menu, setMenu] = useState(true);
  const [windWid, setWindWid] = useState(window.innerWidth);

  const menuHandler = () => {
    setMenu(!menu);
  };
  const handleResize = () => {
    setWindWid(window.innerWidth);
  };

  useEffect(() => {
    setMenu(true);

    window.addEventListener("resize", handleResize);
  }, [windWid]);

  return (
    <>
      <nav className="navbar sticky top-0 z-[1] flex items-center justify-between px-4 md:px-8 lg:px-36 xl:px-48  h-16 md:h-24 bg-white"
        id="top"
      >
        <Link className="logo bg-black h-10 w-10 md:w-16 md:h-16 rounded-full flex justify-center items-center text-white"
          to="/"
        >
          <p className="text-center text-[8px] md:text-xs">\Shobhit Kumar\</p>
        </Link>
        <div className="links  items-center justify-end gap-8 lg:gap-16  h-24 lg:text-lg hidden md:flex">
          <div id="Home">
            <Link to="/" className="peer w-fit">
              Home
            </Link>
            <div
              className={
                loc.pathname === "/"
                  ? "line w-full h-[1px] bg-black "
                  : " line w-full h-[1px] bg-black invisible peer-hover:visible"
              }
            ></div>
          </div>
          <div id="Projects">
            <Link to="/Projects" className="peer w-fit ">
              Projects
            </Link>
            <div
              className={
                loc.pathname === "/Projects"
                  ? "line w-full h-[1px] bg-black "
                  : "line w-full h-[1px] bg-black invisible peer-hover:visible"
              }
            ></div>
          </div>
          <div id="Resume">
            <Link to="/Resume" className="peer w-fit ">
              Resume
            </Link>
            <div
              className={
                loc.pathname === "/Resume"
                  ? "line w-full h-[1px] bg-black "
                  : "line w-full h-[1px] bg-black invisible peer-hover:visible"
              }
            ></div>
          </div>
          <div id="About">
            <Link to="/About" className="peer w-fit ">
              About
            </Link>
            <div
              className={
                loc.pathname === "/About"
                  ? "line w-full h-[1px] bg-black "
                  : "line w-full h-[1px] bg-black invisible peer-hover:visible"
              }
            ></div>
          </div>
          <div id="Contact">
            <Link to="/Contact" className="peer w-fit ">
              Contact
            </Link>
            <div
              className={
                loc.pathname === "/Contact"
                  ? "line w-full h-[1px] bg-black "
                  : "line w-full h-[1px] bg-black invisible peer-hover:visible"
              }
            ></div>
          </div>
        </div>
        <div
          className="menu flex flex-col md:hidden justify-evenly h-full w-8"
          onClick={menuHandler}
        >
          {menu ? (
            <div className="flex flex-col md:hidden justify-evenly h-1/2 hover:cursor-pointer">
              <div className="line h-1 bg-black w-8"></div>
              <div className="line h-1 bg-black w-8"></div>
              <div className="line h-1 bg-black w-8"></div>
            </div>
          ) : (
            <img
              src="./images/cross.png"
              alt=""
              className="h-1/3 mx-auto hover:cursor-pointer"
            />
          )}
        </div>
      </nav>
      <div className={`menulist bg-zinc-200  w-full fixed z-0  transition-all duration-300 ease-linear ${
          !menu ? "top-16" : "top-[-500px]"
        }`}
        style={menu ? { height: "10px" } : {}}
      >
          <Link
            to="/"
            className="text-center h-20 flex justify-center items-center hover:bg-zinc-100"
            onClick={menuHandler}
            style={
              loc.pathname === "/"
                ? { backgroundColor: "#f4f4f5" }
                : {}
            }
          >
            Home
          </Link>
          <Link
            to="/Projects"
            className="text-center h-20 flex justify-center items-center hover:bg-zinc-100"
            onClick={menuHandler}
            style={
              loc.pathname === "/Projects"
                ? { backgroundColor: "#f4f4f5" }
                : {}
            }
          >
            Projects
          </Link>
          <Link
            to="/Resume"
            className="text-center h-20 flex justify-center items-center hover:bg-zinc-100"
            onClick={menuHandler}
            style={
              loc.pathname === "/Resume"
                ? { backgroundColor: "#f4f4f5" }
                : {}
            }
          >
            Resume
          </Link>
          <Link
            to="/About"
            className="text-center h-20 flex justify-center items-center hover:bg-zinc-100"
            onClick={menuHandler}
            style={
              loc.pathname === "/About"
                ? { backgroundColor: "#f4f4f5" }
                : {}
            }
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-center h-20 flex justify-center items-center hover:bg-zinc-100"
            onClick={menuHandler}
            style={
              loc.pathname === "/Contact"
                ? { backgroundColor: "#f4f4f5" }
                : {}
            }
          >
            Contact
          </Link>
      </div>
    </>
  );
};

export default Navbar;
