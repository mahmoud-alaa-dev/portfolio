"use client";
import "@/styles/Navbar.css";
import Link from "next/link";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Button from "@/components/ui/Button";
import Container from "./Container";
import { scrollToSection } from "@/lib/utils";

const sections = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Arsenal", id: "arsenal" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navWidth, setNavWidth] = useState<number>(0);
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (!navRef.current) return;
    const updateWidth = () => {
      setNavWidth(navRef.current!.offsetWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(([entry]) => {
      setNavWidth((prev) =>
        prev !== entry.contentRect.width ? entry.contentRect.width : prev,
      );
    });
    observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function updateActiveNav() {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const targetSection = document.getElementById(section.id);
        if (targetSection) {
          const sectionTop = targetSection.offsetTop;
          const sectionHeight = targetSection.offsetHeight;
          const sectionId = section.id;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(sectionId);
          }
        }
      });
    }
    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav);
    return () => window.removeEventListener("scroll", updateActiveNav);
  }, []);

  return (
    <Container className="sticky top-8 z-50">
      <header ref={navRef}>
        <nav className="flex relative justify-between items-center p-2 md:p-3 bg-black rounded-md">
          <div className="logo">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 169 24"
                fill="none"
              >
                <path
                  d="M2.6226e-06 -1.90735e-06H6.528L12.576 17.792L18.624 -1.90735e-06H25.152V2.56H22.912V21.44H25.152V24H17.728V21.44H19.968V4.256L13.984 21.44H11.168L5.184 4.256V21.44H7.424V24H2.6226e-06V21.44H2.24V2.56H2.6226e-06V-1.90735e-06ZM41.4813 24V21.44H43.5933L42.2173 17.472H34.2173L32.8413 21.44H34.9853V24H28.2013V21.44H29.8973L35.3053 5.76H33.9613V3.2H42.5053V5.76H41.1293L46.5373 21.44H48.2653V24H41.4813ZM38.2173 5.856L35.0813 14.912H41.3533L38.2173 5.856ZM51.3125 3.2H58.7365V5.76H56.4965V12.32H66.3525V5.76H64.1125V3.2H71.5365V5.76H69.2965V21.44H71.5365V24H64.1125V21.44H66.3525V14.88H56.4965V21.44H58.7365V24H51.3125V21.44H53.5525V5.76H51.3125V3.2ZM87.8243 21.44L81.8403 6.816V21.44H84.0803V24H76.6563V21.44H78.8963V5.76H76.6563V3.2H83.1843L89.2323 18.336L95.2803 3.2H101.808V5.76H99.5683V21.44H101.808V24H94.3843V21.44H96.6243V6.816L90.6403 21.44H87.8243ZM110.266 24L106.938 20.48V6.72L110.266 3.2H119.29L122.618 6.72V20.48L119.29 24H110.266ZM111.514 21.248H118.01L119.674 19.552V7.648L118.042 5.952H111.546L109.882 7.648V19.552L111.514 21.248ZM139.526 3.2H146.63V5.76H144.71V20.48L141.382 24H132.678L129.35 20.48V5.76H127.43V3.2H134.534V5.76H132.294V19.552L133.926 21.248H140.102L141.766 19.552V5.76H139.526V3.2ZM151.438 3.2H165.07L168.398 6.72V20.48L165.07 24H151.438V21.44H153.678V5.76H151.438V3.2ZM156.622 21.248H163.79L165.454 19.552V7.648L163.822 5.952H156.622V21.248Z"
                  fill="white"
                />
              </svg>
            </h1>
          </div>
          <ul
            id="navMenu"
            className={`ul md:flex md:text-[10px] lg:text-[12px] xl:text-[16px] ${isOpen ? "active" : ""}`}
            style={{ width: isMobile ? navWidth : undefined }}
          >
            {sections.map((s) => (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className={activeLink === s.id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(s.id);
                    setActiveLink(s.id);
                    setIsOpen(false);
                  }}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <Button size="sm" className="hidden md:block">
              Get in touch
            </Button>
          </div>
          <button
            className={`menu-toggle md:hidden ${isOpen ? "active" : ""}`}
            type="button"
            aria-label="menu button"
            aria-expanded={isOpen}
            aria-controls="navMenu"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
