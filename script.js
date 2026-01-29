console.log("Portfolio loaded successfully");
// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const icon = button.querySelector(".faq-icon");

    document.querySelectorAll(".faq-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-icon").textContent = "+";
      }
    });

    const isOpen = item.classList.toggle("active");
    icon.textContent = isOpen ? "−" : "+";
  });
});
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const button = document.getElementById("contactBtn");

// add even lister

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    // UI: loading state
    button.disabled = true;
    button.innerText = "Sending...";
    statusText.textContent = "";
    statusText.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        statusText.textContent = "✅ Thanks! Your message has been sent.";
        statusText.classList.add("success");
        form.reset();
      } else {
        statusText.textContent = "❌ Oops! Something went wrong.";
        statusText.classList.add("error");
      }
    } catch (error) {
      statusText.textContent = "❌ Network error. Please try again.";
      statusText.classList.add("error");
    }

    button.disabled = false;
    button.innerText = "Send";
  });
}
// Auto-fill plan from URL
const params = new URLSearchParams(window.location.search);
const plan = params.get("plan");

if (plan) {
  const planInput = document.getElementById("selectedPlan");
  const messageBox = document.querySelector('textarea[name="message"]');

  if (planInput) {
    planInput.value = plan;
  }

  if (messageBox) {
    if (plan === "basic") {
      messageBox.value = "Hi Nibir, I want to get the Basic Thumbnail plan.";
    } else if (plan === "bulk") {
      messageBox.value = "Hi Nibir, I want to get the Bulk Thumbnail plan.";
    }
  }
}


// === HAMBURGER MENU ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}
