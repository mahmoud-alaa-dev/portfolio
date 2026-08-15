import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className="py-15 text-text-secondary text-center text-xs md:text-[16px]">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/mahmoud-alaa-dev/"
            className="text-accent-blue underline underline-offset-3"
          >
            MAHMOUD ALAA.
          </Link>{" "}
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
