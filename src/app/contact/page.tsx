import React from "react";

const contact = () => {
  return (
    <div>
      <section className=" contact-div">
        <div >
          <div>
            <h1 className="contact-us">Contact Us</h1>
          </div>
          <div>
            <div>
              <div >
                <div >
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <textarea
                    name="name"
                    id="name"
                    className="textarea"
                  ></textarea>
                </div>
              </div>
              <div >
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <textarea
                    name="email"
                    id="email"
                    className="textarea"
                  ></textarea>
                </div>
              </div>
              <div >
                <div >
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea"
                  ></textarea>
                </div>
              </div>
              <div >
                <button className="button">Button</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
