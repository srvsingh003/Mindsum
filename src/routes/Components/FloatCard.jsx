import React from "react";

export default function FloatCard({ icon, text, subText }) {
  return (
    <div className="Float-card">
      <span>{text}</span>
      <span>{icon}</span>
      <span>{subText}</span>
    </div>
  );
}
