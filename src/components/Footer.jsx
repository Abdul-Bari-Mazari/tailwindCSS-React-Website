import LOGO from "../assets/images/logo-white.svg";
import FACEBOOK from "../assets/images/icon-facebook.svg";
import INSTAGRAM from "../assets/images/icon-instagram.svg";
import TWITTER from "../assets/images/icon-twitter.svg";
import PINTEREST from "../assets/images/icon-pinterest.svg";
import YOUTUBE from "../assets/images/icon-youtube.svg";
import GetStarted from "./GetStartedButton";

function AppFooter() {
  return (
    <>
      <footer className="bg-[#1D1E25]">
        <div className="container mx-auto py-12 px-6 flex  flex-col-reverse justify-between space-x-5 sppace-y-8 md:flex-row md:space-y-0 md:py-10">
          {/* Logo and Social Links */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <p className="mt-12 block text-white md:hidden">
              Copyright © 2022, All Rights Reserved
            </p>
            <div>
              <img
                className="h-8"
                src={LOGO}
                alt=""
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="">
                <img
                  className="h-8 hover:bg-themeOrange rounded-full"
                  src={FACEBOOK}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-8 hover:bg-themeOrange rounded-full"
                  src={INSTAGRAM}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-8 hover:bg-themeOrange rounded-full"
                  src={YOUTUBE}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-8 hover:bg-themeOrange rounded-full"
                  src={TWITTER}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-8 hover:bg-themeOrange rounded-full"
                  src={PINTEREST}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex justify-around md:space-x-10 lg:space-x-32 mt-10 md:mt-0">
            <div className="flex flex-col space-y-3 text-white">
              <a
                href=""
                className="hover:text-themeOrange"
              >
                Home
              </a>
              <a
                href=""
                className="hover:text-themeOrange"
              >
                Pricing
              </a>
              <a
                href=""
                className="hover:text-themeOrange"
              >
                Products
              </a>
              <a
                href=""
                className="hover:text-themeOrange"
              >
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a
                href=""
                className="hover:text-themeOrange"
              >
                Careers
              </a>
              <a
                href=""
                className="hover:text-themeOrange"
              >
                Community
              </a>
              <a
                href=""
                className="hover:text-themeOrange"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          {/* Input, Button and Copyright */}
          <div className="flex flex-col justify-between items-center md:items-start ">
            <div className="flex space-x-3 justify-center items-center">
              <div className="flex">
                <input
                  type="text"
                  className="rounded-full focus:outline-none px-4 py-2 flex-1"
                  placeholder="Updated in your inbox"
                />
              </div>
              <GetStarted
                className="text-white"
                text="Go"
              />
            </div>
            <p className=" hidden text-white md:block">
              Copyright © 2022, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AppFooter;
