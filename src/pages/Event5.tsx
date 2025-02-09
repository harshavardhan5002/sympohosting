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
              Locked In
              <span className="block bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
              A Mission to Save the World!

              </span>
            </h1>

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
              { icon: <Calendar className="h-6 w-6" />, text: "March 17, 2025" },
              { icon: <Clock className="h-6 w-6" />, text: "10:30 AM - 1.00 pm " },
              { icon: <MapPin className="h-6 w-6" />, text: "Machines Lab" },
              { icon: <Users className="h-6 w-6" />, text: " Team of 2-3 members" },
              { icon: <Trophy className="h-6 w-6" />, text: "Cash prizes" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <div className="text-primary-500">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>


      </section>

      {/* Tournament Format */}
      {/* Submission Guidelines */}
           <section>
             <h2 className="text-3xl font-bold mb-8 text-primary-100">Rules</h2>
             <div className="grid md:grid-cols-2 gap-8">
               {[
                 {
                   title: "Format",
                   items: [

          "Need to save the world from the evil forces",
          "Teams will be given a set of clues to solve the mystery",
          "The team that solves the mystery faster will be declared the winner",
                   ]
                 },
                 {
                   title: "Evaluation Criteria",
                   items: [
                     "Teams will be judged on the time taken to solve the mystery",
                     "Top 2 teams will be prized",


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
            <section>
                   <h2 className="text-3xl font-bold mb-8 text-primary-100">Event Timeline</h2>
                   <div className="space-y-6">
                     {[
                       { time: "10:00 AM", event: "Registration & Team Formation" },
                       { time: "11:30 AM", event: "Presentation" },
                       { time: "12.00 PM", event: "Judging" },

                       { time: "1.00 PM", event: "Winners Announcements" }
                     ].map((item, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.1 }}
                         className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm flex items-center"
                       >
                         <div className="w-32 font-bold text-primary-400">{item.time}</div>
                         <div className="text-gray-300">{item.event}</div>
                       </motion.div>
                     ))}
                   </div>
                 </section>

    </div>
  );
};

export default Event5;

