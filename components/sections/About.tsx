import Container from "../layout/Container";
import { IoCodeSlash } from "react-icons/io5";
import { RiFocus2Fill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";

const pillarClass = `
  relative
  py-[40px] px-[30px]
  bg-[linear-gradient(135deg,rgba(42,42,42,0.2),rgba(26,26,26,0.3))]
  border border-[var(--metal-dark)]
  rounded-[20px]
  transition-all duration-[400ms] ease-in-out
  overflow-hidden
  before:content-['']
  before:absolute before:top-0 before:left-0
  before:w-full before:h-[2px]
  before:bg-[linear-gradient(90deg,var(--accent-purple),var(--accent-blue),var(--accent-green))]
  before:scale-x-0
  before:transition-transform before:duration-[400ms]
  hover:-translate-y-[10px]
  hover:border-[var(--accent-cyan)]
  hover:shadow-[0_20px_40px_rgba(0,168,255,0.2)]
  hover:bg-[linear-gradient(135deg,rgba(0,168,255,0.08),rgba(26,26,26,0.3))]
  hover:before:scale-x-100
`;

const iconClass = `
  w-[80px]
  h-[80px]
  mx-auto
  mb-[25px]
  flex
  items-center
  justify-center
  text-[40px]
  relative

  before:content-['']
  before:absolute
  before:w-full
  before:h-full
  before:bg-[linear-gradient(135deg,var(--accent-purple),var(--accent-blue))]
  before:rounded-full
  before:opacity-20
  before:animate-[pulse-glow_3s_ease-in-out_infinite]
`;

const pillarTitleClass = `
      text-[24px]
    font-bold
    uppercase
    tracking-[2px]
    mb-[15px]
    text-[var(--text-primary)]
`;

const pillarDescriptionClass = `
      text-[16px]
    text-[var(--text-secondary)]
    leading-[1.6]
`;

const About = () => {
  return (
    <section
      id="about"
      className="py-30 px-7.5 text-center bg-[linear-gradient(180deg,#000_0%,rgba(153,69,255,0.02)_50%,var(--primary-black)_100%)] relative overflow-hidden"
    >
      <Container>
        <div className="w-full h-0.5 mx-auto mb-15 relative overflow-hidden bg-carbon-medium before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[linear-gradient(90deg,transparent,var(--accent-red)_20%,var(--accent-blue)_40%,var(--accent-green)_60%,var(--accent-purple)_80%,transparent)] before:animate-[prism-sweep_4s_ease-in-out_infinite]" />
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
          Code With Purpose
          <br />
          Design With Impact
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
          I believe great interfaces are built where thoughtful design meets
          solid engineering. I create responsive and performant web experiences
          with modern technologies, clean architecture, and a strong attention
          to detail.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12.5 mb-15">
          <div className={pillarClass}>
            <div className={iconClass}>
              <IoCodeSlash />
            </div>

            <h3 className={pillarTitleClass}>Clean Code</h3>

            <p className={pillarDescriptionClass}>
              I focus on writing clean, maintainable code with clear structure
              and reusable components, making every project easier to
              understand, improve, and scale.
            </p>
          </div>

          <div className={pillarClass}>
            <div className={iconClass}>
              <RiFocus2Fill />
            </div>

            <h3 className={pillarTitleClass}>User Focus</h3>

            <p className={pillarDescriptionClass}>
              Every interface should feel intuitive and responsive. I care about
              creating experiences that are visually engaging, accessible, and
              enjoyable to use across different devices.
            </p>
          </div>

          <div className={pillarClass}>
            <div className={iconClass}>
              <FaArrowTrendUp />
            </div>

            <h3 className={pillarTitleClass}>Continuous Growth</h3>

            <p className={pillarDescriptionClass}>
              Web development is constantly evolving, so I keep learning,
              exploring new technologies, and refining my skills to build better
              experiences with every project.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
