import React from "react";
import "./sideBar.css";

function SideBar() {
  return;
  <aside id="sideBar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="cpllapse"
          href="#"
        >
          <i className="bi bi-menu-button-wide"></i>
          <span>Documents</span>
          <i className="bi bi-chevron-down ms-auto"></i>
        </a>
      </li>
    </ul>
  </aside>;
}

export default SideBar;
