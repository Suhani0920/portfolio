import React,{useState} from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Left Side: Animated Name */}
      <div className="logo">Suhani Pal</div>

      {/* Right Side: Toggle Button (Visible in Mobile) */}
      <img 
        src={menu_open} 
        alt="menu" 
        className="nav-mob-open" 
        onClick={() => setMenuOpen(true)} 
      />

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {/* Close Button (X) inside menu */}
        <img 
          src={menu_close} 
          alt="close" 
          className="nav-mob-close" 
          onClick={() => setMenuOpen(false)} 
        />
        <li><AnchorLink className="anchor-link" href="#home" onClick={() => setMenuOpen(false)}>Home</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#about" offset={50} onClick={() => setMenuOpen(false)}>About Me</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#work" offset={50} onClick={() => setMenuOpen(false)}>Portfolio</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#contact" offset={50} onClick={() => setMenuOpen(false)}>Contact</AnchorLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
