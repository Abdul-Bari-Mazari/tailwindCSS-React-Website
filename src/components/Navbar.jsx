import LOGO from "../assets/images/logo.svg";
import HAMBURGER_MENU from "../assets/images/icon-hamburger.svg";
import CLOSE_MENU from "../assets/images/icon-close.svg";
import GetStarted from "./GetStartedButton";
import { useEffect, useState } from "react";
import { menu } from "@material-tailwind/react";
import ResponsiveMenu from "./ResponsiveMenu";

function AppNavbar() {
  const [menuIcon, setMenuIcon] = useState(HAMBURGER_MENU);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const changeMenuIcon = () => {
    setMenuIcon(CLOSE_MENU);
    if (menuIcon === CLOSE_MENU) {
      setMenuIcon(HAMBURGER_MENU);
      setMenuVisibility(false);
    } else {
      setMenuIcon(CLOSE_MENU);
      setMenuVisibility(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuIcon(HAMBURGER_MENU);
        setMenuVisibility(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div>
            <img
              className=""
              src={LOGO}
              alt=""
            />
          </div>
          <div className="hidden md:flex md:space-x-6">
            <p className="nav-link">Pricing</p>
            <p className="nav-link">Product</p>
            <p className="nav-link">About Us</p>
            <p className="nav-link">Careers</p>
            <p className="nav-link">Community</p>
          </div>
          <div>
            <GetStarted
              className="hidden text-white md:block"
              text="Get Started"
            />
          </div>
          <div className="block relative md:hidden">
            <img
              onClick={changeMenuIcon}
              src={menuIcon}
            />
          </div>
        </div>
        {menuVisibility ? <ResponsiveMenu /> : null}
      </nav>
    </>
  );
}

export default AppNavbar;
