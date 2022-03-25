import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div>
        <h1>CONTACT US</h1>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea
            name="message"
            placeholder="Enter Message...."
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
