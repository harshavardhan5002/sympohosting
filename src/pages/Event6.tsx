import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Event5 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50" />
        </div>

        <div className="relative z-10 py-24 px-6 md:px-12">
          <motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gaming Tournament:
              <span className="block bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
                Tech Warriors
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Compete in various gaming challenges and prove your skills in the ultimate gaming showdown.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary-100">Event Details</h2>
          <div className="grid gap-6">
            {[
              { icon: <Calendar className="h-6 w-6" />, text: "March 17, 2024" },
              { icon: <Clock className="h-6 w-6" />, text: "10:00 AM - 8:00 PM" },
              { icon: <MapPin className="h-6 w-6" />, text: "Gaming Arena" },
              { icon: <Users className="h-6 w-6" />, text: "Individual & Team Events" },
              { icon: <Trophy className="h-6 w-6" />, text: "Prizes worth ₹80,000" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <div className="text-primary-500">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-primary-100">Tournament Games</h2>
          <ul className="space-y-4">
            {[
              "Valorant (5v5)",
              "FIFA 24 (1v1)",
              "CS:GO (5v5)",
              "Mobile Legends (5v5)"
            ].map((game, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-sm mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-300">{game}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Tournament Format */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-primary-100">Tournament Format</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Preliminary Rounds",
              items: [
                "Group Stage Matches",
                "Best of 1 Format",
                "Top 2 Teams Qualify",
                "Round Robin System"
              ]
            },
            {
              title: "Finals",
              items: [
                "Single Elimination",
                "Best of 3 Format",
                "Live Streaming",
                "Professional Casting"
              ]
            }
          ].map((section, index) => (
            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-primary-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Event5;

