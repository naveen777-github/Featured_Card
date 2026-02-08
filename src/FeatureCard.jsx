import React from "react";
import "./FeatureCard.scss";

export default function FeatureCard({
  icon,
  title,
  description,
  accent = "#38BDF8",
}) {
  return (
    <article className="featureCard" style={{ "--accent": accent }}>
      <div className="content">
        <div className="iconWrap">
          <div className="icon">{icon ?? <DefaultIcon />}</div>
        </div>

        <h3 className="title">{title}</h3>
        <p className="desc">{description}</p>

        <div className="ctaRow" aria-hidden="true">
          <span className="ctaDot" />
          <span className="ctaText">Learn more</span>
        </div>
      </div>
    </article>
  );
}

function DefaultIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
