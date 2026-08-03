"use client";

import { useEffect } from "react";

export function PageEnhancements() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("revealed"); });
    }, { threshold: .08, rootMargin: "0px 0px -5%" });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
