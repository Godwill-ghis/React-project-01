import React from "react";

const Button = ({ buttonText, handleComplete }) => {
  return (
    <button
      onClick={handleComplete}
      style={{
        backgroundColor: buttonText === "Completed" ? "#6ACE85" : "white",
        border: "none",
        padding: "0.6rem 0.7rem",
        borderRadius: "15px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
