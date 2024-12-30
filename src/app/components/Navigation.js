'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname(); // Get current route

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to determine if a link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar Brand with Favicon */}
        <Link
          className={`navbar-brand d-flex align-items-center ${
            isActive('/') ? 'active-page' : ''
          }`}
          href="/"
        >
          <Image
            src="/logo.ico"
            alt="Logo"
            width={32}
            height={32}
            className="me-2"
          />
          <span className="fw-bold">Iris</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/music') ? 'active-page' : ''}`}
                href="/music"
              >
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive('/projects') ? 'active-page' : ''
                }`}
                href="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
