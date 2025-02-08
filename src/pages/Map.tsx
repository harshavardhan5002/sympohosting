import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Map = () => {
  const latitude = 13.356967729823818;
  const longitude = 80.14212951619321;
  // Simplified embed URL with 'q' and 'output=embed'
  const embedURL = `https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-500 text-transparent bg-clip-text">
            Venue Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find us easily at the heart of the campus.
          </p>
        </motion.div>
      </section>

      {/* Map Embed */}
      <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
        <motion.div>
          <div className="w-full aspect-video overflow-hidden rounded-xl">
            <iframe
              src={embedURL}
              width="100%"
              height="650"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Symposium Venue"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Address and Contact */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
          <MapPin className="h-12 w-12 text-primary-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-primary-100">Event Location</h2>
          <address className="text-gray-300 not-italic space-y-2">
            <p>R.M.K. Engineering College</p>
            <p>Kavaraipettai</p>
            <p>Gummudipoondi, Tamil Nadu, 601206.</p>
          </address>
        </motion.div>

        <motion.div>
          <h2 className="text-2xl font-bold mb-4 text-primary-100">Contact Information</h2>
          <div className="text-gray-300 space-y-2">
            <p>For any queries, please contact the event organizers:</p>
            <p>
              Email:
              <a
                href="mailto:blitzkriegeee@rmkec.ac.in"
                className="text-primary-400 hover:underline"
              >
                blitzkriegeee@rmkec.ac.in
              </a>
            </p>
            <p>Phone: +91 044 6790 6701</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Map;

