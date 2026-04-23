"use client";

import { useMemo, useState } from "react";

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
  const [costPerSqFt, setCostPerSqFt] = useState(
    trades.drywall.defaultCostPerSqFt
  );
  const [materialsCost, setMaterialsCost] = useState(1800);
  const [laborCost, setLaborCost] = useState(2200);
  const [overheadPercent, setOverheadPercent] = useState(10);
  const [profitPercent, setProfitPercent] = useState(15);

  const [finalEstimate, setFinalEstimate] = useState<any>(null);
    const baseEstimate = squareFeet * costPerSqFt;
    const directCosts = baseEstimate + materialsCost + laborCost;
    const overhead = directCosts * (overheadPercent / 100);
    const profit = (directCosts + overhead) * (profitPercent / 100);
    const total = directCosts + overhead + profit;

    return {
      baseEstimate,
      directCosts,
      overhead,
      profit,
      total,
    };
  }, [
    squareFeet,
    costPerSqFt,
    materialsCost,
    laborCost,
    overheadPercent,
    profitPercent,
  ]);

  function onTradeChange(nextTrade: keyof typeof trades) {
    setTrade(nextTrade);
    setCostPerSqFt(trades[nextTrade].defaultCostPerSqFt);
  }

  return (
    <main
      style={{
        padding: 40,
        fontFamily: "Arial, sans-serif",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: 8 }}>Construction Wizzard Demo</h1>
      <p style={{ marginTop: 0, color: "#555" }}>
        Real working estimator • proposal preview • bid tracking
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginTop: 30,
        }}
      >
        <section
          style={{
            padding: 24,
            border: "1px solid #ddd",
            borderRadius: 12,
            background: "#fafafa",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Estimate Inputs</h2>
          <div className="inputs-panel">
  
  <h2>Estimate Inputs</h2>

  {/* inputs */}
  <input ... />
  <input ... />
  <input ... />
  <input ... />

  {/* 👇 THIS IS WHERE IT GOES */}
  <button 
    onClick={calculateEstimate}
    style={{
      marginTop: 20,
      padding: "14px",
      width: "100%",
      background: "#000",
      color: "#fff",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer"
    }}
  >
    Calculate Estimate
  </button>

</div>
<div>
  <h2>Estimate Inputs</h2>

  {/* inputs */}
  <input ... />
  <input ... />
  <input ... />

  {/* 👇 ADD IT HERE */}
  <button 
    onClick={calculateEstimate} 
    style={{
      marginTop: 20,
      padding: "12px",
      width: "100%",
      backgroundColor: "black",
      color: "white",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Calculate Estimate
  </button>
</div>
          <div style={{ marginBottom: 16 }}>
            <label>Project Name</label>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Client Name</label>
            <input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Trade</label>
            <select
              value={trade}
              onChange={(e) => onTradeChange(e.target.value as keyof typeof trades)}
              style={inputStyle}
            >
              {Object.entries(trades).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Square Feet</label>
            <input
              type="number"
              value={squareFeet}
              onChange={(e) => setSquareFeet(Number(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Cost Per Sq Ft</label>
            <input
              type="number"
              step="0.01"
              value={costPerSqFt}
              onChange={(e) => setCostPerSqFt(Number(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Materials Cost</label>
            <input
              type="number"
              value={materialsCost}
              onChange={(e) => setMaterialsCost(Number(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Labor Cost</label>
            <input
              type="number"
              value={laborCost}
              onChange={(e) => setLaborCost(Number(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Overhead %</label>
            <input
              type="number"
              value={overheadPercent}
              onChange={(e) => setOverheadPercent(Number(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 0 }}>
            <label>Profit %</label>
            <input
              type="number"
              value={profitPercent}
              onChange={(e) => setProfitPercent(Number(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>
        </section>

        <section
          style={{
            padding: 24,
            border: "1px solid #ddd",
            borderRadius: 12,
            background: "#fff",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Estimate Summary</h2>

          <div style={rowStyle}>
            <span>Project</span>
            <strong>{projectName}</strong>
          </div>
          <div style={rowStyle}>
            <span>Client</span>
            <strong>{clientName}</strong>
          </div>
          <div style={rowStyle}>
            <span>Trade</span>
            <strong>{trades[trade].label}</strong>
          </div>
          <hr />
          <div style={rowStyle}>
            <span>Base Estimate</span>
            <strong>{money(estimate.baseEstimate)}</strong>
          </div>
          <div style={rowStyle}>
            <span>Materials</span>
            <strong>{money(materialsCost)}</strong>
          </div>
          <div style={rowStyle}>
            <span>Labor</span>
            <strong>{money(laborCost)}</strong>
          </div>
          <div style={rowStyle}>
            <span>Direct Costs</span>
            <strong>{money(estimate.directCosts)}</strong>
          </div>
          <div style={rowStyle}>
            <span>Overhead</span>
            <strong>{money(estimate.overhead)}</strong>
          </div>
          <div style={rowStyle}>
            <span>Profit</span>
            <strong>{money(estimate.profit)}</strong>
          </div>
          <hr />
          <div style={{ ...rowStyle, fontSize: 22 }}>
            <span>Total Bid</span>
            <strong>{money(estimate.total)}</strong>
          </div>
        </section>
      </div>

      <section
        style={{
          marginTop: 30,
          padding: 24,
          border: "1px solid #ddd",
          borderRadius: 12,
          background: "#fafafa",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Proposal Preview</h2>
        <p>
          <strong>{clientName}</strong>, this proposal is for{" "}
          <strong>{projectName}</strong> under the{" "}
          <strong>{trades[trade].label}</strong> scope of work.
        </p>
        <p>
          Estimated project size: <strong>{squareFeet.toLocaleString()} sq ft</strong>
        </p>
        <p>
          Proposed contract value: <strong>{money(estimate.total)}</strong>
        </p>
      </section>

      <section
        style={{
          marginTop: 30,
          padding: 24,
          border: "1px solid #ddd",
          borderRadius: 12,
          background: "#fff",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Bid Tracking</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>{projectName} — Pending</li>
          <li>Warehouse Upgrade — Approved</li>
          <li>Retail Buildout — Rejected</li>
        </ul>
      </section>
    </main>
  );
}

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
<button
  onClick={calculateEstimate}
  style={{
    marginTop: 20,
    padding: "12px",
    width: "100%",
    background: "black",
    color: "white",
    borderRadius: 8,
    cursor: "pointer"
  }}
>
  Calculate Estimate
</button>
