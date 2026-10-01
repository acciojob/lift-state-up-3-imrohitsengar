import React from "react";

function ChildComponent2({ updateSelection }) {
  return (
    <div>
      <h2>ChildComponent2</h2>
      <button onClick={() => updateSelection("Option2")}>Select Option2</button>
    </div>
  );
}

export default ChildComponent2;
