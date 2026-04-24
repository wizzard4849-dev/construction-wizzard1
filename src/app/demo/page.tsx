"use client";

import React, { useState } from "react";

const trades = {
  drywall: { label: "Drywall", defaultCostPerSqFt: 2.5 },
  painting: { label: "Painting", defaultCostPerSqFt: 1.5 },
  flooring: { label: "Flooring", defaultCostPerSqFt: 4.25 },
  hvac: { label: "HVAC", defaultCostPerSqFt: 8.5 },
  electrical: { label: "Electrical", defaultCostPerSqFt: 7.5 },
};

function money(value: number, currency: "USD" | "CAD") {
  return new Intl.NumberFormat(currency === "CAD" ? "en-CA" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function DemoPage() {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Visa");

  const [projectName, setProjectName] = useState("Office Renovation");
  const [clientName, setClientName] = useState("North Star Builders");
  const [currency, setCurrency] = useState<"USD" | "CAD">("USD");
  const [trade, setTrade] = useState<keyof typeof trades>("drywall");
  const [squareFeet, setSquareFeet] = useState(2000);
  const [costPerSqFt, setCostPerSqFt] = useState(trades.drywall.defaultCostPerSqFt);
  const [materialsCost, setMaterialsCost] = useState(1800);
  const [laborCost, setLaborCost] = useState(2200);
  const [overheadPercent, setOverheadPercent] = useState(10);
  const [profitPercent, setProfitPercent] = useState(15);

  const [finalEstimate, setFinalEstimate] = useState({
    baseEstimate: 0,
    directCosts: 0,
    overhead: 0,
    profit: 0,
    total: 0,
  });

  function handleAuth() {
    if (!userEmail || !password) {
      alert("Please enter email and password.");
      return;
    }
    setIsSignedIn(true);
  }

  function handlePayment() {
    alert(`Payment approved with ${paymentMethod}. Construction Wizzard is now unlocked.`);
    setIsPaid(true);
  }

  function calculateEstimate() {
    const baseEstimate = squareFeet * costPerSqFt;
    const directCosts = baseEstimate + materialsCost + laborCost;
    const overhead = directCosts * (overheadPercent / 100);
    const profit = (directCosts + overhead) * (profitPercent / 100);
    const total = directCosts + overhead + profit;

    setFinalEstimate({
      baseEstimate,
      directCosts,
      overhead,
      profit,
      total,
    });
  }

  function onTradeChange(nextTrade: keyof typeof trades) {
    setTrade(nextTrade);
    setCostPerSqFt(trades[nextTrade].defaultCostPerSqFt);
  }

  if (!isSignedIn) {
    return (
      <main style={pageStyle}>
        <section style={authCardStyle}>
          <h1>Construction Wizzard</h1>
          <p>AI-powered estimating for serious builders.</p>

          <div style={tabRowStyle}>
            <button onClick={() => setAuthMode("signup")} style={authMode === "signup" ? activeTabStyle : tabStyle}>
              New Account
            </button>
            <button onClick={() => setAuthMode("signin")} style={authMode === "signin" ? activeTabStyle : tabStyle}>
              Sign In
            </button>
          </div>

          <h2>{authMode === "signup" ? "Create New Account" : "Sign In"}</h2>

          <Field label="Email">
            <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} style={inputStyle} />
          </Field>

          <Field label="Password">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          </Field>

          <button onClick={handleAuth} style={buttonStyle}>
            {authMode === "signup" ? "Create Account" : "Sign In"}
          </button>
        </section>
      </main>
    );
  }

  if (!isPaid) {
    return (
      <main style={pageStyle}>
        <section style={authCardStyle}>
          <h1>Construction Wizzard</h1>
          <p>Payment is required before using the estimating platform.</p>

          <h2>Choose Payment Method</h2>

          <Field label="Payment Option">
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} style={inputStyle}>
              <option>Visa</option>
              <option>Mastercard</option>
              <option>American Express</option>
              <option>Discover</option>
              <option>Apple Pay</option>
              <option>Google Pay</option>
            </select>
          </Field>

          <Field label="Subscription Plan">
            <select style={inputStyle}>
              <option>Starter — $49/month</option>
              <option>Pro — $99/month</option>
              <option>Premium Builder — $199/month</option>
            </select>
          </Field>

          <button onClick={handlePayment} style={buttonStyle}>
            Pay & Unlock Construction Wizzard
          </button>

          <p style={{ fontSize: 13, color: "#666" }}>
            Note: This is a front-end payment gate. Real card processing should be connected with Stripe Checkout.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main style={appPageStyle}>
      <h1>Construction Wizzard</h1>
      <p style={{ color: "#555" }}>AI-powered estimator • proposal preview • bid tracking</p>

      <div style={responsiveGridStyle}>
        <section style={cardStyle}>
          <h2>Estimate Inputs</h2>

          <Field label="Project Name">
            <input value={projectName} onChange={(e) => setProjectName(e.target.value)} style={inputStyle} />
          </Field>

          <Field label="Client Name">
            <input value={clientName} onChange={(e) => setClientName(e.target.value)} style={inputStyle} />
          </Field>

          <Field label="Currency">
            <select value={currency} onChange={(e) => setCurrency(e.target.value as "USD" | "CAD")} style={inputStyle}>
              <option value="USD">U.S. Dollar</option>
              <option value="CAD">Canadian Dollar</option>
            </select>
          </Field>

          <Field label="Trade">
            <select value={trade} onChange={(e) => onTradeChange(e.target.value as keyof typeof trades)} style={inputStyle}>
              {Object.entries(trades).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Upload Drawing PDF">
            <input type="file" accept="application/pdf" style={inputStyle} />
          </Field>

          <Field label="Square Feet">
            <input type="number" value={squareFeet} onChange={(e) => setSquareFeet(Number(e.target.value) || 0)} style={inputStyle} />
          </Field>

          <Field label="Cost Per Sq Ft">
            <input type="number" step="0.01" value={costPerSqFt} onChange={(e) => setCostPerSqFt(Number(e.target.value) || 0)} style={inputStyle} />
          </Field>

          <Field label="Materials Cost">
            <input type="number" value={materialsCost} onChange={(e) => setMaterialsCost(Number(e.target.value) || 0)} style={inputStyle} />
          </Field>

          <Field label="Labor Cost">
            <input type="number" value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value) || 0)} style={inputStyle} />
          </Field>

          <Field label="Overhead %">
            <input type="number" value={overheadPercent} onChange={(e) => setOverheadPercent(Number(e.target.value) || 0)} style={inputStyle} />
          </Field>

          <Field label="Profit %">
            <input type="number" value={profitPercent} onChange={(e) => setProfitPercent(Number(e.target.value) || 0)} style={inputStyle} />
          </Field>

          <button onClick={calculateEstimate} style={buttonStyle}>
            Calculate Estimate
          </button>
        </section>

        <section style={{ ...cardStyle, background: "#fff" }}>
          <h2>Estimate Summary</h2>
          <Row label="Project" value={projectName} />
          <Row label="Client" value={clientName} />
          <Row label="Currency" value={currency} />
          <Row label="Trade" value={trades[trade].label} />
          <hr />
          <Row label="Base Estimate" value={money(finalEstimate.baseEstimate, currency)} />
          <Row label="Materials" value={money(materialsCost, currency)} />
          <Row label="Labor" value={money(laborCost, currency)} />
          <Row label="Direct Costs" value={money(finalEstimate.directCosts, currency)} />
          <Row label="Overhead" value={money(finalEstimate.overhead, currency)} />
          <Row label="Profit" value={money(finalEstimate.profit, currency)} />
          <hr />
          <div style={{ ...rowStyle, fontSize: 22 }}>
            <span>Total Bid</span>
            <strong>{money(finalEstimate.total, currency)}</strong>
          </div>
        </section>
      </div>

      <section style={{ ...cardStyle, marginTop: 30 }}>
        <h2>Proposal Preview</h2>
        <p>
          <strong>{clientName}</strong>, this proposal is submitted for <strong>{projectName}</strong> under the{" "}
          <strong>{trades[trade].label}</strong> scope of work.
        </p>
        <p>Estimated project size: <strong>{squareFeet.toLocaleString()} sq ft</strong></p>
        <p>Total contract value: <strong>{money(finalEstimate.total, currency)}</strong></p>
        <p>This estimate includes labor, materials, overhead, and profit. All pricing is subject to site verification and final scope approval.</p>
      </section>

      <section style={{ ...cardStyle, marginTop: 30, background: "#fff" }}>
        <h2>Bid Tracking</h2>
        <ul>
          <li>{projectName} — Pending — {money(finalEstimate.total, currency)}</li>
          <li>Warehouse Upgrade — Approved</li>
          <li>Retail Buildout — Rejected</li>
        </ul>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>{label}</label>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={rowStyle}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
  background: "#f5f5f5",
};

const appPageStyle: React.CSSProperties = {
  padding: 24,
  fontFamily: "Arial, sans-serif",
  maxWidth: 1000,
  margin: "0 auto",
};

const responsiveGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 24,
  marginTop: 30,
};

const authCardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 430,
  padding: 28,
  border: "1px solid #ddd",
  borderRadius: 14,
  background: "#fff",
};

const cardStyle: React.CSSProperties = {
  padding: 24,
  border: "1px solid #ddd",
  borderRadius: 12,
  background: "#fafafa",
};

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  marginBottom: 12,
};

const buttonStyle: React.CSSProperties = {
  marginTop: 16,
  padding: "14px",
  width: "100%",
  background: "#000",
  color: "#fff",
  borderRadius: 8,
  fontWeight: "bold",
  fontSize: 16,
  cursor: "pointer",
  border: "none",
};

const tabRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 8,
  margin: "20px 0",
};

const tabStyle: React.CSSProperties = {
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 8,
  background: "#fff",
  cursor: "pointer",
};

const activeTabStyle: React.CSSProperties = {
  ...tabStyle,
  background: "#000",
  color: "#fff",
};
