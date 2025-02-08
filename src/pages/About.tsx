import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transition}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20"
    >
      {/* Hero Section */}
      <section className="text-center">
        <motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
            About Blitzkrieg 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Blitzkrieg is the annual technical symposium that brings together the brightest minds
            from across the country to compete, learn, and innovate.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-12">
        <motion.div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <Target className="h-12 w-12 text-primary-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
          <p className="text-gray-300">
            To create a platform that fosters innovation, encourages technical excellence,
            and builds a community of future technology leaders.
          </p>
        </motion.div>

        <motion.div>
          <Target className="h-12 w-12 text-primary-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300">
            To provide students with opportunities to showcase their technical prowess,
            learn from industry experts, and network with like-minded individuals.
          </p>
        </motion.div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center text-primary-100">Why Choose Blitzkrieg?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Award className="h-12 w-12 text-primary-500" />,
              title: "Premium Events",
              description: "Carefully curated events that challenge and inspire."
            },

            {
              icon: <Users className="h-12 w-12 text-primary-500" />,
              title: "Networking",
              description: "Connect with peers and professionals from across the country."
            }
          ].map((feature, index) => (
            <motion.div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center text-primary-100">Event Timeline</h2>
        <div className=" text-primary-500 text-center">
          {[
            { day: "Order of Events", events: ["Opening Ceremony", "Technical Paper Presentation", "El Casino","Electro Quest","Circuit Debugging","Locked In"] }

          ].map((day, index) => (
            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-primary-400">{day.day}</h3>
              <ul className="space-y-2">
                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="text-gray-300">{event}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;

