import "./App.css";
import "./assets/main.mp4";

function App() {
  return (
    <>
      <Header />
      <Main />
      <PlaceToVisit />
      <Footer />
    </>
  );
}
function Header() {
  return (
    <div className="header">
      <Nav />
    </div>
  );
}
function Nav() {
  return (
    <div className="nav">
      <div className="menu">
        <div className="hamTop"></div>
        <div className="hamMid"></div>
        <div className="hamBottom"></div>
      </div>
      <div className="logo">Fresh Travlers</div>
      <button className="pack">Start Packing</button>
    </div>
  );
}
function Main() {
  return (
    <div className="video">
      <video autoPlay muted loop>
        <source src="src\assets\main.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
function PlaceToVisit() {
  return (
    <div className="visits">
      <h2>Place's To Visit</h2>
      <div className="cards">
        <Card backgroundImage='url("src/assets/thiland4.jpg")' />
        <Card backgroundImage='url("src/assets/thiland2.jpg")' />
        <Card backgroundImage='url("src/assets/thiland1.jpeg")' />
      </div>
    </div>
  );
}
function Card({ backgroundImage }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
}
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

export default App;
