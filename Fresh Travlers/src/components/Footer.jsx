import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h3>Stay Connected</h3>
      <div className="contact-logo">
        <a href="http://www.twitter.com">
          <img src="src/assets/Twitter.png" alt="Twitter" />
        </a>
        <a href="http://www.facebook.com">
          <img src="src/assets/facebook.png" alt="Facebook" />
        </a>
        <a href="http://www.likedin.com">
          <img src="src/assets/linkedin.png" alt="linkedin" />
        </a>
        <a href="http://www.telegram.com">
          <img src="src/assets/telegram.png" alt="Telegram" />
        </a>

        <a href="http://www.instagram.com">
          <img src="src/assets/insta.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
