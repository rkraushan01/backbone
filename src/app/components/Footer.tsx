'use client'

import { useRef } from "react";

function Footer() {
  const footerRef = useRef(null);
    return (
      <footer ref={footerRef} id="contact" className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col">
  <div>
    <a
      href="https://www.facebook.com/Pointerzone?mibextid=ZbWKwL"
      className="hover:text-white transition-colors duration-300"
    >
      Facebook
    </a>
  </div>
  <div>
    <a
      href="https://www.linkedin.com/company/backbone-career-platform/"
      className="hover:text-white transition-colors duration-300"
    >
      LinkedIn
    </a>
  </div>
  <div>
    <a
      href="https://www.instagram.com/pointerzone?igsh=MXFrODZjbWltZGJteg=="
      className="hover:text-white transition-colors duration-300"
    >
      Instagram
    </a>
  </div>
</div>

          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>Durgakund, Varanasi, UP, India</p>
            <p>UP 221005</p>
            <p>Email:primary@pointerzone.com</p>
            <p>Phone: 7909985884</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 PointerZone. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer