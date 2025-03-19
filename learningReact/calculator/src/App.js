import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  return (
    <div className="calculator">
      <Screen displayValue={displayValue} />
      <Keypad onSetDisplay={setDisplayValue} />
    </div>
  );
}

function Screen({ displayValue }) {
  return <div className="screen">{displayValue}</div>;
}

function Keypad({ onSetDisplay }) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "Del",
    "0",
    "=",
    "+",
    "C",
  ];
  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <Button onSetDisplay={onSetDisplay} key={index}>
          {button}
        </Button>
      ))}
    </div>
  );
}

function Button({ children, onSetDisplay }) {
  return (
    <button
      className="btn"
      onClick={() =>
        onSetDisplay((prev) => {
          if (children === "=") {
            try {
              return String(evaluate(prev));
            } catch (e) {
              return "error";
            }
          } else if (children === "C") {
            return "0";
          } else if (children === "Del") {
            return prev.length > 1 ? prev.slice(0, -1) : "0";
          }
          return prev === "0" ? String(children) : prev + String(children);
        })
      }
    >
      {children}
    </button>
  );
}
