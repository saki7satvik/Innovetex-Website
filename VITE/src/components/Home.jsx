import React, { useState, useRef, useEffect, useContext } from "react";
import Typed from "typed.js";
import "./style.css"
import { auth, provider, signInWithPopup } from "../firebase/firebase";
import { AuthContext, AuthProvider } from '../Authentication/context';
import Dashboard from "./Dashboard";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  //get the authentication from context.jsx
  const { user,signIn, signOut } = useContext(AuthContext);
  const [eventDetailsModal, setEventDetailsModal] = useState({
    isOpen: false,
    data: null,
  });

  const teamMembersSectionRef = useRef(null);

  const [selectedEvent, setSelectedEvent] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamLeaderName, setTeamLeaderName] = useState('');
  const [teamLeaderEmail, setTeamLeaderEmail] = useState(user.email);
  const [teamLeaderPhone, setTeamLeaderPhone] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [registerDetail, setRegisterDetail] = useState({ isOpen: false, data: null });

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      signIn(user);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  const handleRegistrationModalOn = async (eventDetails) => {
    if (!user.email) {
      await handleGoogleSignIn();
    }
    setSelectedEvent(eventDetails.title);
    setRegisterDetail({ isOpen: true, data: eventDetails });
  };

  const handleRegistrationModalOff = () => {
    setRegisterDetail({ isOpen: false, data: null });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDetails = {
      selectedEvent,
      teamName,
      teamLeaderName,
      teamLeaderEmail,
      teamLeaderPhone,
      teamSize,
      teamMembers: [],
    };

    const teamMemberInputs = teamMembersSectionRef.current.querySelectorAll("input");
    teamMemberInputs.forEach((input) => {
      const memberDetails = {
        memberName: input.name === "memberName" ? input.value : null,
        memberPhone: input.name === "memberPhone" ? input.value : null,
      };
      formDetails.teamMembers.push(memberDetails);
    });
    console.log("Form Details:", formDetails);

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);
        alert("Registration successful!");
        e.target.reset();
      } else {
        const error = await response.json();
        console.error("Error Response:", error);
        alert(`Registration failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setTeamSize(size);
    setTeamMembers(Array(size).fill({ memberName: '', memberPhone: '' }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
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
        "A 24-hour software hackathon challenges participants to create innovative solutions.",
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
      typeSpeed: 150,
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
              {/* create a profile page with a profile icon */}
              <a href="#profile" className="text-white hover:text-cyan-400">
                <i className="fas fa-user-circle text-2xl"></i>
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
        <Dashboard/>
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
                    onClick={() => handleRegistrationModalOn(key)}
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

{/* workshops */}
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

    {/* Contacts */}
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

      {/* Registration Modal */}
    {registerDetail.isOpen && (
      <div id="registration-modal" class="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
        <div class="bg-black text-white p-6 rounded-lg max-w-lg w-full gradient-border relative">
          <button id="close-modal" onClick={handleRegistrationModalOff} class="absolute top-3 right-3 text-2xl text-cyan-400 hover:text-fuchsia-400 transition-colors">&times;</button>
          <h2 class="text-center orbitron text-2xl font-bold text-cyan-400 mb-6">Register Now</h2>
          <form id="registration-form" class="space-y-4" onSubmit={handleFormSubmit}>
            <div>
                <label className="block text-cyan-400 mb-2">Event Name</label>
                <input
                  type="text"
                  id="selected-event"
                  name="event"
                  readOnly
                  value={selectedEvent}
                  className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                />
              </div>
              <div>
                <label className="block text-cyan-400 mb-2">Team Name *</label>
                <input
                  type="text"
                  id="team-name"
                  name="teamName"
                  placeholder="Enter team name"
                  className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-cyan-400 mb-2">Team Leader Name *</label>
                <input
                  type="text"
                  id="team-leader-name"
                  name="teamLeaderName"
                  placeholder="Enter team leader name"
                  className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                  required
                  value={teamLeaderName}
                  onChange={(e) => setTeamLeaderName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-cyan-400 mb-2">Team Leader Email *</label>
                <input
                  type="email"
                  id="team-leader-email"
                  name="teamLeaderEmail"
                  disabled
                  value={teamLeaderEmail}
                  placeholder="Enter your email"
                  className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-cyan-400 mb-2">Team Leader Phone *</label>
                <input
                  type="text"
                  id="team-leader-phone"
                  name="teamLeaderPhone"
                  placeholder="Enter team leader phone"
                  className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                  required
                  value={teamLeaderPhone}
                  onChange={(e) => setTeamLeaderPhone(e.target.value)}
                />
              </div>
           
            <div>
            <label className="block text-cyan-400 mb-2">Select Number of Team Members *</label>
              <div class="flex space-x-4">
              <label className="flex items-center">
                    <input
                      type="radio"
                      name="teamSize"
                      value="2"
                      className="mr-2"
                      required
                      checked={teamSize === 2}
                      onChange={handleTeamSizeChange}
                    /> 2
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="teamSize"
                      value="3"
                      className="mr-2"
                      required
                      checked={teamSize === 3}
                      onChange={handleTeamSizeChange}
                    /> 3
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="teamSize"
                      value="4"
                      className="mr-2"
                      required
                      checked={teamSize === 4}
                      onChange={handleTeamSizeChange}
                    /> 4
                  </label>
              </div>
            </div>
            <div id="team-members-section" ref={teamMembersSectionRef} className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex space-x-4">
                    <input
                      type="text"
                      name="memberName"
                      placeholder={`Member ${index + 1} Name`}
                      className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                      value={member.memberName}
                      onChange={(e) => handleTeamMemberChange(index, 'memberName', e.target.value)}
                    />
                    <input
                      type="text"
                      name="memberPhone"
                      placeholder={`Member ${index + 1} Phone`}
                      className="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white"
                      value={member.memberPhone}
                      onChange={(e) => handleTeamMemberChange(index, 'memberPhone', e.target.value)}
                    />
                  </div>
                ))}
              </div>
        
            <div>
              <p class="text-cyan-400">Total Amount: <span id="total-amount" class="text-white">₹{registerDetail.data.fee}</span></p>
            </div>
            <button type="submit" className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                Submit
              </button>
          </form>
        </div>
      </div>
)}

    </div>
  );
};

export default App;
