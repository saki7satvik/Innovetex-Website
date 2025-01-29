import React from 'react'

const Events = () => {

  // Event Details Modal
  const openEventDetailsModal = (eventKey) => {
    setEventDetailsModal({ isOpen: true, data: eventDetails[eventKey] });
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
  return (
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
  )
}

export default Events