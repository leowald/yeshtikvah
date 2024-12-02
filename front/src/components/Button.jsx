import React from "react";

export default function Button({
  text,
  onClick,
  background,
  size = "md",
  outline = false,
}) {
  const buttonStyle = {
    backgroundColor: !outline && background,
    border: outline && `1rem solid ${background}`,
    fontColor: outline ? background : "white",
  };
  return (
    <button style={buttonStyle} onClick={() => onClick} class={size}>
      {text}
    </button>
  );
}
