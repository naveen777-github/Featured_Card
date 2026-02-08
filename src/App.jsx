import React from "react";
import FeatureCard from "./FeatureCard";
import "./App.css";

export default function App() {
  return (
    <main className="centerStage">
      <FeatureCard
        title="Startup-Ready Analytics"
        description="Track traction, retention, and activation with dashboards that update in real time — without slowing your UI."
        accent="#A78BFA"
      />
    </main>
  );
}
