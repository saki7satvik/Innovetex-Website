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
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registration successful!");
            registrationForm.reset();
            modal.classList.add("hidden");
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
            ruleBook : "RC Rally Rule Book Innovatex 3.0.pdf",
            },
            Pitchathon: {
            title: "Pitchathon",
            image: "https://via.placeholder.com/600x300?text=Pitchathon",
            description: "A competition to pitch your startup idea and win exciting prizes.",
            fee: "₹200",
            date: "March 16, 2024",
            time: "12:00 PM - 3:00 PM",
            venue: "Conference Hall B",
            },
            RoboWar: {
            title: "RoboWar",
            image: "https://via.placeholder.com/600x300?text=RoboWar",
            description: "Build a robot and battle it out in the ultimate RoboWar competition.",
            fee: "₹1000",
            date: "March 17, 2024",
            time: "2:00 PM - 6:00 PM",
            venue: "Outdoor Arena",
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

            

            // Show modal
            eventDetailsModal.classList.remove("hidden");

             // Set the Rule Book link
             const ruleBookButton = document.getElementById("rule-book-button");
             ruleBookButton.onclick = () => {
             window.open(eventData.ruleBook, "_blank");
             };
        }

        document
        .querySelector(".click-details-coderush")
        .addEventListener("click", () => openEventModal("CodeRush"));

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



        

        document.body.addEventListener('wheel', e => { if (!e.ctrlKey) return; e.preventDefault(); return }, { passive: false })