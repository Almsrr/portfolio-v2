import React from "react";
import classNames from "classnames";

export default function ThemeSwitchButton({ onClick, darkThemeIsActive }) {
  const btnClassName = classNames("theme-switch-btn", {
    "active": darkThemeIsActive,
  });

  return (
    <button
      type="button"
      className={btnClassName}
      onClick={onClick}
      title="Theme"
    >
      <i className="bx bx-sun sun" />
      <i className="bx bx-moon moon" />
    </button>
  );
}
