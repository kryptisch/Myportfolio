import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popName, setPopName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //template_ep3w7qs
  // service_zgfnvho
  // SRFU4xKj1C8HJe6ox
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //maill integration
    emailjs
      .send(
        // service ID
        "service_zgfnvho",
        // template ID
        "template_ep3w7qs",
        {
          from_name: form.name,
          to_name: "Rohith",
          from_email: form.email,
          to_email: "rohithdigajerla4@gmail.com",
          from_message: form.message,
        },
        // public key
        "SRFU4xKj1C8HJe6ox"
      )
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);
          setPopName(form.name);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Somting went wrong!!");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Message</span>
            <textarea
              required
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded shadow-md  shadow-sm shadow-secondary">
            <p className="text-lg font-bold text-primary mb-3">Message Sent!</p>
            <p className="text-tertiary font-semibold mb-5">
              Thank you <span className="font-bold">{popName}</span> . I will
              get back to you as soon as possible.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-tertiary py-2 px-5 outline-none w-fit text-white font-semibold  shadow-sm shadow-primary"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
