"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { scrollToSection } from "@/lib/utils";

type Particle = {
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
};

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/mahmoud-alaa-dev",
    label: "Github",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mahmoud-alaa-353155395/",
    label: "Linked IN",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1UZaEVPiog/",
    label: "Facebook",
  },
];

const skills = [
  "Html",
  "Css",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Next.js",
  "TailwindCss",
  "Sass",
  "Shadcn ui",
  "Zustand",
  "Zod",
  "React hook form",
  "Git",
  "Github",
  "pnpm",
  "VS Code",
  "Vercel",
];

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initParticles = () => {
      setParticles(
        Array.from({ length: 30 }, () => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float-particle ${18 + Math.random() * 8}s infinite linear`,
          animationDelay: `${Math.random() * 20 + "s"}`,
        })),
      );
    };
    initParticles();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <Container>
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: particle.left,
                top: particle.top,
                animation: particle.animation,
                animationDelay: particle.animationDelay,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto pt-20 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="animate-fade-in animation-delay-100">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-accent-green backdrop-blur-lg bg-accent-blue/7 text-sm">
                  <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                  Frontend Developer • Next.js
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-200">
                  Building <span className="text-accent-cyan glow">modern</span>
                  <br />
                  web experiences with
                  <br />
                  <span className="font-space-grotesk italic font-normal text-white">
                    purpose.
                  </span>
                </h1>
                <p className="text-md text-text-secondary max-w-lg animate-fade-in animation-delay-300">
                  Hi, I&#39;m Mahmoud Alaa - a frontend developer focused on
                  React, Next.js, and TypeScript. I enjoy turning ideas into
                  responsive, interactive, and polished web experiences.
                </p>
              </div>

              {/* CTA */}
              <div className="flex gap-3 animate-fade-in animation-delay-400">
                <Button className="flex gap-2 items-center" size="sm" bg="blue">
                  Contact me <BsArrowRight className="w-5 h-5" />
                </Button>
                <a
                  href="/Mahmoud_Alaa_CV.pdf"
                  download
                  className="flex items-center gap-2 p-2 text-sm rounded-[3px] select-none relative border border-accent-blue cursor-pointer backdrop transition-all duration-200 hover:bg-accent-blue active:scale-90"
                >
                  Download cv <MdOutlineFileDownload className="w-5 h-5" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3.75 animate-fade-in animation-delay-400">
                <span>Follow:</span>
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-carbon-medium border border-metal-dark rounded-full flex items-center justify-center transition-all duration-300 hover:bg-linear-[135deg] from-accent-cyan to-accent-blue hover:border-accent-blue hover:text-text-primary hover:-translate-y-0.75 hover:shadow-[0_5px_20px_rgba(69,171,255,0.4)]"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="animate-fade-in animation-delay-400">
              {/* Profile Image */}
              <div className="relative w-[90%]  md:w-md mx-auto lg:w-[60%]">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-accent-cyan/30 via-transparent to-accent-cyan/10 blur-2xl animate-pulse" />
                <div className="relative p-2 backdrop-blur-lg bg-accent-blue/7 rounded-3xl glow-border">
                  <Image
                    src="/hero2.png"
                    alt="Mahmoud Alaa"
                    width={500}
                    height={625}
                    priority
                    className="w-full aspect-4/5 object-cover rounded-2xl bg-black"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -left-4 -top-4 backdrop-blur-lg bg-accent-blue/15 rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Line */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="mb-6 text-center text-sm text-text-secondary">
              Technologies I work with
            </p>

            <div
              className="
            relative
            overflow-hidden
            mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
            >
              <div className="marquee-track">
                {/* First group */}
                <div className="marquee-group">
                  {skills.map((skill) => (
                    <div key={skill} className="shrink-0 px-8 py-4">
                      <span
                        className="
                      cursor-default
                      select-none
                      text-xl
                      font-semibold
                      text-text-secondary/50
                      transition-colors
                      hover:text-text-primary
                    "
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Duplicate group */}
                <div className="marquee-group" aria-hidden="true">
                  {skills.map((skill) => (
                    <div key={skill} className="shrink-0 px-8 py-4">
                      <span
                        className="
                      cursor-default
                      select-none
                      text-xl
                      font-semibold
                      text-text-secondary/50
                      transition-colors
                      hover:text-text-primary
                    "
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-50">
            <Link
              href="#about"
              className="flex flex-col items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <FaChevronDown className="w-6 h-6 animate-bounce" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
