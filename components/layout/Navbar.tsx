"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? "bg-black/70 backdrop-blur-lg border-b border-white/10" : "bg-black/30 backdrop-blur-md"}
  `}
    >
      {/* glass effect background */}
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div
          className={`
    max-w-7xl mx-auto px-6 flex items-center justify-between
    transition-all duration-300
    ${scrolled ? "h-16" : "h-20"}
  `}
        >
          {/* Logo */}
          <div
            className={`
    text-white font-bold tracking-widest transition-all duration-300
    ${scrolled ? "text-base" : "text-lg"}
  `}
          >
            Coach
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-neutral-300">
            <a className="hover:text-white transition" href="#programs">
              Programs
            </a>
            <a className="hover:text-white transition" href="#transformations">
              Results
            </a>
            <a className="hover:text-white transition" href="#about">
              About
            </a>
            <a className="hover:text-white transition" href="#faq">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="#programs">Explore Coaching</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 space-y-4 text-neutral-300" onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}>
            <a className="block" href="#programs">
              Programs
            </a>
            <a className="block" href="#transformations">
              Results
            </a>
            <a className="block" href="#about">
              About
            </a>
            <a className="block" href="#faq">
              FAQ
            </a>

            <div className="pt-4">
              <Button href="#programs" className="w-full">Explore Coaching</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
