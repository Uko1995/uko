import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export function Accordion({data}) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem key={index} num={index} title={faq.title} text={faq.text} />
      ))}

    </div>
  );
}

function AccordionItem({ title, text, num, onHandleClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className={`item ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
      <h2 className="number">{num < 9 ? `0${num + 1}` : num + 1}</h2>
      <h2 className="title">{title}</h2>
      <h2 className="icon">{isOpen ? '-' : '+'}</h2>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}