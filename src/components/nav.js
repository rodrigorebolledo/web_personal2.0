import React from 'react';

var posicion = {
  position: 'fixed'
}

const Navbar = () => (
 <div >
    <nav class="navbar navbar-expand-lg navbar-dark secondary-color"  >
  <a class="navbar-brand" href="#">rrDev</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Habilidades">Habilidades</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#MyWorks">Trabajos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Contacto">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
 </div>
);

export default Navbar;