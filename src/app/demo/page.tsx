"use client";

import { useState } from "react";

const trades = {
  drywall: { label: "Drywall", defaultCostPerSqFt: 2.5 },
  painting: { label: "Painting", defaultCostPerSqFt: 1.5 },
  flooring: { label: "Flooring", defaultCostPerSqFt: 4.25 },
  hvac: { label: "HVAC", defaultCostPerSqFt: 8.5 },
};

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

export default function DemoPage() {
  const [projectName, setProjectName] = useState("Office Renovation");
  const [clientName, setClientName] = useState("North Star Builders");
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

  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Construction Wizzard Demo</h1>
      <p style={{ marginTop: 0, color: "#555" }}>
        Real working estimator • proposal preview • bid tracking
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 30 }}>
        <section style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>Estimate Inputs</h2>

          <Field label="Project Name">
            <input value={projectName} onChange={(e) => setProjectName(e.target.value)} style={inputStyle} />
          </Field>

          <Field label="Client Name">
            <input value={clientName} onChange={(e) => setClientName(e.target.value)} style={inputStyle} />
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
          <h2 style={{ marginTop: 0 }}>Estimate Summary</h2>

          <Row label="Project" value={projectName} />
          <Row label="Client" value={clientName} />
          <Row label="Trade" value={trades[trade].label} />

          <hr />

          <Row label="Base Estimate" value={money(finalEstimate.baseEstimate)} />
          <Row label="Materials" value={money(materialsCost)} />
          <Row label="Labor" value={money(laborCost)} />
          <Row label="Direct Costs" value={money(finalEstimate.directCosts)} />
          <Row label="Overhead" value={money(finalEstimate.overhead)} />
          <Row label="Profit" value={money(finalEstimate.profit)} />

          <hr />

          <div style={{ ...rowStyle, fontSize: 22 }}>
            <span>Total Bid</span>
            <strong>{money(finalEstimate.total)}</strong>
          </div>
        </section>
      </div>

      <section style={{ ...cardStyle, marginTop: 30 }}>
        <h2 style={{ marginTop: 0 }}>Proposal Preview</h2>
        <p>
          <strong>{clientName}</strong>, this proposal is submitted for{" "}
          <strong>{projectName}</strong> under the{" "}
          <strong>{trades[trade].label}</strong> scope of work.
        </p>
        <p>
          Estimated project size: <strong>{squareFeet.toLocaleString()} sq ft</strong>
        </p>
        <p>
          Total contract value: <strong>{money(finalEstimate.total)}</strong>
        </p>
        <p>
          This estimate includes labor, materials, overhead, and profit. All pricing is subject to site verification and final scope approval.
        </p>
      </section>

      <section style={{ ...cardStyle, marginTop: 30, background: "#fff" }}>
        <h2 style={{ marginTop: 0 }}>Bid Tracking</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>{projectName} — Pending — {money(finalEstimate.total)}</li>
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
  marginBottom: 12,
};

const buttonStyle: React.CSSProperties = {
  marginTop: 20,
  padding: "14px",
  width: "100%",
  background: "#000",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
};
