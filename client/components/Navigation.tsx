import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/doctor", label: "Our Doctor" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-3 hover-elevate active-elevate-2 transition-all duration-300 px-3 py-2 rounded-lg cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">RH</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-lg leading-none">RAJA Health Care</div>
              <div className="text-xs text-muted-foreground">Neurology Clinic</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-elevate active-elevate-2 ${
                  location === item.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-phone">
            <Phone className="w-4 h-4" />
            <span className="font-medium">+91 98765 43210</span>
          </a>
          <Link href="/book-appointment" data-testid="link-book-cta">
            <Button className="shadow-md">Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover-elevate active-elevate-2"
          aria-label="Toggle menu"
          data-testid="button-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover-elevate active-elevate-2 ${
                    location === item.path
                      ? "text-primary bg-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground" data-testid="link-mobile-phone">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <Link href="/book-appointment" data-testid="link-mobile-book">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
