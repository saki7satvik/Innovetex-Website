import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import "./style.css"
import { auth, provider, signInWithPopup } from "../firebase/firebase";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [eventDetailsModal, setEventDetailsModal] = useState({
    isOpen: false,
    data: null,
  });

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  const eventDetails = {
    Event1: {
      title: "CodeRush (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event2: {
      title: "PITCHATHON ",
      description:
        "Test your cybersecurity skills in this capture the flag event",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event3: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event4: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event5: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },Event6: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },Event7: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event8: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event9: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event10: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event11: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    Event12: {
      title: "CodeRush2 (24Hrs Hackathon)",
      description:
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
      fee: "TBA",
      date: "April 15, 2025",
      time: "10:00 AM",
      venue: "Conference Hall A",      
    },
    
  };

  // Initialize typed.js for moving letters
  useEffect(() => {
    new Typed("#element", {
      strings: ["Innovatex 2.0 ", " Innovatex 3.0"],
      typeSpeed: 50,
    });
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const eventDate = new Date("April 15, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Event Details Modal
  const openEventDetailsModal = (eventKey) => {
    setEventDetailsModal({ isOpen: true, data: eventDetails[eventKey] });
  };

 

  const closeEventDetailsModal = () => {
    setEventDetailsModal({ isOpen: false, data: null });
  };

  // Glitter effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glitter = document.createElement("div");
      glitter.className = "glitter fixed";
      glitter.style.left = `${e.pageX}px`;
      glitter.style.top = `${e.pageY}px`;
      glitter.style.width = `${Math.random() * 10 + 5}px`;
      glitter.style.height = `${Math.random() * 10 + 5}px`;
      glitter.style.opacity = Math.random();

      document.body.appendChild(glitter);
      setTimeout(() => glitter.remove(), 600); // Matches the CSS animation duration
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="font-orbitron">
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-black/70 border-b border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl   font-bold text  ">
              INNOVATEX 3.0
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400">
                Home
              </a>
              <a href="#events" className="text-white hover:text-cyan-400">
                Events
              </a>
              <a href="#workshops" className="text-white hover:text-cyan-400">
                Workshops
              </a>
              <a href="#about" className="text-white hover:text-cyan-400">
                About
              </a>
              <a href="#contact" className="text-white hover:text-cyan-400">
                Contact
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="px-4 py-2 space-y-3 bg-black/90 md:hidden">
            <a href="#home" className="block text-white hover:text-cyan-400">
              Home
            </a>
            <a href="#events" className="block text-white hover:text-cyan-400">
              Events
            </a>
            <a href="#workshops" className="block text-white hover:text-cyan-400">
              Workshops
            </a>
            <a href="#about" className="block text-white hover:text-cyan-400">
              About
            </a>
            <a href="#contact" className="block text-white hover:text-cyan-400">
              Contact
            </a>
          </div>
        )}
      </nav>

   
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10"
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch">
            <span className="bg-clip-text text-transparent text-center bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              <span id="element" className="justify-center self-center"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Unleash Innovation. Embrace the Future.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button onClick={handleGoogleSignIn} className="gradient-border bg-black px-8 py-3 rounded-lg text-cyan-400 hover:text-white">
              Register Now
            </button>
            <button className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              Explore Events
            </button>
          </div>
          <div className="mt-12">
            <div className="text-2xl mb-4 text-cyan-400">Event Starts In</div>
            <div className="flex justify-center gap-4" id="countdown">
              <div className="bg-black/50 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-3xl font-bold">{countdown.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-3xl font-bold">{countdown.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-3xl font-bold">{countdown.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-3xl font-bold">{countdown.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
            Featured Events
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(eventDetails).map((key) => (
              <div
                key={key}
                className="gradient-border bg-black p-6 rounded-xl"
              >
                <div className="text-cyan-400 text-xl mb-4">
                  {eventDetails[key].title}
                </div>
                <p className="text-gray-300 mb-4">
                  {eventDetails[key].description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-fuchsia-400">
                    Prize: {eventDetails[key].fee}
                  </span>
                  <button
                    onClick={() => openEventDetailsModal(key)}
                    className="px-2 py-3 bg-cyan-400 text-black rounded hover:bg-cyan-300"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => openEventDetailsModal(key)}
                    className="px-2 py-3 bg-cyan-400 text-black rounded hover:bg-cyan-300"
                  >
                    Register
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="workshops" class="py-20 bg-black/50">
        <div class="container mx-auto p-10">
            <h2 class="orbitron text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">Technical Workshops</h2>
            <div class="grid md:grid-cols-2 gap-8">
               
                <div class="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/30">
                    <div class="text-xl mb-4 text-cyan-400">Web3 Development</div>
                    <p class="text-gray-300 mb-4">Learn blockchain development and create your first DApp</p>
                    <div class="flex items-center gap-4 mb-4">
                        <i class="bi bi-calendar text-fuchsia-400"></i>
                        <span>March 15, 2024</span>
                    </div>
                    <button class="w-full py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300">Join Workshop</button>
                </div>
                
                <div class="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/30">
                    <div class="text-xl mb-4 text-cyan-400">AI/ML Workshop</div>
                    <p class="text-gray-300 mb-4">Deep dive into machine learning algorithms and neural networks</p>
                    <div class="flex items-center gap-4 mb-4">
                        <i class="bi bi-calendar text-fuchsia-400"></i>
                        <span>March 16, 2024</span>
                    </div>
                    <button class="w-full py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300">Join Workshop</button>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" class="py-20 backdrop-blur-3xl">
        <div class="container mx-auto px-4">
            <h2 class="orbitron text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">Get In Touch</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="gradient-border bg-black p-6 rounded-xl">
                    <form id="contact-form" class="space-y-4">
                        <div>
                            <label class="block text-cyan-400 mb-2">Name</label>
                            <input type="text" class="w-full bg-gray-900 border border-cyan-500/30 rounded p-2 text-white" required/>
                        </div>
                        <div>
                            <label class="block text-cyan-400 mb-2">Email</label>
                            <input type="email" class="w-full bg-gray-900 border border-cyan-500/30 rounded p-2 text-white" required/>
                        </div>
                        <div>
                            <label class="block text-cyan-400 mb-2">Message</label>
                            <textarea class="w-full bg-gray-900 border border-cyan-500/30 rounded p-2 text-white h-32" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-cyan-400 text-black py-2 rounded hover:bg-cyan-300">Send Message</button>
                    </form>
                </div>
                <div class="space-y-6">
                    <div class="flex items-center gap-4">
                        <i class="bi bi-geo-alt text-2xl text-cyan-400"></i>
                        <div>
                            <h3 class="text-xl text-cyan-400">Location</h3>
                            <p class="text-gray-300">Presidency University Bangalore, Rajanukunte</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <i class="bi bi-envelope text-2xl text-cyan-400"></i>
                        <div>
                            <h3 class="text-xl text-cyan-400">Email</h3>
                            <p class="text-gray-300">info@nexus2024.com</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <i class="bi bi-phone text-2xl text-cyan-400"></i>
                        <div>
                            <h3 class="text-xl text-cyan-400">Phone</h3>
                            <p class="text-gray-300">+91 98765 43210</p>
                        </div>
                    </div>
                    <div class="flex gap-4 mt-8">
                        <a href="#" class="text-2xl text-cyan-400 hover:text-cyan-300"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-2xl text-cyan-400 hover:text-cyan-300"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-2xl text-cyan-400 hover:text-cyan-300"><i class="bi bi-linkedin"></i></a>
                        <a href="#" class="text-2xl text-cyan-400 hover:text-cyan-300"><i class="bi bi-twitter-x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="py-8 border-t border-cyan-500/30">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400">© 2025 Presidency university. All rights reserved.</p>
        </div>
    </footer>

    

      {/* Event Details Modal */}
      {eventDetailsModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-black text-white p-6 rounded-lg gradient-border relative max-h-[90vh] w-full md:w-[60%] lg:w-[50%] overflow-y-auto custom-scrollbar">
            <button
              onClick={closeEventDetailsModal}
              className="absolute top-3 right-3 text-2xl text-cyan-400 hover:text-fuchsia-400"
            >
              &times;
            </button>
            <h2 className="text-center text-2xl font-bold text-cyan-400 mb-6">
              {eventDetailsModal.data.title}
            </h2>
            <p className="text-gray-300 mb-4">{eventDetailsModal.data.description}</p>
            <ul className="space-y-2">
              <li>
                <strong>Entry Fee:</strong> {eventDetailsModal.data.fee}
              </li>
              <li>
                <strong>Date:</strong> {eventDetailsModal.data.date}
              </li>
              <li>
                <strong>Time:</strong> {eventDetailsModal.data.time}
              </li>
              <li>
                <strong>Venue:</strong> {eventDetailsModal.data.venue}
              </li>
              
            </ul>
          </div>
        </div>
      )}

<div id="registration-modal" class="hidden fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
        <div class="bg-black text-white p-6 rounded-lg max-w-lg w-full gradient-border relative">
          <button id="close-modal" class="absolute top-3 right-3 text-2xl text-cyan-400 hover:text-fuchsia-400 transition-colors">&times;</button>
          <h2 class="text-center orbitron text-2xl p-5 font-bold text-cyan-400 mb-6">Register Now</h2>
          <form id="registration-form" class="space-y-4">
          
            <div>
                <div>
                    <label class="block text-cyan-400 mb-2">Selected Event </label>
                    <input
                    type="text"
                    id="selected-event"
                    name="event"
                    readonly
                    class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                    />
                </div>
            </div>
            <div>
                <label class="block text-cyan-400 mb-2">Team Name *</label>
                <input type="text" id="team-name" name="teamName" placeholder="Enter team name" class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white" required/>
              </div>
          
            <div>
              <label class="block text-cyan-400 mb-2">Team Leader Name *</label>
              <input type="text" id="team-leader-name" name="teamLeaderName" placeholder="Enter your full name" class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white" required/>
            </div>
            <div>
              <label class="block text-cyan-400 mb-2">Team Leader Email *</label>
              <input type="email" id="team-leader-email" name="teamLeaderEmail" placeholder="Enter your email" class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white" />
            </div>
            <div>
              <label class="block text-cyan-400 mb-2">Team Leader Phone *</label>
              <input type="tel" id="team-leader-phone" name="teamLeaderPhone" placeholder="Enter your phone number" class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white" required/>
            </div>
           
            <div>
              <label class="block text-cyan-400 mb-2">Select Number of Team Members *</label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input type="radio" name="teamSize" value="2" class="mr-2" required/> 2
                </label>
                <label class="flex items-center">
                  <input type="radio" name="teamSize" value="3" class="mr-2" required/> 3
                </label>
                <label class="flex items-center">
                  <input type="radio" name="teamSize" value="4" class="mr-2" required/> 4
                </label>
              </div>
            </div>
            
            <div id="team-members-section" class="space-y-4"></div>
            
            <div>
              <p class="text-cyan-400">Total Amount: <span id="total-amount" class="text-white">₹0</span></p>
            </div>
            <button type="submit" class="w-full bg-cyan-400 py-2 rounded hover:bg-cyan-300 text-black font-bold">Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default App;
