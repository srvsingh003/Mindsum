import React from "react";
import "./card.scss";

export default function Card({
  icon,
  text,
  subText,
  duration,

  iconClass = "",
}) {
  return (
    <div className="date-card">
      <span>{text}</span>
      <span className="timing">
        {subText}
        <p className="duration">{duration}</p>
      </span>

      <span className={iconClass}>{icon}</span>
    </div>
  );
}
