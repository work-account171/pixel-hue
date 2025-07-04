import Image from "next/image";
import Link from "next/link";
import shapeCircleBlue from "@/assets/images/shape-circle_blue.png";
import shapeCircleRed from "@/assets/images/shape-circle_red.png";
import heroSectionImage from "@/assets/images/heroSectionImage.png";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div>
          <p className="title">Turn your dream business goal into reality.</p>
          <p className="description">
            When you're ready to take your business to the next level, join us. We'll do the heavy lifting—just sit back and watch your goals become reality.
          </p>
          <Link href="/" className="button-contained">
            Start Project
          </Link>
          <div>
            <Image className="shape-blue" src={shapeCircleBlue} alt="" />
            <Image className="shape-red" src={shapeCircleRed} alt="" />
          </div>
        </div>
        <Image className="image" src={heroSectionImage} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
