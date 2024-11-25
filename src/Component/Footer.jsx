import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGoogle } from 'react-icons/fa';

function Footer() {

  return (
    <footer className="w-100 bg-black text-white py-5 mt-5">
      <div className="container">
        {/* Top section */}
        <div className="row mb-4">
          {/* Column 1: About */}
          <div className="col-md-2">
            <h5 className="font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">DEI</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sustainability</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our leadership</a></li>
              <li><a href="#" className="text-white text-decoration-none">Featured content</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="col-md-2">
            <h5 className="font-weight-bold">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Experience services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Advanced engineering services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Data engineering and analytics</a></li>
              <li><a href="#" className="text-white text-decoration-none">Application services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cloud, infrastructure and security services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Artificial Intelligence</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="col-md-2">
            <h5 className="font-weight-bold">Industries</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Hi-tech Engineering</a></li>
              <li><a href="#" className="text-white text-decoration-none">Banking and Financial Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Insurance</a></li>
              <li><a href="#" className="text-white text-decoration-none">Healthcare and Life Sciences</a></li>
              <li><a href="#" className="text-white text-decoration-none">Telecom</a></li>
              <li><a href="#" className="text-white text-decoration-none">Consumer Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Manufacturing</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="col-md-2">
            <h5 className="font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Investors</a></li>
              <li><a href="#" className="text-white text-decoration-none">Partners</a></li>
              <li><a href="#" className="text-white text-decoration-none">Business insights</a></li>
              <li><a href="#" className="text-white text-decoration-none">PR and News</a></li>
            </ul>
          </div>

          {/* Column 5: Careers */}
          <div className="col-md-2 ">
            <h5 className="font-weight-bold ms-2">Careers</h5>
            <ul className="list-unstyled ms-1">
              <li><a href="#" className="text-white text-decoration-none">Job opportunities</a></li>
              <li><a href="#" className="text-white text-decoration-none">Life @ Zensar</a></li>
            </ul>
          </div>

          {/* Column 6: Contact */}
          <div className="col-md-2 justify-content-end">
            <h5 className="font-weight-bold">Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Middle section */}
        <div className="d-flex justify-content-end mb-4">
          <a href="#" className="text-white text-decoration-none me-4">INDIA</a>
          <a href="#" className="text-white text-decoration-none me-4">US</a>
          <a href="#" className="text-white text-decoration-none me-4">UK</a>
          <a href="#" className="text-white text-decoration-none me-4">South Africa</a>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <a href="#" className="text-white text-decoration-none me-2">Human rights policy</a>
          <a href="#" className="text-white text-decoration-none me-2">DEI policy</a>
          <a href="#" className="text-white text-decoration-none me-2">Gender pay gap report</a>
          <a href="#" className="text-white text-decoration-none me-2">Stakeholder engagement policy</a>
          <a href="#" className="text-white text-decoration-none me-2">Grievance redressal policy</a>
          <a href="#" className="text-white text-decoration-none me-2">Sustainable procurement policy</a>
          <a href="#" className="text-white text-decoration-none me-2">Modern slavery statement</a>
          <a href="#" className="text-white text-decoration-none me-2">Cookie policy</a>
          <a href="#" className="text-white text-decoration-none me-2">Privacy notice</a>
          <a href="#" className="text-white text-decoration-none me-2">Disclaimer</a>
          <a href="#" className="text-white text-decoration-none me-2">Sitemap</a>
        </div>

        {/* Bottom section */}
        <div className="d-flex justify-content-between align-items-center">
          {/* Social icons */}
          <div className="d-flex gap-3">
            <FaLinkedin className="text-white" />
            <FaFacebook className="text-white" />
            <FaInstagram className="text-white" />
            <FaTwitter className="text-white" />
            <FaYoutube className="text-white" />
            <FaGoogle className="text-white" />
          </div>

          {/* Copyright */}
          <div className="text-white">
            © 2003-2024 Zensar Technologies Ltd. CIN:L72200PN1963PLC012621. All rights reserved
          </div>
        </div>
      </div>
    </footer>



  )
}

export default Footer
