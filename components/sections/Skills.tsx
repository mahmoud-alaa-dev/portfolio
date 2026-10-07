"use client";

import { skillsData } from "@/data/skills";
import { useState } from "react";
import Container from "../layout/Container";
import { cn } from "@/lib/utils";

const categoryTabs = [
  {
    id: "all",
    text: "All Skills",
  },
  {
    id: "frontend",
    text: "Frontend",
  },
  {
    id: "state-management",
    text: "State Management",
  },
  {
    id: "forms-and-validation",
    text: "Forms & Validation",
  },
  {
    id: "tools",
    text: "Tools",
  },
  {
    id: "deployment",
    text: "Deployment",
  },
];

const categoryTabClass = `    
  py-[12px]
  px-[30px]
  bg-[var(--carbon-medium)]
  border
  border-[var(--metal-dark)]
  rounded-[30px]
  text-[var(--text-secondary)]
  cursor-pointer
  transition-all
  duration-300
  uppercase
  text-[14px]
  tracking-[1px]_
  hover:bg-[rgba(69,_171,_255,_0.26)]
  hover:border-[var(--accent-cyan)]
  hover:text-[var(--text-primary)]
  `;

const activeCategoryTabClass = `          
  bg-[linear-gradient(135deg,var(--accent-cyan),var(--accent-blue))]
  border-[var(--accent-cyan)]
  text-[var(--text-primary)]
  shadow-[0_5px_20px_rgba(69,_171,_255,_0.3)]
  `;

const Skills = () => {
  const [activeCategory, setActiveCategroy] = useState<string>("all");

  return (
    <section
      id="arsenal"
      className="py-30 relative overflow-hidden bg-[linear-gradient(180deg,var(--primary-black)_0%,rgba(153,69,255,0.02)_50%,var(--primary-black)_100%)]"
    >
      <Container>
        <div>
          <div className="text-center mb-20">
            <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-[3px] mb-5 bg-[linear-gradient(135deg,var(--text-primary),var(--accent-cyan))] bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-text-secondary text-[18px] max-w-150 mx-auto">
              Mastery of cutting-edge technologies and frameworks
            </p>
          </div>

          <div
            role="tablist"
            aria-label="skills categories"
            className="flex justify-center gap-5 flex-wrap mb-10"
          >
            {categoryTabs.map((category) => (
              <button
                id={`${category.id}-tab`}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`${category.id}-panel`}
                key={category.id}
                className={cn(
                  categoryTabClass,
                  activeCategory === category.id && activeCategoryTabClass,
                )}
                onClick={() => setActiveCategroy(category.id)}
              >
                {category.text}
              </button>
            ))}
          </div>

          <div
            id={`${activeCategory}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeCategory}-tab`}
            className="flex flex-wrap gap-5 justify-center mt-15"
          >
            {activeCategory === "all"
              ? skillsData.map((skill) => (
                  <div
                    key={skill.id}
                    className="w-37.5 h-42.5 my-5 mx-1.25 md:w-50 md:h-57.5 md:my-7.5 md:mx-2.5 relative transition-all duration-300 hover:-translate-y-2.5 group"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[20px] rotate-30 bg-[linear-gradient(135deg,var(--carbon-medium),var(--carbon-light))] border-2 border-metal-dark transition-all duration-300 group-hover:border-[var(--accent-cyan)] group-hover:shadow-[0_5px_20px_rgba(69,171,255,0.3)]">
                      <div className="w-full h-full absolute top-0 left-0 -rotate-30 flex flex-col justify-center items-center p-5">
                        <div
                          className="text-[36px] md:text-[48px] mb-3.75 animate-skill-icon"
                          style={{ color: skill.iconColor }}
                        >
                          <skill.icon />
                        </div>
                        <div className="text-[14px] md:text-[16px] text-text-primary uppercase text-center mb-2.5 font-bold tracking-[1px]">
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : skillsData
                  .filter((skill) => skill.category === activeCategory)
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="w-37.5 h-42.5 my-5 mx-1.25 md:w-50 md:h-57.5 md:my-7.5 md:mx-2.5 relative transition-all duration-300 hover:-translate-y-2.5 group"
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-[20px] rotate-30 bg-[linear-gradient(135deg,var(--carbon-medium),var(--carbon-light))] border-2 border-metal-dark transition-all duration-300 group-hover:border-[var(--accent-cyan)] group-hover:shadow-[0_5px_20px_rgba(69,171,255,0.3)]">
                        <div className="w-full h-full absolute top-0 left-0 -rotate-30 flex flex-col justify-center items-center p-5">
                          <div
                            className="text-[36px] md:text-[48px] mb-3.75 animate-skill-icon"
                            style={{ color: skill.iconColor }}
                          >
                            <skill.icon />
                          </div>
                          <div className="text-[14px] md:text-[16px] text-text-primary uppercase text-center mb-2.5 font-bold tracking-[1px]">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
