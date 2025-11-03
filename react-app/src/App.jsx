/* TODO - npm i react-router-dom recharts react-google-charts c3 d3 */

/* React Charts (ReCharts): https://recharts.github.io/ */
/* React Google Charts: https://www.react-google-charts.com/ */
/* C3 (D3): https://c3js.org/ */


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { chartCommonData, COLORS } from "./modules/chart-common-data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Rectangle, PieChart, Pie, Cell, ReferenceLine } from 'recharts';
import { Chart } from "react-google-charts";
import C3LineChart from "./components/C3LineChart/C3LineChart";

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

// math function to plot
const f = x => (Math.sin(x) + 2.0*x) /x

// Placeholder pages
// TODO - outsource component
const DataPage = () => <>
  <h2>Data</h2>
  <p><strong>Title:</strong> TODO chartCommonData title</p>
  <p>
    TODO table<br />
    TODO header cells: Country, Unemployment rate [%]<br />
    TODO body cells: chartCommonData data label, value<br />
  </p>
</>;
// TODO - outsource component
const RechartsPage = props => <>
 <h2>React Charts Page</h2>
    <div>TODO - draw Recharts LineChart</div>

    <div>TODO - draw Recharts BarChart</div>

    <div>TODO - draw Recharts PieChart in responsive container, colored by COLORS</div>

    {/* Plot f function: */}
    <div>TODO - plot f function by 1.5...3.2 domain and limes line</div>
</>;
// TODO - outsource component
const GoogleChartsPage = props => <>
 <h2>Google Charts Page</h2>
 <div>TODO - insert Google LineChart with chartCommonData data</div>
 <div>TODO - insert Google column bar chart with chartCommonData data</div>
 <div>TODO - insert Google PieChart with chartCommonData data</div>
 </>;
// TODO - outsource component
const C3ChartsPage = props => <>
  <h2>C3.js Charts Page</h2>
  <C3LineChart todo="pass chartCommonData" />
</>;

export default function App() {
  let _mathPlotData = []
  /* TODO - prepare array for plotting function properly */

  const [mathPlotData, setMathPlotData] = useState(_mathPlotData)

  return (
    <Router>
      <MainNav />
      <ChartsSubNav />
      <ContentArea>
        <Routes>
          <Route path="/data" element={<DataPage todo="pass mathPlotData" />} />
          <Route path="/charts/recharts" element={<RechartsPage todo="pass mathPlotData" />} />
          <Route path="/charts/google" element={<GoogleChartsPage todo="pass mathPlotData" />} />
          <Route path="/charts/c3" element={<C3ChartsPage todo="pass mathPlotData" />} />
          <Route path="*" element={<DataPage todo="pass mathPlotData" />} />
        </Routes>
      </ContentArea>
    </Router>
  );
}
