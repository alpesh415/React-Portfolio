import React from "react";
import "../Assets/Style/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">

        <div className="contact-title text-center">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <p>
            Have a project in mind or want to work together? Feel free to
            contact me. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="row mt-5">

          {/* Left Side */}
          <div className="col-lg-5 mb-4">

            <div className="contact-info">

              <div className="info-box">
                <h4>📍 Address</h4>
                <p>Ahmedabad, Gujarat, India</p>
              </div>

              <div className="info-box">
                <h4>📧 Email</h4>
                <p>harshitrathod09r@gmail.com</p>
              </div>

              <div className="info-box">
                <h4>📱 Phone</h4>
                <p>+91 9023381530</p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <form className="contact-form">

              <div className="row">

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="form-control mb-3"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="form-control mb-3"
              ></textarea>

              <button className="send-btn">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}