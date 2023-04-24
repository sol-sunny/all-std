import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      <p className="number">
        {count} <span className="total">/{total}</span>
      </p>
      <button
        className="addBtn"
        onClick={() => {
          //   setCount(count + 1);
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add+
      </button>
    </div>
  );
}
