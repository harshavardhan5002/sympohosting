import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: '' },
    { path: '/about', label: 'About Us' },
    { path: '/rules', label: 'Rules' },
    { path: '/event1', label: 'Paper Presentation' },
    { path: '/event2', label: 'El Casino' },
    { path: '/event3', label: 'Electro Quest' },
    { path: '/event4', label: 'Circuit Debugging' },
    { path: '/event5', label: 'Locked In' },

    { path: '/map', label: 'Map' },
    { path: '/register', label: 'Register' },
  ];

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16"> {/* justify-between for mobile, justify-center for desktop */}
          <Link to="/" className="flex items-center space-x-2 absolute left-4 md:relative md:left-auto"> {/* absolute positioning for mobile logo */}
            <Sparkles className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-primary-100 whitespace-nowrap">
              BlitzKrieg 2K25
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - moved to right side for mobile view */}
          <div className="md:hidden absolute right-4"> {/* absolute positioning for mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Left-Aligned Navigation Links for Mobile */}
        {isOpen && (
          <motion.div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95"> {/* Updated background color here */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-primary-100 block px-3 py-2 rounded-md text-base font-medium text-left" // Align text to left
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

