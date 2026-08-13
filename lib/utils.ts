import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string){
  const section = document.getElementById(sectionId);
  const headerBottom = 100;
  if(section) {
    const targetPosition = section.offsetTop - headerBottom;
    window.scrollTo({
      top: targetPosition,
    })
  }
}