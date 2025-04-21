// components/Footer.js
import React from 'react';
import Link from 'next/link';
// import { Map, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 bg-blue-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-blue-700 rounded-lg transform rotate-45 scale-75"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">S</div>
              </div>
              <h2 className="text-xl font-bold">School Name</h2>
            </div>
            
            <p className="text-blue-200 mb-6">Providing quality education and shaping future leaders since 1985. Our mission is to nurture young minds and help them achieve excellence in all fields.</p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                {/* <Map className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" /> */}
                <p className="text-sm text-blue-100">123 Education Street, Knowledge City, State - 123456</p>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" /> */}
                <p className="text-sm text-blue-100">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" /> */}
                <p className="text-sm text-blue-100">info@schoolname.edu</p>
              </div>
              
              <div className="flex items-start space-x-3">
                {/* <Clock className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" /> */}
                <p className="text-sm text-blue-100">
                  Monday to Friday: 8:00 AM - 3:30 PM<br />
                  Saturday: 8:00 AM - 12:30 PM
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded mt-1 -mb-2"></span>
            </h3>
            
            <ul className="space-y-2">
              {[
                { href: "/about", text: "About Us" },
                { href: "/admissions", text: "Admissions" },
                { href: "/academics", text: "Academics" },
                { href: "/facilities", text: "Facilities" },
                { href: "/results", text: "Results" },
                { href: "/blog", text: "Blog" },
                { href: "/events", text: "Events" },
                { href: "/contact", text: "Contact Us" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center cursor-pointer">
                      <span className="mr-2 text-blue-400">›</span> {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Important Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded mt-1 -mb-2"></span>
            </h3>
            
            <ul className="space-y-2">
              {[
                { href: "/fees", text: "Fee Structure" },
                { href: "/admit-card", text: "Admit Card" },
                { href: "/gallery", text: "Photo Gallery" },
                { href: "/careers", text: "Careers" },
                { href: "/alumni", text: "Alumni" },
                { href: "/privacy-policy", text: "Privacy Policy" },
                { href: "/terms", text: "Terms & Conditions" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center cursor-pointer">
                      <span className="mr-2 text-blue-400">›</span> {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded mt-1 -mb-2"></span>
            </h3>
            
            <p className="text-blue-200 mb-4">Subscribe to our newsletter to receive updates and news.</p>
            
            <form className="mb-6">
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-blue-800/50 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md transition-colors duration-200 font-semibold text-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <h4 className="font-medium text-white mb-4">Follow Us:</h4>
            <div className="flex space-x-3">
              {[
                // { Icon: Facebook, href: "#" },
                // { Icon: Twitter, href: "#" },
                // { Icon: Instagram, href: "#" },
                // { Icon: Youtube, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="bg-blue-800/70 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:-translate-y-1"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {/* <ArrowUp className="w-5 h-5" /> */}
          </button>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 mt-6">
          <div className="text-center">
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} School Name. All Rights Reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/privacy">
                <span className="text-blue-300 hover:text-white text-xs cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-blue-300 hover:text-white text-xs cursor-pointer">Terms of Use</span>
              </Link>
              <Link href="/sitemap">
                <span className="text-blue-300 hover:text-white text-xs cursor-pointer">Sitemap</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;