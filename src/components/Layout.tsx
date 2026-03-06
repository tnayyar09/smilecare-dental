import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as React from "react";
import { Menu, X, Phone, Calendar, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-teal-900 text-white py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" /> 123 Health Avenue, Mumbai, India
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-3 w-3" /> Mon - Sat: 9:00 AM - 8:00 PM
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-200 transition-colors"><Facebook className="h-3 w-3" /></a>
            <a href="#" className="hover:text-teal-200 transition-colors"><Instagram className="h-3 w-3" /></a>
            <a href="#" className="hover:text-teal-200 transition-colors"><Twitter className="h-3 w-3" /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-teal-600 text-white p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 2C7.03 2 3 6.03 3 11v2c0 4.97 4.03 9 9 9s9-4.03 9-9v-2c0-4.97-4.03-9-9-9z" />
                <path d="M9 11h6" />
                <path d="M12 8v6" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">SmileCare<span className="text-teal-600">Dental</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  location.pathname === link.path ? "text-teal-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book-appointment">
              <Button>Book Appointment</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 bg-white overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 px-4 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-teal-50 text-teal-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/book-appointment" className="w-full">
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="bg-teal-600 p-1.5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M12 2C7.03 2 3 6.03 3 11v2c0 4.97 4.03 9 9 9s9-4.03 9-9v-2c0-4.97-4.03-9-9-9z" />
                    <path d="M9 11h6" />
                    <path d="M12 8v6" />
                  </svg>
                </div>
                <span className="text-xl font-bold">SmileCare<span className="text-teal-500">Dental</span></span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Providing world-class dental care with a gentle touch. Our team of specialists is dedicated to your oral health and beautiful smile.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
                <li><Link to="/book-appointment" className="hover:text-teal-400 transition-colors">Book Appointment</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">General Dentistry</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Cosmetic Dentistry</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Orthodontics</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Dental Implants</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Pediatric Dentistry</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-teal-500 shrink-0" />
                  <span>123 Health Avenue, Bandra West, Mumbai, Maharashtra 400050</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal-500 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-teal-500 shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
