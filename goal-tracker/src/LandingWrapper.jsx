export default function LandingWrapper() {
  return (
    <div className="wrapper">
      {/* <img className="background" src="../src/assets/cly.jpg" /> */}
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
function Nav() {
  return (
    <div className="navwrapper">
      <div className="nav">
        <div className="left">
          <ul>
            <li className="logo">YOUR WAY</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Insta</li>
            <li>Login</li>
            <li className="button">
              <button>SignUp</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <div className="main">
        <div className="left-section">
          <Header>TRACK YOUR WAY TO SUCCESS</Header>

          <Pharagraph>
            Streamline your day by prioritizing the right tasks and managing
            your time effectively around the most important aspect of life.
          </Pharagraph>
          <RecentList />
        </div>
        <div className="right-section"></div>
      </div>
    </>
  );
}
function Header({ children }) {
  return <h1>{children}</h1>;
}
function Pharagraph({ children }) {
  return <p>{children}</p>;
}

function RecentList() {
  return (
    <div className="recentlist">
      <ul>
        <li>Conference</li>
        <li>Weekly planning</li>
      </ul>
    </div>
  );
}
function Footer() {
  function handleStart() {}
  return (
    <div className="footer">
      <div className="left">
        <Header>INCREASE YOUR PRODUCTIVITY WITH YOUR DAIL ACTIVITY </Header>
        <button className="start" onClick={handleStart}>
          Get Start
        </button>
      </div>
      <div className="right">
        <img src="../src/assets/climb.jpg" />
        <div className="phara">
          <Pharagraph>
            Your Way makes it easy for you manage your tasks, set priorities by
            automating your goal-settings process and visualizing your
            productivity with a realistic timeframe
          </Pharagraph>
          <Pharagraph>
            Start your day with a sense calm and confidence
          </Pharagraph>
        </div>
      </div>
    </div>
  );
}
