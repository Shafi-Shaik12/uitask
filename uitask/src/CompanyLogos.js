import React from "react";
import "./CompanyLogos.css";

const CompanyLogos = () => {
  return (
    <footer className="company-logos">
      <p>Supported and Powered by several top companies</p>
      <div className="logos">
        <img  className="mt-4"src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png" alt="XBOX" />
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/4/46/PlayStation_logo.svg" alt="PlayStation" />
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
        <img  className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" alt="Google" />
        <img  className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dropbox_logo_2017.svg/1280px-Dropbox_logo_2017.svg.png" alt="Dropbox" />
      </div>
    </footer>
  );
};

export default CompanyLogos;
