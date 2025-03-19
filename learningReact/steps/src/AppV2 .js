import { useState } from "react";

const activeStyle = {
  backgroundColor: "#7950f2",
  color: "#fff",
  padding: "8px 13px",
  borderRadius: "20px",
  border: "0",
};
const normalStyle = {
  backgroundColor: "#dcdcdc",
  padding: "8px 13px",
  borderRadius: "20px",
  border: "0",
};
const messages = [
  "Learn React  ⁕",
  "Apply for Jobs  💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        padding: "60px",
        backgroundColor: "#fff",
      }}
    >
      <button
        onClick={() => setIsOpen((is) => !is)}
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          right: "10px",
          top: "10px",
          maxWidth: "400px",
          fontSize: "30px",
          cursor: "pointer",
          margin: "0 auto",
          padding: "20px",
          border: "0",
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            margin: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-around",
            }}
          >
            <div style={step >= 1 ? activeStyle : normalStyle}>1</div>
            <div style={step >= 2 ? activeStyle : normalStyle}>2</div>
            <div style={step >= 3 ? activeStyle : normalStyle}>3</div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontWeight: "bold" }}>
              Step {step}: {messages[step - 1]}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "40px",
            }}
          >
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              👈🏽 Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next 👉🏽
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "8px 13px",
        borderRadius: "20px",
        border: "0",
        cursor: "pointer",
      }}
      onclick={onclick}
    >
      {children}
    </button>
  );
}
