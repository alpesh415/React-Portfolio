import React from 'react'

export default function Navbar1() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white border-bottom border-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-primary-emphasis" href="#"><em>PORTFOLIO</em></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-3">
          <a class="nav-link active text-primary-emphasis" aria-current="page" href="#home"><em>Home</em></a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link text-primary-emphasis" href="#About"><em>About</em></a>
        </li>
           <li class="nav-item ms-3">
          <a class="nav-link text-primary-emphasis" href="#Resume"><em>Resume</em></a>
        </li>
           <li class="nav-item ms-3">
          <a class="nav-link text-primary-emphasis" href="#Servies"><em>Service</em></a>
        </li>
        <li class="nav-item dropdown ms-3">
          <a class="nav-link dropdown-toggle text-primary-emphasis" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <em> Dropdown</em>
          </a>
          <ul class="dropdown-menu text-primary-emphasis">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li class="nav-item ms-3">
          <a class="nav-link text-primary-emphasis" href="#Contect"><em>Contact</em></a>
        </li>

      </ul>
        <span><i class="bi bi-twitter-x text-primary-emphasis"></i>
              <i class="bi bi-facebook ms-3 text-primary-emphasis"></i>
              <i class="bi bi-instagram ms-3 text-primary-emphasis"></i>
              <i class="bi bi-linkedin ms-3 me-5 text-primary-emphasis"></i></span>
    
    </div>
  </div>
</nav>
    </div>
  )
}
