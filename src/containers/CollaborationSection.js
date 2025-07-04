import collaborationImage from "@/assets/images/collaborationSectionImage.png";
import Image from "next/image";
import Link from "next/link";

const CollaborationSection = () => {
  return (
    <section id="collaboration">
      <div className="container">
        <Image className="image" src={collaborationImage} alt="" />
        <div className="content">
          <p className="title">Interesting Collaboration With Us?</p>
          <p className="subtitle">Help you to reach your business goal</p>
          <Link href="/" className="button-contained">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
