import React from "react";
import { Link } from "react-router-dom";

function NavbarElement() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">CaseList <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/calendar">Calendar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/page3">Page3</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default NavbarElement;
