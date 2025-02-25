import React from 'react';
import { MapPin, Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
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
    <footer className="bg-black text-gray-300 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-100">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span>R.M.K. Engineering College, Kavaraipettai, Gummudipoondi, Tamil Nadu, 601206</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>blitzkriegeee@rmkec.ac.in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-100">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-primary-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-100">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/blitzkrieg_2k25/" className="hover:text-primary-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2025 BlitzKrieg. Soru ku naanga guarantee.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

