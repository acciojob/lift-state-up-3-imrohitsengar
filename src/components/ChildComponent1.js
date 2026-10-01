import React from "react";

function ChildComponent1({ updateSelection }) {
  return (
    <div>
      <h2>ChildComponent1</h2>
      <button onClick={() => updateSelection("Option1")}>Select Option1</button>
    </div>
  );
}

export default ChildComponent1;
