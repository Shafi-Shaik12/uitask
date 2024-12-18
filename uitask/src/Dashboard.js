import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h2>Hello, Mr. Verstappen</h2>
        <p>Welcome back to Exxam!</p>
        <button className="create-btn">Create Exam</button>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h3>Students at exams</h3>
          <p>432</p>
        </div>
        <div className="stat-card">
          <h3>Exam Finishes</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Running Exam</h3>
          <p>10</p>
        </div>
        <div className="stat-card">
          <h3>Completed Rate</h3>
          <p>86%</p>
        </div>
      </section>

      <section className="tools-section">
        <h3>Let's get started with these useful tools</h3>
        <div className="tools-container">
          <div className="tool-card">
            <h4>Start a new Exam</h4>
            <p>Create exams so easily with AI!</p>
          </div>
          <div className="tool-card new-feature">
            <h4>Analyst Exam Result</h4>
            <p>Analyze exam results to get stats.</p>
            <span className="badge">New Feature</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
