import './Sidebar.css';
import { Link } from 'react-scroll';

function Sidebar({handleNavClick})
{
    return(
        <>
        <nav class="navbar fixed-top  navbar-expand-lg    " style={{backgroundColor:"Black"}}>
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="bi bi-list" style={{color:"white"}} ></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto " style={{color:"white"}}>
        <li class="nav-item">
        <Link 
         style={{ textDecoration: 'none' }}
             activeClass="active-link"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            HOME
          </Link>
        </li>
        
       
        <li class="nav-item">
        <Link
         style={{ textDecoration: 'none' }}
             activeClass="active-link"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            ABOUT
          </Link>
        </li>
        <li class="nav-item">
        <Link
         style={{ textDecoration: 'none' }}
           activeClass="active-link"
            to="resume"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            RESUME
          </Link>
        </li>
       
          

      </ul>
    </div>
  </div>
</nav>
        </>
    );
    

   
}
export default Sidebar;