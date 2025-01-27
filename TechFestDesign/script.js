        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Countdown Timer
        function updateCountdown() {
            const eventDate = new Date('April 15, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days.toString().padStart(2, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Contact Form
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Message sent successfully!');
            this.reset();
        });

        // Modal Elements
        const modal = document.getElementById("registration-modal");
        const openButtons = document.querySelectorAll(".click-button"); // Buttons that open modal
        const closeModal = document.getElementById("close-modal");

        // Open Modal
        openButtons.forEach((button) =>
            button.addEventListener("click", () => {
            modal.classList.remove("hidden");
            })
        );

        // Close Modal
        closeModal.addEventListener("click", () => {
            modal.classList.add("hidden");
         });

        // Close Modal on Outside Click
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
            modal.classList.add("hidden");
            }
        });


        // Registration Form Submit Handler
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get all the form data
  const formData = new FormData(registrationForm);

  // Extract individual values
  const selectedEvent = formData.get("event");
  const teamName = formData.get("teamName");
  const teamLeaderName = formData.get("teamLeaderName");
  const teamLeaderEmail = formData.get("teamLeaderEmail");
  const teamLeaderPhone = formData.get("teamLeaderPhone");
  const teamSize = formData.get("teamSize");

  // Create an object to store all form data
  const formDetails = {
    selectedEvent,
    teamName,
    teamLeaderName,
    teamLeaderEmail,
    teamLeaderPhone,
    teamSize,
    teamMembers: [],
  };

  // Collect dynamic team member details if available
  const teamMembersSection = document.getElementById("team-members-section");
  const teamMemberInputs = teamMembersSection.querySelectorAll("input");
  teamMemberInputs.forEach((input) => {
    const memberDetails = {
      memberName: input.name === "memberName" ? input.value : null,
      memberPhone: input.name === "memberPhone" ? input.value : null,
    };
    formDetails.teamMembers.push(memberDetails);
  });
  console.log("Form Details:", formDetails);

  // Send form details to the backend
  try {
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDetails),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Server Response:", result);

      // Show success message
      alert("Registration successful!");
      registrationForm.reset();
    } else {
      const error = await response.json();
      console.error("Error Response:", error);
      alert(`Registration failed: ${error.message}`);
    }
  } catch (error) {
    console.error("Network Error:", error);
    alert("An error occurred. Please try again later.");
  }
});


        // Get modal elements
        const eventDetailsModal = document.getElementById("event-details-modal");
        const closeEventModalButton = document.getElementById("close-event-modal");

        // Data for events (you can replace this with dynamic content)
        const eventsData = {
            CodeRush: {
            title: "CodeRush (24Hrs Hackathon)",
            image: "",
            description: "A 24-hour software hackathon challenges participants to create innovative software solutions to real-world problems within a tight timeframe. The tasks should encourage creativity, collaboration,and rapid development while showcasing functional prototypes by the end of the event.",
            fee: "TBA",
            date: "TBA",
            time: "TBA",
            venue: "TBA",
            rules:"TBA",
            },
            Pitchathon: {
            title: "Pitchathon",
            image: "",
            description: "A competition to pitch your startup idea and win exciting prizes.",
            fee: "TBA",
            date: "TBA",
            time: "TBA",
            venue: "TBA",
            rules:"TBA",
            },
            HardwareHackathon: {
              title: "Hardware Hackathon",
              image: "",
              description: "TBA",
              fee: "TBA",
              date: "TBA",
              time: "TBA",
              venue: "TBA",
              rules:"TBA",
              },
            Dronotrix: {
              title: "Dronotrix",
              image: "",
              description: "TBA",
              fee: "TBA",
              date: "TBA",
              time: "TBA",
              venue: "TBA",
              rules:"TBA",
              },
            RoboWar: {
                title: "Robo War",
                image: "",
                description: "TBA",
                fee: "TBA",
                date: "TBA",
                time: "TBA",
                venue: "TBA",
                rules:"TBA",
                },
            RoboSoccer: {
                  title: "Robo Soccer",
                  image: "",
                  description: "TBA",
                  fee: "TBA",
                  date: "TBA",
                  time: "TBA",
                  venue: "TBA",
                  rules:"TBA",
                  },
            RcPlane: {
                  title: "RC Plane",
                  image: "",
                  description: "TBA",
                  fee: "TBA",
                  date: "TBA",
                  time: "TBA",
                  venue: "TBA",
                  rules:"TBA",
                  },
            RcRally: {
              title: "RC RALLY (Off-Road Challenge)",
              image: "",
              description: "Participants must design a custom-built remote-controlled car to navigate an off-road rally track filled with obstacles and challenging terrain. The goal is to achieve the highest score by completing the rally course, collecting points, and finishing in the shortest possible time.",
              fee: "TBA",
              date: "TBA",
              time: "TBA",
              venue: "TBA",
              rules:`DESIGN SPECIFICATIONS:
                      The car should be custom made with generic parts. Ready to assemble and drive RC cars are NOT
                      permitted to contest in the event.
                      • Total allowable dimensions of the car are: - 
                        Width: 15-30 cm
                        Length: 25-50 cm
                        Height: 15 cm
                      • Maximum allowable weight of the car is 2 kg.
                      • Small nitro IC Engines are not permitted; the car must be powered electrically using motors
                      and a battery. It is advisable that the contestants use batteries that can easily power the car
                      for the entire event. Charging mid-race is not allowed.
                      • Receiver and transmitter used must have sufficient range. Recommended would be at-least
                      100 meters.
                      • Use of FPV is advised but is not necessary. Person driving is not allowed to run along the circuit.
                      Organizers will provide best track visibility possible, but despite that if the driver is not
                      confident, use of FPV is allowed.
                      • Build of the car must be able to sustain rocky terrain and gravel. Breakdown mid-event will
                      lead to disqualification.
                      GENERAL GUIDELINES:
                      • Each participant is given two chances to run their RC car around the designed obstacle course
                      and their time is recorded for one lap.
                      • Obstacles may contain ramps, bumps and heavily banked corners. Best of two times recorded
                      is considered. This finishing order will determine the starting order for next event.
                      • Contesting cars will only be permitted to enter the first event if they satisfy all the build
                      regulations. Only two members per team are allowed to operate on their cars.
                      • In the event of a minute breach of regulations, the contestant may be allowed to compete
                      based on the organizers’ discretion. A time penalty or penalty in the form of points deduction
                      will be awarded prior to the race start. Magnitude of penalty is up to the organizers’ fair
                      judgment.
                      Those who finish their regulation checks first will get the first laps; hence it is advised that
                      contestants make it to the venue on time.
                      • If the car is overturned during a lap in the first event, the lap is discarded, no additional
                      attempts will be provided. However, if this occurs in the second event, the organizers will get
                      it back on track as soon as possible.
                      • You are advised to hold your position and not rush to your car.
                      • The entire event will be recorded and all racing incidents will be judged after the race.
                      Contestants are to note that intentional sabotaging of their opponents race by crashing into
                      them or tampering with their cars may lead to disqualification and at the minimum is worthy
                      of a time or points penalty.
  
                      • Race results will be finalized maximum within one day of completion of event after applying
                      the necessary time and points penalties. Final scoreboard will consist of points scored in both
                      events.`,
              },
              LineFollower: {
                title: "Line Follower",
                image: "",
                description: "TBA",
                fee: "TBA",
                date: "TBA",
                time: "TBA",
                venue: "TBA",
                rules:"TBA",
                },
              MazeRunner: {
                  title: "Maze Runner",
                  image: "",
                  description: "TBA",
                  fee: "TBA",
                  date: "TBA",
                  time: "TBA",
                  venue: "TBA",
                  rules:"TBA",
                  },
              UiChallenge: {
                    title: "UI/UX Challenge",
                    image: "",
                    description: "TBA",
                    fee: "TBA",
                    date: "TBA",
                    time: "TBA",
                    venue: "TBA",
                    rules:"TBA",
                    },
              ProjectExpo: {
                      title: "Project Expo",
                      image: "",
                      description: "TBA",
                      fee: "TBA",
                      date: "TBA",
                      time: "TBA",
                      venue: "TBA",
                      rules:"TBA",
                      },
            
        };

        // Function to open the modal and populate details
        function openEventModal(eventKey) {
            const eventData = eventsData[eventKey];

            // Populate modal content
            document.getElementById("event-title").innerText = eventData.title;
            document.getElementById("event-image").src = eventData.image;
            document.getElementById("event-description").innerText = eventData.description;
            document.getElementById("event-fee").innerText = eventData.fee;
            document.getElementById("event-date").innerText = eventData.date;
            document.getElementById("event-time").innerText = eventData.time;
            document.getElementById("event-venue").innerText = eventData.venue;
            document.getElementById("event-rules").innerText = eventData.rules;


            

            // Show modal
            eventDetailsModal.classList.remove("hidden");                                 
        }

        document
        .querySelector(".click-details-coderush")
        .addEventListener("click", () => openEventModal("CodeRush"));

        document
        .querySelector(".click-details-pitchathon")
        .addEventListener("click", () => openEventModal("Pitchathon"));

        document
        .querySelector(".click-details-hardware")
        .addEventListener("click", () => openEventModal("HardwareHackathon"));

        document
        .querySelector(".click-details-dronotrix")
        .addEventListener("click", () => openEventModal("Dronotrix"));

        document
        .querySelector(".click-details-robowar")
        .addEventListener("click", () => openEventModal("RoboWar"));

        document
        .querySelector(".click-details-robosoccer")
        .addEventListener("click", () => openEventModal("RoboSoccer"));

        document
        .querySelector(".click-details-rcplane")
        .addEventListener("click", () => openEventModal("RcPlane"));

        document
        .querySelector(".click-details-rcrally")
        .addEventListener("click", () => openEventModal("RcRally"));

        document
        .querySelector(".click-details-linefollower")
        .addEventListener("click", () => openEventModal("LineFollower"));

        document
        .querySelector(".click-details-mazerunner")
        .addEventListener("click", () => openEventModal("MazeRunner"));

        document
        .querySelector(".click-details-uiuxchallenge")
        .addEventListener("click", () => openEventModal("UiChallenge"));

        document
        .querySelector(".click-details-projectexpo")
        .addEventListener("click", () => openEventModal("ProjectExpo"));

        // Close modal when clicking on the close button
        closeEventModalButton.addEventListener("click", () => {
            eventDetailsModal.classList.add("hidden");
        });

        // Close modal when clicking outside the modal content
        eventDetailsModal.addEventListener("click", (e) => {
            if (e.target === eventDetailsModal) {
            eventDetailsModal.classList.add("hidden");
            }
        });




    const eventData = {
      CodeRush: 500,
      Pitchathon: 400,
      RoboWar: 600,
      ProjectExpo: 300,
      RoboSoccer: 700,
      MazeRunner: 500,
      UIUXChallenge: 400,
      RCPlane: 800,
      RCRally: 300,
      LineFollower: 500,
      HardwareHackathon: 1000,
      DroneChallenge: 1200,
    };
  
    const eventSelect = document.getElementById("event-select");
    const teamSizeInputs = document.querySelectorAll('input[name="teamSize"]');
    const teamMembersSection = document.getElementById("team-members-section");
    const totalAmountElement = document.getElementById("total-amount");
    const selectedEventInput = document.getElementById("selected-event");
  
    let selectedEventPrice = 0;
  
     // Show modal and update event
    document.querySelectorAll(".register-button").forEach((button) => {
        button.addEventListener("click", (e) => {
        const eventName = e.target.dataset.event; // Get event name from data attribute
        selectedEventInput.value = eventName;
        selectedEventPrice = eventData[eventName];
        updateTotalAmount();
        modal.classList.remove("hidden");
        });
    });

    // Handle team size change
    teamSizeInputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        const teamSize = parseInt(e.target.value, 10);
  
        // Update dynamic fields
        teamMembersSection.innerHTML = ""; // Clear existing fields
        for (let i = 1; i <= teamSize; i++) {
          const memberFields = `
            <div>
              <label class="block text-cyan-400 mb-2">Member Name ${i+1} *</label>
              <input type="text" name="memberName${i+1}" placeholder="Enter member ${i+1}'s name" class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white" required>
            </div>
            <div>
              <label class="block text-cyan-400 mb-2">Member Phone ${i+1} *</label>
              <input type="tel" name="memberPhone${i+1}" placeholder="Enter member ${i+1}'s phone" class="w-full p-2 bg-gray-900 border border-cyan-500/30 rounded text-white" required>
            </div>
          `;
          teamMembersSection.insertAdjacentHTML("beforeend", memberFields);
        }
  
        // Update total amount
        updateTotalAmount(teamSize);
      });
    });
  
    // Function to update total amount
    function updateTotalAmount() {
      const selectedTeamSize = parseInt(document.querySelector('input[name="teamSize"]:checked')?.value || 0, 10);
      const totalAmount = (selectedTeamSize + 1) * selectedEventPrice; // Team size + Leader
      totalAmountElement.innerText = `₹${totalAmount}`;
    }


        

        document.body.addEventListener('wheel', e => { if (!e.ctrlKey) return; e.preventDefault(); return }, { passive: false })