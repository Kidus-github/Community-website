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
  return (
    <div className="accordian">
      {arr.map((item, i) => (
        <AccordianItem
          key={i}
          num={i + 1}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

function AccordianItem({ num, title, text }) {
  const [active, setActive] = useState(false);
  function handleToggle() {
    setActive(() => !active);
  }
  return (
    <div className={active ? `item open` : `item`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{active ? "-" : "+"}</p>

      {active && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
