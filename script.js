document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("EoS3kj4NNHyvyXF2M");

  const connectBtn = document.getElementById("connectBtn");

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    body.classList.toggle("menu-active");
  });

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
  connectBtn.addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value;
    const emailId = document.getElementById("emailId").value;
    const message = document.getElementById("message").value;
    // Validate if all fields are filled
    if (!fullName || !emailId || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    if (fullName && emailId && message) {
      // Call the function to send the email
      sendEmail(fullName, emailId, message);
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Smooth scroll functionality
  const navLinks = document.querySelectorAll("nav a");

  for (const link of navLinks) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });

    // Close the menu after clicking a nav link on mobile
    if (window.innerWidth < 768) {
      menu.classList.remove("active");
      body.classList.remove("menu-active");
    }
  }
  // Smooth scroll for timeline containers
  const containerLinks = document.querySelectorAll(".container h2");

  for (const link of containerLinks) {
    link.addEventListener("click", containerClickHandler);
  }

  function containerClickHandler(e) {
    e.preventDefault();
    const href = `#${this.parentNode.parentNode.id}`;
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});

// Scroll Navbar

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  // Determine scroll direction
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-60px"; // Adjust this value
  }

  prevScrollPos = currentScrollPos;
});

function sendEmail(fullName, emailId, message) {
  // Use the EmailJS library or another email service here
  // Make sure to set up the API credentials and template
  // You need to include the EmailJS library in your HTML

  // Example using EmailJS (requires EmailJS library)
  emailjs
    .send("service_d7s3ovf", "template_6z644uc", {
      to_name: "Harshit Sharma",
      from_name: fullName,
      from_email: emailId,
      message: message,
      //   subject: "Portfolio - You've got a new message!",
    })
    .then(function (response) {
      console.log("Email sent:", response);
      alert("Email sent successfully!");
    })
    .catch(function (error) {
      console.error("Email failed to send:", error);
      alert("Email sending failed.");
    });
}
