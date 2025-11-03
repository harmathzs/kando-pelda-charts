import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { chartCommonData } from "./modules/chart-common-data";

// Main top menu bar
function MainNav() {
  const location = useLocation();
  const isCharts = location.pathname.startsWith("/charts");
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="brand">React Data/Charts Site</div>
        <div className="nav-links">
          <Link to="/data" className={location.pathname === "/data" ? "active" : ""}>Data</Link>
          <Link to="/charts/recharts" className={isCharts ? "active" : ""}>Charts</Link>
        </div>
      </div>
    </nav>
  );
}

// Second menu bar under charts only
function ChartsSubNav() {
  const location = useLocation();
  if (!location.pathname.startsWith("/charts")) return null;

  return (
    <nav className="sub-nav">
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/charts/recharts" className={location.pathname === "/charts/recharts" ? "active" : ""}>Recharts</Link>
          <Link to="/charts/google" className={location.pathname === "/charts/google" ? "active" : ""}>Google</Link>
          <Link to="/charts/c3" className={location.pathname === "/charts/c3" ? "active" : ""}>C3</Link>
        </div>
      </div>
    </nav>
  );
}

// Scrollable content container
function ContentArea({ children }) {
  return (
    <main className="content-area">
      {children}
    </main>
  );
}

// Placeholder pages
const DataPage = () => <>
  <h2>Data JSON</h2>
  <p><strong>Title:</strong> {chartCommonData.title}</p>
  <p>
    <table>
      <tr>
        <th>Country</th>
        <th>Unemployment rate [%]</th>
      </tr>
      {chartCommonData.data.map( ({label, value})=><tr key={label}>
        <td>{label}</td>
        <td>{value}</td>
      </tr> )}
    </table>
  </p>
</>;
const RechartsPage = () => <h2>Recharts Charts Page</h2>;
const GoogleChartsPage = () => <h2>Google Charts Page</h2>;
const C3ChartsPage = () => <h2>C3.js Charts Page</h2>;

export default function App() {
  return (
    <Router>
      <MainNav />
      <ChartsSubNav />
      <ContentArea>
        <Routes>
          <Route path="/data" element={<DataPage />} />
          <Route path="/charts/recharts" element={<RechartsPage />} />
          <Route path="/charts/google" element={<GoogleChartsPage />} />
          <Route path="/charts/c3" element={<C3ChartsPage />} />
          <Route path="*" element={<DataPage />} />
        </Routes>
      </ContentArea>
    </Router>
  );
}
