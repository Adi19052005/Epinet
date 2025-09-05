import React from 'react';

function Footer() {
  return (
    <footer className="py-5 border-top" style={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}>
      <div className="container">
        {/* Main row */}
        <div className="row justify-content-between">
          {/* About Section */}
          <div className="col-md-5 mb-4">
            <img
              src="/epinet.png"
              alt="Epinet Logo"
              style={{ width: "130px", height: "auto" }}
            />
            <p style={{ fontSize: "13px", color: "#d3d3d3", lineHeight: "1.6", marginTop: "12px" }}>
              Epinet Info Private Limited is a Mumbai-based digital agency. 
              We are equipped with cutting-edge technologies to empower businesses online. 
              Our solutions ensure a comprehensive digital transformation of your brand 
              through multiple proven strategies.
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="col-md-4 mb-4">
            <h3 style={{ fontWeight: "bold", color: "#ffaa00" }}>Get in Touch</h3>

            <div className="d-flex align-items-center mt-3">
              <i className="fa-solid fa-envelope me-2"></i>
              <span>info@epinet.in</span>
            </div>

            <div className="d-flex align-items-center mt-3">
              <i className="fa-solid fa-location-dot me-2"></i>
              <span>Mumbai | Pune | Bangalore</span>
            </div>

            <div className="d-flex align-items-center mt-3">
              <a 
                href="https://www.instagram.com/epinet.in/?hl=en"
                style={{ color: "#ffffff", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>

            <div className="d-flex align-items-center mt-3">
              <a 
                href="https://www.linkedin.com/company/epinet-info-pvt-ltd/?originalSubdomain=in"
                style={{ color: "#ffffff", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 justify-content-between align-items-center">
            
          <div className="col-4 md-6 mb-2">
            <p style={{ fontSize: "15px", margin: 0 }}>
              Copyright by <span style={{ color: "#ffaa00" }}>Epinet Info Pvt. Ltd.</span> all rights reserved
            </p>
          </div>
                      <div className="col-1"></div>

          <div className="col-4 md-6 mb-2 text-md-end">
            <p style={{ color: "#ffaa00", margin: 0 }}>Privacy Policies | Terms and Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
