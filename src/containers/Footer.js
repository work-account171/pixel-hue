import Link from "next/link";
import Image from "next/image";
import logo2 from "@/assets/images/logo2.png";
import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import mailIcon from "@/assets/icons/mail.png";
import twitterIcon from "@/assets/icons/twitter.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo-and-links">
          <div>
            <Link href="/" className="logo">
              <Image src={logo2} alt="" width={30} height={4} />
              <div>
                <p>Pixel &</p>
                <span>Hue</span>
              </div>
            </Link>
          </div>
          <div className="links-list">
            <div className="links">
              <p>Terms & policies</p>
              <ul>
                <li>
                  <Link href="/">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <p className="title">Company</p>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About Us</Link>
                </li>{" "}
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <p className="title">Contact</p>
              <ul>
                <li>
                  <Link href="/">(+62) 893912392190</Link>
                </li>
                <li>
                  <Link href="/">vork.acount.p171@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <p className="title">Location</p>
              <ul>
                <li>
                  <Link href="/">PT Osiris Real Estate Internasional</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social-items">
          <Link className="item" href="/">
            <Image src={facebookIcon} width="20" height="20" alt="" />
          </Link>
          <Link className="item" href="/">
            <Image src={instagramIcon} width="20" height="20" alt="" />
          </Link>
          <Link className="item" href="/">
            <Image src={linkedinIcon} width="20" height="20" alt="" />
          </Link>
          <Link className="item" href="/">
            <Image src={mailIcon} width="20" height="20" alt="" />
          </Link>
          <Link className="item" href="/">
            <Image src={twitterIcon} width="20" height="20" alt="" />
          </Link>
        </div>
      </div>
      <hr />
      <div className="container">
        <p className="copy-right">Copyright &copy; Pixel&Hue 2025 </p>
      </div>
    </footer>
  );
};

export default Footer;
