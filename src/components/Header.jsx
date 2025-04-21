// components/Header.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Removed framer-motion import as it might be causing issues
import { Menu, X, ChevronDown, Bell, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Our History', path: '/about#history' },
        { name: 'Vision & Mission', path: '/about#vision' },
        { name: 'Faculty', path: '/about#faculty' },
        { name: 'Infrastructure', path: '/about#infrastructure' },
      ]
    },
    { 
      name: 'Academics', 
      path: '/academics',
      dropdown: [
        { name: 'Class 10', path: '/class-10' },
        { name: 'Class 12', path: '/class-12' },
        { name: 'Curriculum', path: '/curriculum' },
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Results', path: '/results' },
    { name: 'Fees', path: '/fees' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="relative w-12 h-12 bg-blue-600 rounded-lg overflow-hidden shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <div className="absolute inset-0 bg-blue-800 rounded-lg transform rotate-45 scale-75"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">S</div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">School Name</h1>
                <p className="text-xs text-gray-500">Education for Excellence</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center px-3 py-2 rounded-md font-medium transition-all duration-200
                          ${activeDropdown === item.name ? 'text-white bg-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1">
                            {item.dropdown.map((dropItem, dropIndex) => (
                              <Link href={dropItem.path} key={dropIndex}>
                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                                  {dropItem.name}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.path}>
                      <div className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                        {item.name}
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            
            <Link href="/admissions">
              <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200">
                Apply Now
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1 border-l-2 border-blue-200">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <Link href={dropItem.path} key={dropIndex}>
                            <div className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                              {dropItem.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.path}>
                    <div className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
            
            <div className="mt-4 flex justify-center">
              <Link href="/admissions">
                <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow-md w-full text-center">
                  Apply Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;