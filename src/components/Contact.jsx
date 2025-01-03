import { memo, useState } from "react";
import Button2 from "./design/Button2";
import { contact } from "../features/constants";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSendMessage = async () => {
    const { names, email, phone, message } = formData;

    if (!names || !email || !phone || !message) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      // Use the VITE_API_MESSAGE environment variable
      const apiUrl = import.meta.env.VITE_API_MESSAGE;
      await axios.post(apiUrl, formData);
      setSuccess("Message sent successfully! Thank you for reaching out.");
      setFormData({ names: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Failed to send the message. Please try again later.");
      console.log({ err });
    }
  };

  return (
    <div
      className="relative flex h-full max-h-full w-full flex-col items-start justify-start gap-12 pt-10 md:flex-row md:justify-center md:gap-8 lg:gap-16"
      id="contact"
    >
      <div className="light opacity border-primary flex w-full flex-col gap-4 px-8 py-4 max-md:max-w-md md:w-[60%]">
        <h3 className="font-code text-primary h3 font-semibold">
          Let's Work Together
        </h3>
        <p>
          If you're looking for a dedicated developer to bring your ideas to
          life, feel free to reach out! I’m eager to collaborate on exciting
          projects and create impactful solutions together.
        </p>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <input
          type="text"
          name="names"
          placeholder="Full names"
          aria-label="Full names"
          className="dark-bg w-full cursor-text rounded-md border border-indigo-300 px-4 py-2 outline-none"
          value={formData.names}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          className="dark-bg w-full cursor-text rounded-md border border-indigo-300 px-4 py-2 outline-none"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          aria-label="Phone number"
          className="dark-bg w-full cursor-text rounded-md border border-indigo-300 px-4 py-2 outline-none"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Type your message here."
          aria-label="Your message"
          className="dark-bg h-[6rem] w-full cursor-text rounded-md border border-indigo-300 px-4 py-2 outline-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <Button2 className="text-reverse" onClick={handleSendMessage}>
          Send message
        </Button2>
      </div>
      <div className="slide-in flex flex-col gap-4 md:w-[40%]">
        {contact.map((item) => (
          <div className="flex w-full items-center gap-2" key={item.id}>
            <div className="light p-3">
              <img src={item.icon} alt={item.title} className="h-6 w-6" />
            </div>
            <div>
              <div className="span">{item.title}</div>
              <div>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Contact);
