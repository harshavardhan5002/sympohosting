import React, { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default page reload
  
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
  
    // Google Form Submission URL
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfMU-A6mTSW17_-rSUOd9zWEqtU9UiYJEnS4M_Of1wh90DuUQ/formResponse";
  
    // Create URL parameters
    const data = new URLSearchParams();
    data.append("entry.1121179653", formData.get("name") as string); // Name
    data.append("entry.1494518428", formData.get("email") as string); // Email
    data.append("entry.468910797", formData.get("phone") as string); // Phone
    data.append("entry.71843407", formData.get("college") as string); // College
    data.append("entry.1695391766", formData.get("department") as string); // Department
    data.append("entry.161650833", formData.get("year") as string); // Year
  
    // Handle multiple checkbox selections
    form.querySelectorAll<HTMLInputElement>('input[name="events"]:checked').forEach((checkbox) => {
      data.append("entry.402450938", checkbox.value); // Multiple event selections
    });
  
    // ✅ Show success message immediately after clicking submit
    setIsSubmitted(true); 
  
    // ✅ Submit form data to Google Form in the background
    fetch(formUrl, {
      method: "POST",
      body: data,
      mode: "no-cors", // Prevent CORS errors
    });
  
    // ✅ Reset the form fields
    form.reset();
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center">
      <div className="max-w-lg w-full bg-black/50 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-400">
            Register Now
          </h1>
        </motion.div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-400">
              Name
            </label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm sm:text-lg p-1" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-400">
              Email
            </label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm sm:text-lg p-1" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary-400">
              Phone
            </label>
            <input type="text" id="phone" name="phone" required className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm sm:text-lg p-1" />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium text-primary-400">
              College
            </label>
            <input type="text" id="college" name="college" required className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm sm:text-lg p-1" />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-primary-400">
              Department
            </label>
            <input type="text" id="department" name="department" required className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm sm:text-lg p-1" />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-primary-400">
              Year of Study
            </label>
            <input type="text" id="year" name="year" required className="mt-1 block w-full bg-gray-900 border-gray-700 text-white rounded-md shadow-sm sm:text-lg p-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-400">Select Event(s):</label>
            <div className="space-y-2">
              {["Paper Presentation", "El Casino", "Electro Quest", "Circuit Debugging", "Locked In"].map((event, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input type="checkbox" id={`event${index + 1}`} name="events" value={event} className="appearance-none w-5 h-5 border border-gray-700 rounded-md cursor-pointer checked:bg-primary-500" />
                  <label htmlFor={`event${index + 1}`} className="text-white cursor-pointer">{event}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full py-3 px-6 bg-primary-500 text-white font-bold rounded-md shadow-lg transform hover:scale-105 transition-transform">
              Click to Submit
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Success Dialog Box */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully!</h2>
            <p>Thank you for registering. We will get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
