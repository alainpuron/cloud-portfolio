document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    statusEl.innerText = "Sending...";
    submitBtn.disabled = true;

    const payload = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        statusEl.className = "success";
        statusEl.innerText = "Message sent successfully!";
        document.getElementById("contact-form").reset();
      } else {
        statusEl.className = "error";
        statusEl.innerText = result.error || "Failed to send message.";
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      statusEl.innerText = "Error sending message. Please try again.";
    } finally {
      submitBtn.disabled = false;
    }
  });
});
