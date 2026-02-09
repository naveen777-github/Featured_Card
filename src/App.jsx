import React from "react";
import FeatureCard from "./FeatureCard";
import "./App.css";

function AnalyticsIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

export default function App() {
  return (
    <main className="centerStage">
      <div className="demoContainer">
        <h1 className="demoTitle">Feature Card Component</h1>
        <p className="demoSubtitle">
          Scroll down to see entrance animations, then hover to experience the
          interactive effects.
        </p>

        <div className="spacer" />

        <FeatureCard
          icon={<AnalyticsIcon />}
          title="Startup-Ready Analytics"
          description="dashboards that update in real time without slowing your UI."
          accent="#A78BFA"
        />

        <div className="spacer" />

        <FeatureCard
          title="Real-time Collaboration"
          description="Work together with your team in real-time. No more syncing issues or version conflicts."
          accent="#34D399"
        />
      </div>
    </main>
  );
}
