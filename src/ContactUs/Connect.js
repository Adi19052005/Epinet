import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Connect.css";

function Connect() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if env variables exist
    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS environment variables are missing!");
      setStatus("Cannot send message. Missing configuration.");
      return;
    }

    setStatus("Sending...");

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        trimmedData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });

          // Clear status after 5 seconds
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message.");

          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  const { name, email, message } = formData;

  return (
    <div className="connect-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status === "Sending..."}>
          {status === "Sending..." ? "Sending..." : "Send"}
        </button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default Connect;
