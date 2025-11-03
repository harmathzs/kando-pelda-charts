/* TODO - npm i react-router-dom recharts react-google-charts c3 d3 */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { chartCommonData, COLORS } from "./modules/chart-common-data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Rectangle, PieChart, Pie, Cell } from 'recharts';

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
// TODO - outsource component
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
// TODO - outsource component
const RechartsPage = props => <>
 <h2>React Charts Page</h2>
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={chartCommonData.data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" padding={{left: 30}} />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="linear" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={chartCommonData.data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>

    <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={chartCommonData.data} fill="#8884d8" label >
            {chartCommonData.data.map((entry, idx)=><Cell key={entry.label} fill={COLORS[idx % COLORS.length]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
</>;
// TODO - outsource component
const GoogleChartsPage = () => <h2>Google Charts Page</h2>;
// TODO - outsource component
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
