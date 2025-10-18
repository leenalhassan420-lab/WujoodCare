"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto px-4 lg:px-8 container">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <div className="relative flex justify-center items-center bg-primary rounded-2xl w-10 h-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
              <span className="relative font-bold text-primary-foreground text-lg">
                W
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-foreground text-xl leading-none">
                Wujood Care
              </span>
              <span className="mt-0.5 text-[10px] text-muted-foreground leading-none">
                Your Presence, Our Care
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-medium text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="font-medium text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 font-medium text-primary-foreground"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="py-2 font-medium text-muted-foreground hover:text-foreground text-sm text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="py-2 font-medium text-muted-foreground hover:text-foreground text-sm text-left transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="py-2 font-medium text-muted-foreground hover:text-foreground text-sm text-left transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-2 font-medium text-muted-foreground hover:text-foreground text-sm text-left transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 w-full text-primary-foreground"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
