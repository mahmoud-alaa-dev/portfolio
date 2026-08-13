import Container from "../layout/Container";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-30 relative overflow-hidden bg-[linear-gradient(180deg,var(--primary-black)_0%,rgba(153,69,255,0.02)_50%,var(--primary-black)_100%)]"
    >
      <Container>
        {/* Projects Headline */}
        <div className="text-center mb-20">
          <div className="mb-5 text-accent-blue text-sm font-medium tracking-[1px] uppercase">
            Featured Work
          </div>
          <h2
            className="
            text-[36px]
            md:text-[56px]
            font-black
            uppercase
            tracking-[3px]
            mb-7.5
            leading-[1.2]
            bg-[linear-gradient(135deg,var(--accent-cyan)_0%,var(--accent-purple)_25%,var(--accent-blue)_50%,var(--accent-green)_75%,var(--accent-cyan)_100%)]
            bg-clip-text
            text-transparent
            bg-size-[200%_200%]
            animate-gradient-flow
          "
          >
            projects that
            <br />
            make an Impact
          </h2>

          <p
            className="
            text-[20px]
            text-text-secondary
            max-w-175
            mx-auto
            mb-20
            leading-[1.6]
            font-light
          "
          >
            A selection of projects I&#39;ve built using modern web
            technologies, focused on creating responsive, intuitive, and
            engaging user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[linear-gradient(135deg,rgba(42,42,42,0.2),rgba(26,26,26,0.3))] border border-metal-dark overflow-hidden flex flex-col"
            >
              <div className="m-2 border border-metal-dark rounded-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col grow">
                <div className="p-6 flex flex-col gap-4 grow">
                  <div className="flex justify-between items-center">
                    <h2 className="text-accent-cyan font-semibold">
                      {project.title}
                    </h2>
                    <FiArrowUpRight className="w-5 h-5 group-hover:text-accent-cyan group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500" />
                  </div>
                  <h3 className="text-sm text-text-secondary grow">
                    {project.description}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((techBadge, i) => (
                      <span
                        key={i}
                        className=" py-1 px-2.5 md:py-1.25 md:px-2.75 text-[11px] md:text-xs rounded-full bg-[rgba(69,171,255,0.26)] border border-accent-cyan"
                      >
                        {techBadge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex gap-5">
                  <Link href={project.liveView} target="_blank" className="flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-accent-blue">Live View <FiArrowUpRight /></Link>
                  <Link href={project.githubLink} target="_blank" className="flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-accent-blue">Github <SiGithub /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
