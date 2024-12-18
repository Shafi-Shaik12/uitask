import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">exxam.io</div>
      <nav className="menu">
        <ul>
          <li className="active">Dashboard</li>
          <li>Live Exam</li>
          <li>Class</li>
          <li>Projects</li>
          <li>Reports</li>
        </ul>
      </nav>
      <div className="tools">
        <p>TOOLS</p>
        <ul>
          <li>Find Template</li>
          <li>New Template</li>
          <li>Document AI</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
