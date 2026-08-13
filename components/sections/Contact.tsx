"use client";

import Container from "../layout/Container";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  email: z.string().email("Please enter a valid email address"),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must not exceed 100 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const infoItemClass = `
  flex
  items-center
  mb-[30px]
  p-5
  bg-[var(--carbon-dark)]
  rounded-[10px]
  transition-all
  duration-300
  ease-in-out
  no-underline
  cursor-pointer
  relative
  overflow-hidden
  group

  before:content-['']
  before:absolute
  before:top-0
  before:left-[-100%]
  before:w-full
  before:h-full
  before:bg-[linear-gradient(90deg,transparent,rgba(69,171,255,0.1),transparent)]
  before:transition-[left]
  before:duration-500
  before:ease-in-out

  hover:before:left-[100%]

  hover:translate-x-[10px]
  hover:bg-[rgba(69,171,255,0.1)]
  hover:shadow-[0_5px_20px_rgba(69,_171,_255,_0.2)]
`;

const infoIconClass = `
  w-[50px]
  h-[50px]
  bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-cyan))]
  rounded-full
  flex
  items-center
  justify-center
  mr-5
  text-[var(--text-primary)]
  text-[20px]
  shrink-0
  transition-all
  duration-300
  ease-in-out
  group-hover:scale-110
  group-hover:rotate-[10deg]
  group-hover:shadow-[0_8px_25px_rgba(69,_171,_255,_0.4)]
`;

const infoText_h4_Class = `
    text-start
    text-[var(--text-primary)]
    mb-[5px]
    text-[16px]
    uppercase
    tracking-[1px]
    transition-all
    duration-300
    ease-in-out
    group-hover:text-[var(--accent-cyan)]
  `;

const infoText_P_Class = `text-text-secondary text-[11px] md:text-[14px] transition-All duration-300 group-hover:text-text-primary after:content-['↗'] after:ml-[6px] after:text-[12px] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100`;
const formLabelClass = `block text-text-secondary mb-2.5 uppercase text-[12px] text-start tracking-[1px]`;
const formInputsClass = `
  w-full
  p-[15px]
  bg-[var(--carbon-dark)]
  border
  border-[var(--metal-dark)]
  rounded-[8px]
  text-[var(--text-primary)]
  text-[14px]
  transition-all
  duration-300
  ease-in-out
  focus:outline-none
  focus:border-[var(--accent-cyan)]
  focus:shadow-[0_5px_20px_rgba(69,_171,_255,_0.2)]
`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "Failed to send message.");
        return;
      }

      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <section
      id="contact"
      className="py-30 text-center bg-[linear-gradient(180deg,var(--primary-black)_0%,rgba(153,69,255,0.02)_50%,#000_100%)] relative"
    >
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-[3px] mb-5 bg-[linear-gradient(135deg,var(--text-primary),var(--accent-cyan))] bg-clip-text text-transparent">
            Initialize Connection
          </h2>
          <p className="text-text-secondary text-[18px] max-w-150 mx-auto">
            Have a project in mind? Let&#39;s build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
          <div className="p-5 rounded-[20px] bg-[linear-gradient(135deg,rgba(42,42,42,0.3),rgba(26,26,26,0.5))] border border-metal-dark">
            <a
              href="https://maps.app.goo.gl/oVvtqDjnWf7xkghF6"
              target="_blank"
              rel="noopener noreferrer"
              className={infoItemClass}
            >
              <div className={infoIconClass}>
                <FaLocationDot />
              </div>
              <div className="info-text">
                <h4 className={infoText_h4_Class}>Location</h4>
                <p className={infoText_P_Class}>6th Of October, Egypt</p>
              </div>
            </a>

            <a
              href="mailto:ma7moud.3la2.2ldeen@gmail.com"
              className={infoItemClass}
            >
              <div className={infoIconClass}>
                <IoMail />
              </div>
              <div className="info-text">
                <h4 className={infoText_h4_Class}>Email</h4>
                <p className={infoText_P_Class}>
                  ma7moud.3la2.2ldeen@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+201096901703" className={infoItemClass}>
              <div className={infoIconClass}>
                <FaPhone />
              </div>
              <div className="info-text">
                <h4 className={infoText_h4_Class}>Phone</h4>
                <p className={infoText_P_Class}>+2 0109 690 1703</p>
              </div>
            </a>
          </div>

          <form
            className="p-5 rounded-[20px] bg-[linear-gradient(135deg,rgba(42,42,42,0.3),rgba(26,26,26,0.5))] border border-metal-dark"
            id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6.25">
              <label htmlFor="name" className={formLabelClass}>
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={formInputsClass}
              />
              {errors.name && (
                <p className="text-start mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-6.25">
              <label htmlFor="email" className={formLabelClass}>
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={formInputsClass}
              />
              {errors.email && (
                <p className="text-start mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6.25">
              <label htmlFor="subject" className={formLabelClass}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject")}
                className={formInputsClass}
              />
              {errors.subject && (
                <p className="text-start mt-2 text-sm text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-6.25">
              <label htmlFor="message" className={formLabelClass}>
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                className={`${formInputsClass} resize-y min-h-30`}
              ></textarea>
              {errors.message && (
                <p className="text-start mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3.75 bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-cyan))] border-none rounded-lg text-text-primary text-[16px] font-bold uppercase tracking-[2px] cursor-pointer transition-all duration-300 shadow-[0_5px_15px_rgba(69,171,255,0.3)] hover:shadow-[0_8px_25px_rgba(69,171,255,0.5)] hover:-translate-y-0.75"
            >
              {isSubmitting ? "Transmitting..." : "Transmit Message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
