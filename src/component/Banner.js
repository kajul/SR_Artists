import React from 'react';
import {Link} from 'react-router-dom';
const Banner  = ( ) => {
    return(

        <div className="banner">
        
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
     
      <a class="navbar-brand" href="#">SR Artists</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="active"><Link to="/forms">Add New Artist</Link></li>

      </ul>
    </div>
  </div>
</nav>
  
            <div className="main_cover">
                <div className="logo">SR Artists...</div>
            </div>
            <span></span>
        </div>
    )
}

export default Banner;