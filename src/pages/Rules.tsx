import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, Info } from 'lucide-react';

const Rules = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Header */}
      <motion.section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
          Rules & Guidelines
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Please read and follow these guidelines to ensure a smooth and fair experience for all participants.
        </p>
      </motion.section>

      {/* General Rules */}
      <section>
        <motion.div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-primary-500 mr-3" />
            <h2 className="text-2xl font-bold text-primary-100">General Rules</h2>
          </div>
          <ul className="space-y-4">
            {[
              "Students must bring their respective college ID card.",
              
              "Confirmation mail for selection will be sent to your registered mail id.",
              "Participants must only use the college bus which will be available on March 17th.",
              
              
              "No on spot Registration Allowed."
            ].map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Event Specific Rules */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-primary-100">Event Specific Rules</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Technical Paper Presentation",
              rules: [
                "Maximum 3 members per team",
                "Presentation time: 5-8 minutes",
                "Q&A session: 2 minutes",
                "Plagiarism check will be conducted"
              ]
            },
            {
              title: "EL Casino",
              rules: [
                "Maximum 3 members per team",
                "Duration:  15 minutes",
                "Internet access will be restricted",

              ]
            },
            {
              title: "Circuit Debugging",
              rules: [
                "Team size: 2-3 members",
                "Pen and Paper round",
                "Qualification Rounds will be there",
                "Hardware Debugging"
              ]
            },
            {
              title: "Electro Quest",
              rules: [
                "Team size 2-3 members",
                "Qualification Rounds will be there",


              ]
            }
          ].map((event, index) => (
            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-primary-400">{event.title}</h3>
              <ul className="space-y-3">
                {event.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <Info className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{rule}</span>
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

export default Rules;
