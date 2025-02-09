import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredEvents = [1, 2, 3, 4, 5];
  const eventNames = [
    "Paper Presentation",
    "El Casino",
    "Electrica Quest",
    "Circuit Debugging",
    "Locked In"
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section - Image Background */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-between h-full items-center px-4"
        >
          <div className="flex-grow flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-primary-100 mb-6"></h1>
            <p className="text-lg text-gray-400"></p>
          </div>
          <div className="pb-20">
            <Link
              to="/register"
              className="inline-flex items-center px-12 py-4 text-xl font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-7 w-7" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Video Background Section - Full Screen, After Hero */}
      <section className="relative overflow-hidden"> {/* Container for video background and subsequent sections */}
        <div className="video-background absolute inset-0" style={{ zIndex: -1 }}> {/* Video background covering viewport */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/vv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>

        {/* Features Section - On top of Video Background */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"> {/* Content sections above video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Calendar className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary-100">March 17, 2025</h3>
              <p className="text-gray-400">Day of innovation, learning, and competition</p>
            </motion.div>

            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Users className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary-100">The Energy is Electric!</h3>
              <p className="text-gray-400">Connect with tech enthusiasts from across the country</p>
            </motion.div>

            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <Trophy className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary-100">Exciting Prizes</h3>
              <p className="text-gray-400">Compete and win exciting prizes and recognition</p>
            </motion.div>
          </div>
        </section>

        {/* Events Preview Section - Also on top of Video Background */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"> {/* Content sections above video */}
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-100">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <img
                  src={`https://images.unsplash.com/photo-${event === 1 ? '1517245386807-bb43f82c33c4' : event === 2 ? '1517694712202-14dd9538aa97' : event === 3 ? '1485827404703-89b55fcc595e' : event === 4 ? '1504384764586-bb4cdc1707b0' : '1511512578047-dfb367046420'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Event ${event}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-100">{eventNames[index]}</h3>
                  <p className="text-gray-400 mb-4"></p>
                  <Link
                    to={`/event${event}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
