import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-success", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
