import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { AssessmentDialog } from "./AssessmentDialog";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Safety", href: "/safety" },
    { name: "Eligibility", href: "/eligibility" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <div className="bg-[var(--sage-dark)] text-white text-center text-xs py-2 px-4 tracking-wide font-light flex items-center justify-center gap-2">
        Physician-guided ketamine therapy — delivered to your door <span className="hidden sm:inline">·</span>
        <AssessmentDialog>
          <button className="underline hover:text-[var(--cream)] transition-colors">
            Take the free assessment &rarr;
          </button>
        </AssessmentDialog>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--cream)]/80 backdrop-blur-md border-b border-[var(--charcoal)]/5 py-4" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-medium tracking-tight text-[var(--charcoal)]">
            Lucid
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-7 text-[13px] uppercase tracking-widest font-medium text-[var(--charcoal)]/70">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-[var(--sage-dark)] transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            <AssessmentDialog>
              <button className="bg-[var(--charcoal)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--sage-dark)] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Get Started
              </button>
            </AssessmentDialog>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--charcoal)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[var(--cream)] border-b border-[var(--charcoal)]/5 p-6 flex flex-col gap-6 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--charcoal)] font-medium text-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--charcoal)] font-medium text-lg"
            >
              Contact
            </Link>
            <AssessmentDialog>
              <button className="bg-[var(--charcoal)] text-white px-6 py-3 rounded-full text-base font-medium w-full mt-4">
                Get Started
              </button>
            </AssessmentDialog>
          </div>
        )}
      </nav>
    </>
  );
}
