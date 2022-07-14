import React from "react";

const Contact = (props) => {
  return (
    <footer className="contact">
      <div className="contact-container">
        <div class="contact-head">
          <h2 class="contact-h">Personal Information</h2>
          <p class="contact-p">Feel free to send me a message</p>
        </div>
        <div class="contact-head">
          <div class="contact-top">
            <ul class="contact-ul">
              <li class="contact-li">
                <a
                  href="https://www.linkedin.com/in/pedro-lucas-358332168/"
                  target="blank"
                >
                  Linkedin
                </a>
              </li>
              <li class="contact-li">
                <a href="https://github.com/Smooke09" target="blank">
                  Github
                </a>
              </li>
              <li class="contact-li">
                <a
                  href="https://www.instagram.com/pedrolucas771/?hl=pt-br"
                  target="blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div class="contact-bottom">
            <p class="contact-info">
              <span>Email:</span> pedrolucas1014@hotmail.com
            </p>
            <p class="contact-info">
              <span>Whatsapp:</span> (13) 98170-6262
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact