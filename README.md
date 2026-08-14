# Mahmoud Alaa | Frontend Developer Portfolio

A modern, dark cyberpunk-style personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
Featuring smooth animations, glow effects, floating particles, and a carbon fiber aesthetic.

**Live Demo:** [https://portfolio-five-liard-50.vercel.app](https://portfolio-five-liard-50.vercel.app)

---

## Features

- Modern **dark cyberpunk** design with carbon fiber background
- Animated overlay grid + floating particles
- Animated gradient border on the navbar
- Smooth scroll & animated headlines
- Glow effects throughout the UI
- Fully responsive design
- Working contact form (powered by Resend)
- Sections: **Hero** • **About** • **Skills** • **Projects** • **Contact**

---

## Tech Stack

| Category              | Technologies                                      |
|-----------------------|---------------------------------------------------|
| **Framework**         | Next.js + TypeScript                              |
| **Styling**           | Tailwind CSS + Pure CSS (complex styles)          |
| **Utilities**         | `clsx` + `tailwind-merge`                         |
| **Icons**             | React Icons                                       |
| **Forms & Validation**| React Hook Form + Zod                             |
| **Notifications**     | React Toastify                                    |
| **Email Service**     | Resend (via POST API route)                       |
| **Package Manager**   | pnpm                                              |

---

## Project Structure

├── app/                # Next.js App Router
├── components/         # Reusable UI components
├── data/               # Static data (projects, skills, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global & custom styles


## Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmoud-alaa-dev/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
pnpm install

# Run the development server
pnpm dev