import { useState } from "react";
import "./index.css";

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

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

//1. Create Accordian component
//5. pass "data" as an object prop and then use it or set it in the above App component in the Accordian section(blue)"
//6. map all of the elements and the index (the number) within the div creating a new array of Accordian Items
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((element, i) => (
        <AccordianItem
          title={element.title}
          text={element.text}
          num={i}
          key={element.title}
        />
      ))}
    </div>
  );
}

//2.Create Accordian Item
//3.each item gets a number, title and text so add the props to the Accordian Item
//4. Add <p> and use the props within // note: the code for number makes the count start at one
//7. define the useState
//8. now use the state --see the icon line and the one below this will show the content if is open is true
//9. add the handle toggle functiion and give access to the item...here we set the is open to false on click

function AccordianItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"} </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
