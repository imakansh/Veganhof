
import React from 'react';
import pic from "./images/VeganHof-Logo.png"

function Navbar(){

    return(<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-1">
  <a class="navbar-brand" href="/"><img src={pic} width="160" height="70" class="d-inline-block align-top" alt=""></img></a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Product">Products <span class="sr-only">(current)</span></a>
      </li>
      
      
      
    </ul>
    <ul className="navbar-nav navbar-collapse justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="/About">About</a>
      </li>
                <li><a class="nav-link" href="/Contact_Us">Contact Us</a></li>
                </ul>
  </div>
</nav>
</div>
    )
}

export default Navbar;