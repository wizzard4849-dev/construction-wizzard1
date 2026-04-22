export default function DemoPage() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Construction Wizzard Demo</h1>
      <p>Estimator • Proposal • Bid Tracking</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Quick Estimate</h2>

      <div style={{ marginBottom: 20 }}>
        <label>Project Size (sq ft): </label>
        <input type="number" placeholder="e.g. 2000" />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>Cost per sq ft ($): </label>
        <input type="number" placeholder="e.g. 15" />
      </div>

      <button style={{ padding: "10px 20px", cursor: "pointer" }}>
        Calculate Estimate
      </button>

      <hr style={{ margin: "30px 0" }} />

      <h2>Proposal Preview</h2>
      <p>Total Estimate: $30,000</p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Bid Status</h2>
      <ul>
        <li>Project A — Pending</li>
        <li>Project B — Approved</li>
        <li>Project C — Rejected</li>
      </ul>
    </main>
  );
}
