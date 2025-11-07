import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/doctor", label: "Our Doctor" },
    { path: "/contact", label: "Contact" },
    { path: "/book-appointment", label: "Book Appointment" },
  ];

  const topServices = [
    "Stroke Management",
    "Epilepsy Treatment",
    "Headache Clinic",
    "Movement Disorders",
    "Memory Care",
  ];

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">RH</span>
              </div>
              <div>
                <div className="font-serif font-bold text-lg leading-none">RAJA Health Care</div>
                <div className="text-xs text-muted-foreground">Neurology Clinic</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Partner in Neurological Wellness. Providing exceptional, compassionate care for over 15 years.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Our Services</h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service}>
                  <Link href="/services" data-testid={`link-footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>Arisipalayam</div>
                  <div>Salem, Tamil Nadu</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@rajahealthcare.com" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-email">
                  info@rajahealthcare.com
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 1:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RAJA Health Care Clinic. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Dr. Raja, M.D., D.M. (Neurology)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
