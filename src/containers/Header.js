import logo from "@/assets/images/logo.svg";
import logo2 from "@/assets/images/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header-mobile">
          <div className="header-mobile_left">
            <Link href="/" className="logo">
              <Image src={logo2} alt="" width={30} height={20} className="w-[20px] h-[20px]" />
              <div>
                <p>Pixel &</p>
                <span>Hue</span>
              </div>
            </Link>
          </div>
          <div className="header-mobile_right">
            <HiMenuAlt1
              size={27}
              color="#e2e2e2"
              onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
            />
          </div>
        </div>
        <div className="header-desktop">
          <div className="container">
            <Link href="/" className="logo">
              <Image src={logo2} alt="" />
              <div>
                <p>Pixel &</p>
                <span>Hue</span>
              </div>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="#testimonial">Testimonial</Link>
                </li>
              </ul>
            </nav>
            {/* <Link href="/" className="button-outlined">
              Contact us
            </Link> */}
          </div>
        </div>
        {isShowMenuMobile ? (
          <div className="menu-mobile">
            <div className="container">
              <div className="top">
                <Link href="/" className="logo">
                  <Image src={logo} alt="" />
                  <div>
                    <p>Agency</p>
                    <span>Creative</span>
                  </div>
                </Link>
                <HiOutlineX
                  size={27}
                  color="#e2e2e2"
                  onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
                />
              </div>
              <div>
                <nav>
                  <ul className="bottom">
                    <li>
                      <Link
                        href="/"
                        onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#about"
                        onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#portfolio"
                        onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#testimonial"
                        onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
                      >
                        Testimonial
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
