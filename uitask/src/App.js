import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

import { FaStar, FaRegStar } from "react-icons/fa"; // Star icons for ratings
import { AiOutlineRight } from "react-icons/ai";
import { BsClock, BsCardChecklist, BsClipboardData } from "react-icons/bs";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import CompanyLogos from "./CompanyLogos";


const renderStars = (rating) => {
  const totalStars = 5;
  return (
    <>
      {[...Array(totalStars)].map((_, index) =>
        index < rating ? (
          <FaStar key={index} color="orange" />
        ) : (
          <FaRegStar key={index} color="gray" />
        )
      )}
    </>
  );
};


const PricingCard = ({
  title,
  price,
  subtitle,
  description,
  features,
  buttonText,
  bestChoice,
}) => (
  <div className="col-md-4 mb-4">
    <div
      className={`card h-100 shadow-sm text-center p-4 border-0 ${
        bestChoice ? "border-primary" : ""
      }`}
    >
      {bestChoice && (
        <div className="text-end text-primary fw-bold">Best Choice</div>
      )}
      <h5 className="fw-bold">{title}</h5>
      <h2 className="display-6">
        {price} <small className="fs-6 text-muted">{subtitle}</small>
      </h2>
      <p className="text-muted">{description}</p>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            &#10003; {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3 w-100">{buttonText}</button>
    </div>
  </div>
);
const App= () => {
  return (
    <div>
       <header className="text-center py-5 bg-white">
       <h1 className="fw-bold display-5"> Explore our features for easily <br /> exam experience </h1>
        <p className="text-muted lead"> Discover Seamless Exam Solutions: Unlocking Effortless Assessment  Experiences </p>
        <div className="container text-center my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Dashboard />
          </div>
        </div>
      </div>
      <CompanyLogos />
  </header>
      

      {/* Company Logos */}
   

      

      {/* Features Section */}
      <section className="container my-5">
      <div className="container mt-4">
      {/* Header */}
      <div className="mb-4">
        <h4>Automatically Exam Scheduling</h4>
        <p className="text-secondary">
          Effortlessly Organize Your Exams: Simplify Scheduling Automatically
          with Our Advanced Features.
        </p>
      </div>

      <div className="row">
      
     
        <div className="col-md-4 mb-3">
  <div className="border p-3 rounded">
   
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span className="badge bg-primary">Running</span>
      <span className="badge bg-secondary">Assignment</span>
    </div>

    {/* Start and End Time */}
    <div className="row mb-3">
      <div className="col-6">
        <h6>Start</h6>
        <p className="fw-bold mb-0">10:00 - Tue, 16 Mar</p>
      </div>
      <div className="col-6 text-end">
        <h6>End</h6>
        <p className="fw-bold mb-0">10:00 - Wed, 17 Mar</p>
      </div>
    </div>

    <p className="mb-1">Title: Programming</p>
    <p className="mb-1">Subject: Backend</p>
    <p className="mb-3">Participants: 34 | Class: TECH-3A</p>

   
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-muted">5 Hours 37 Minutes 18 Seconds</span>
      <AiOutlineRight />
    </div>
  </div>
</div>

        {/* Scheduled */}
        <div className="col-md-4 mb-3">
  <div className="border p-3 rounded">
    {/* Status Badges */}
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span className="badge bg-primary">Running</span>
      <span className="badge bg-secondary">Assignment</span>
    </div>

    {/* Start and End Time */}
    <div className="row mb-3">
      <div className="col-6">
        <h6>Start</h6>
        <p className="fw-bold mb-0">7:00 - Tue, 16 Mar</p>
      </div>
      <div className="col-6 text-end">
        <h6>End</h6>
        <p className="fw-bold mb-0">16:00 - Wed, 17 Mar</p>
      </div>
    </div>

    {/* Details */}
    <p className="mb-1">Title: Programming</p>
    <p className="mb-1">Subject: Backend</p>
    <p className="mb-3">Participants: 34 | Class: TECH-3A</p>

    {/* Footer */}
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-muted">5 Hours 37 Minutes 18 Seconds</span>
      <AiOutlineRight />
    </div>
  </div>
</div>


        {/* Finished */}
        <div className="col-md-4 mb-3">
  <div className="border p-3 rounded">
    {/* Status Badges */}
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span className="badge bg-primary">Running</span>
      <span className="badge bg-secondary">Assignment</span>
    </div>

    {/* Start and End Time */}
    <div className="row mb-3">
      <div className="col-6">
        <h6>Start</h6>
        <p className="fw-bold mb-0">10:00 - Tue, 16 Mar</p>
      </div>
      <div className="col-6 text-end">
        <h6>End</h6>
        <p className="fw-bold mb-0">10:00 - Wed, 17 Mar</p>
      </div>
    </div>

    {/* Details */}
    <p className="mb-1">Title: Programming</p>
    <p className="mb-1">Subject: Backend</p>
    <p className="mb-3">Participants: 34 | Class: TECH-3A</p>

    {/* Footer */}
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-muted">5 Hours 37 Minutes 18 Seconds</span>
      <AiOutlineRight />
    </div>
  </div>
</div>
      </div>

      {/* Additional Features */}
      <div className="row mt-4">
        {/* Generate Question & Answer */}
        <div className="col-md-4 mb-3">
          <div className="border p-3 rounded text-center">
            <BsCardChecklist size={30} className="mb-3" />
            <h6>Generate Question & Answer</h6>
            <p className="text-secondary">
              Effortlessly generate questions and answers using AI.
            </p>
            <button className="btn btn-outline-primary btn-sm">
              Get Started - Generate
            </button>
          </div>
        </div>

        {/* Analyst Exam Result */}
        <div className="col-md-4 mb-3">
          <div className="border p-3 rounded text-center">
            <BsClipboardData size={30} className="mb-3" />
            <h6>Analyst Exam Result</h6>
            <p className="text-secondary">
              Leverage AI for detailed exam result insights.
            </p>
            <button className="btn btn-outline-primary btn-sm">Result</button>
          </div>
        </div>

        {/* Scanning Document Summary */}
        <div className="col-md-4 mb-3">
          <div className="border p-3 rounded text-center">
            <BsClock size={30} className="mb-3" />
            <h6>Scanning Document Summary</h6>
            <p className="text-secondary">
              Harness technology for swift document scanning.
            </p>
            <button className="btn btn-outline-primary btn-sm">Scanning</button>
          </div>
        </div>
      </div>
    </div>
      </section>

      {/* Pricing Section */}
      <section className="container my-5">
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-3">Pricing Plans</h3>
          <p className="text-muted">
            Choose the plan that best fits your exam requirements.
          </p>
        </div>
        <div className="row g-4">
          <PricingCard
            title="Basic Plan"
            price="$19"
            subtitle="/month"
            description="Perfect for small teams or individuals."
            features={["Schedule exams", "Generate questions", "Email support"]}
            buttonText="Get Started"
          />
          <PricingCard
            title="Pro Plan"
            price="$49"
            subtitle="/month"
            description="For professionals who need advanced tools."
            features={["All Basic features", "Document scanning", "Priority support"]}
            buttonText="Upgrade Now"
          />
          <PricingCard
            title="Enterprise Plan"
            price="$99"
            subtitle="/month"
            description="For large organizations and institutions."
            features={["All Pro features", "Custom integrations", "Dedicated support"]}
            buttonText="Contact Us"
          />
        </div>
      </section>
      <section className="container my-5">
        <div className="row">
          {/* Left Column: Star Ratings */}
          <div className="col-md-6 impact">
            <div className="mb-4">
              <strong>Impact</strong>
              <div>{renderStars(5)}</div>
            </div>
            <div className="mb-4">
              <strong>Impact</strong>
              
              <div>{renderStars(4)}</div>
            </div>
            <div className="mb-4">
              <strong>Impact</strong>
              <div>{renderStars(3)}</div>
            </div>
            <div className="text-end fw-bold fs-5">Score: 900</div>
          </div>

          {/* Right Column: Random Matter */}
          <div className="col-md-6">
            <h4>Streamlining Online Exam Reports</h4>
            <p>
              Facilitating Student Progress Tracking: This feature streamlines
              the generation of comprehensive exam reports for students,
              ensuring quick access to detailed performance summaries. The
              process is intuitive and efficient, saving time for educators and
              students alike.
            </p>
            <p>
              With innovative tools and seamless integration, online exams
              become more accessible, empowering learners to focus on their
              performance and growth.
            </p>
          </div>
        </div>
      </section>
      <section>
<div className="question-generator-container">
      {/* Left Section: Text Content */}
      <div className="left-section">
        <h5 className="subtitle">QUESTION CUSTOMISATION GENERATOR</h5>
        <h1 className="title">
          An effective question maker and easily customization
        </h1>
        <p className="description">
          An effective question maker allows users to create diverse exam
          questions swiftly, while also offering easy customization options.
        </p>
        <button className="explore-button">
          Explore More <span>&rarr;</span>
        </button>
      </div>

      {/* Right Section: Question Box */}
      <div className="right-section">
        <div className="question-box">
          <div className="header">
            <div className="profile-info">
              <span className="avatar">👤</span>
              <div>
                <h4 className="name">Mr. Verstappen</h4>
                <p className="role">Teacher</p>
              </div>
            </div>
            <span className="university-badge">Hogwarts University</span>
          </div>

          {/* Generated Questions */}
          <div className="questions">
            <div className="question1">Create 10 Questions about Sate Kambing</div>
            <div className="question2">Create 50 Questions about Formula 1</div>
            <div className="question3">Create 3 Essay about Harry Potter</div>
            <div className="question4">Can you change number 4</div>
          </div>

          {/* Input Field */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Ask me!"
              className="input-field"
            />
            <button className="generate-button">Generate</button>
          </div>
        </div>
      </div>
    </div>

</section>
      <section>
      <div className="hero-container">
      <div className="hero-content text-center">
        {/* Main Heading */}
        <h1 className="hero-heading">
          Quit squandering time and commence your exam administration now.
        </h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Optimize Efficiency: Initiate Seamless Exam Management Today
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn btn-dark me-3">Sign up for free</button>
          <button className="btn btn-outline-dark">See Exam.io in action</button>
        </div>
      </div>
    </div>
        </section>

      <footer className="footer-container">
      <div className="footer-content">
       
        <div className="footer-brand">
          <h2 className="logo">
            <span className="icon">📘</span> exxam.io
          </h2>
          <button className="trial-button">Unlimited Trial for 14 Days</button>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Sitemap</li>
              <li>User Flow</li>
              <li>Wireframes</li>
              <li>Content</li>
              <li>Flowchart</li>
              <li>User Flow Diagrams</li>
              <li>Release Notes</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>How it works</h4>
            <ul>
              <li>Knowledge base</li>
              <li>FAQ</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Pricing</h4>
            <ul>
              <li>Plans & Pricing</li>
              <li>Students</li>
              <li>Education</li>
            </ul>
            <h4>Company</h4>
            <ul>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

       
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>Have a question? Didn’t find what you were looking for?</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Exxam.io • <a href="#">Terms of Use</a> • <a href="#">Security</a> • <a href="#">Privacy</a> • info@exxam.com</p>
        <div className="social-icons">
          <span>✖️</span>
          <span>📰</span>
          <span>🔗</span>
          <span>📸</span>
          <span>🎥</span>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default App;