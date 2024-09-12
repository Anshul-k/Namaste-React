import React, { useState } from "react";
import { useDispatch } from "react-redux";
import contact from "../assets/contact.svg";
import Snackbar from "./Snackbar";
import { showSnackbar } from "../store/snackbarSlice";

const Contact = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    // If no validation errors, proceed with form submission
    dispatch(
      showSnackbar({
        message:
          "Your response was submitted successfully. We'll connect with you shortly.",
        type: "success",
        time: 3000,
      })
    );

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear any previous errors
    setErrors({
      email: "",
    });
  };

  return (
    <div className="w-full flex md:flex-row flex-col-reverse flex-grow items-center justify-center p-4">
      <img src={contact} alt="contact" className="h-full md:w-1/2 flex-grow" />
      <div className="md:w-1/2 w-full p-4 md:flex flex-col items-center">
        <h1 className="font-bold text-2xl md:text-5xl text-gray-500">
          Contact Us
        </h1>
        <form
          className="w-full flex gap-2 mt-4 flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-2 border border-orange-400 placeholder:text-orange-400 rounded-3xl px-3 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none"
            placeholder="Name*"
            required
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mb-2 border ${
              errors.email ? "border-red-500" : "border-orange-400"
            } placeholder:text-orange-400 rounded-3xl px-3 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none`}
            placeholder="Email*"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mb-2 border border-orange-400 placeholder:text-orange-400 rounded-3xl px-3 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none"
            placeholder="Message"
          />
          <button className="w-fit bg-orange-400 text-white rounded-xl px-4 py-2 mt-3 hover:bg-orange-300">
            Submit
          </button>
        </form>
      </div>
      <Snackbar />
    </div>
  );
};

export default Contact;
