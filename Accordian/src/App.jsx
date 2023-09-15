import { useState } from "react";
import "./App.css";

function App() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];
  return (
    <div>
      <Accordian arr={faqs} />
    </div>
  );
}
function Accordian({ arr }) {
  const [active, setActive] = useState(null);
  return (
    <div className="accordian">
      {arr.map((item, i) => (
        <AccordianItem
          key={i}
          num={i + 1}
          title={item.title}
          active={active}
          setActive={setActive}
        >
          {item.text}
        </AccordianItem>
      ))}
      <AccordianItem
        key={22}
        num={22}
        title={"Test 1"}
        active={active}
        setActive={setActive}
      >
        <ul>
          <li>Break up UI into components</li>
          <li>make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ num, title, children, active, setActive }) {
  function handleToggle(id) {
    setActive(() => (active === id ? null : id));
  }
  return (
    <div
      className={active === num ? `item open` : `item`}
      onClick={() => handleToggle(num)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{active === num ? "-" : "+"}</p>

      {active && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
