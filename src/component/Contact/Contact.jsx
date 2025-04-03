import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "069348b3-ea90-46ff-aba1-dad6760f67d2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
        iconColor: "gold",
        confirmButtonColor: "gold",
      });
      event.target.reset();
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Get In Touch</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Name"
            name="Name"
            required
          />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter Your Email"
            name="Email"
            required
          />
        </div>

        <div className="input-box">
          <label>The Subject</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Subject"
            name="Subject"
          />
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea
            className="field mess"
            placeholder="Enter Your Message"
            name="Message"
            required
          ></textarea>
        </div>

        <button type="submit"> Send Message </button>
      </form>
    </section>
  );
};

export default Contact;
