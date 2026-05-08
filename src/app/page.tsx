"use client";

import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState<"landing" | "dashboard">("landing");

  if (screen === "landing") {
    return (
      <main style={{ padding: 40, textAlign: "center" }}>
        <h1>Construction Wizzard</h1>

        <p>
          Build smarter. Bid sharper. Stay safe.
        </p>

        <button
          onClick={() => setScreen("dashboard")}
          style={{
            marginTop: 20,
            padding: "14px 24px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 16
          }}
        >
          Enter Dashboard
        </button>
      </main>
    );
  }

  return <Dashboard />;
}

function Dashboard() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 20,
          flexWrap: "wrap"
        }}
      >
        <Card title="Estimator" />
        <Card title="Bid Tracking" />
        <Card title="Invoices" />
        <Card title="Daily Logs" />
      </div>
    </main>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 10,
        width: 220
      }}
    >
      <h3>{title}</h3>

      <p>
        Construction Wizzard module
      </p>
    </div>
  );
}
