import React, { useState, useEffect } from "react";
import { sendEmail } from "../constants/emailService"; // Assuming you have an email sending service
import { motion } from "framer-motion";

function ContactForm() {
  // State to hold the values of the fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Helper function to check if the user can submit
  const checkSubmissionTime = () => {
    const lastSubmission = localStorage.getItem("lastSubmissionTime");
    if (lastSubmission) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - lastSubmission;
      const oneHourInMilliseconds = 36; // 1 hour in milliseconds
      if (timeDifference < oneHourInMilliseconds) {
        const timeLeft = (
          (oneHourInMilliseconds - timeDifference) /
          1000
        ).toFixed(0);
        setCanSubmit(false);
        setErrorMessage(
          `You need to wait ${timeLeft} seconds before sending another message.`
        );
      } else {
        setCanSubmit(true);
        setErrorMessage("");
      }
    }
  };

  // Effect to check if the user can submit when the component mounts
  useEffect(() => {
    checkSubmissionTime();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    try {
      // Assuming sendEmail is a function that sends an email using a service
      await sendEmail(name, email, message);

      // Save the submission timestamp in localStorage
      localStorage.setItem("lastSubmissionTime", new Date().getTime());

      // Reset the form and show a success message
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setCanSubmit(false);
      setTimeout(() => {
        checkSubmissionTime(); // Recheck after 1 hour
      }, 36); // Recheck in 1 hour
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setLoading(false);
  };

  // Check if the submit button should be enabled
  const isSubmitDisabled = !name || !email || !message || !canSubmit;

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5}}
       className="my-10 text-center text-4xl">Contact Me</motion.h2>
      <div className="max-w-lg mx-auto my-8 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-1xl font-semibold text-center">Fill all box</h2>

        <form 
        onSubmit={handleSubmit} className="mt-4 space-y-4">
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-neutral-700 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-neutral-700 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-900">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-neutral-700 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          {errorMessage && (
            <div className="mt-2 text-red-600">
              <p>{errorMessage}</p>
            </div>
          )}

          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              type="submit"
              disabled={isSubmitDisabled || loading}
              className={`w-full py-2 mt-4 text-white font-semibold rounded-md ${
                isSubmitDisabled || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </motion.div>
        </form>

        {submitted && (
          <div className="mt-4 p-4 text-green-600 bg-green-100 border rounded-md">
            <p>Message successfully submitted!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
