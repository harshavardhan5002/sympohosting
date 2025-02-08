import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Event1 from './pages/Event1';
import Event2 from './pages/Event2';
import Event3 from './pages/Event3';
import Event4 from './pages/Event4';
import Event5 from './pages/Event5';
import Map from './pages/Map';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-light relative">
        {/* Global Video Background */}
        <div className="video-background fixed inset-0 z-[-1] overflow-hidden"> {/* z-[-1] to put it in the background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>

        <Navbar />
        <main className="pt-16 relative z-0"> {/* Main content container */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/event1" element={<Event1 />} />
            <Route path="/event2" element={<Event2 />} />
            <Route path="/event3" element={<Event3 />} />
            <Route path="/event4" element={<Event4 />} />
            <Route path="/event5" element={<Event5 />} />
            <Route path="/map" element={<Map />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
