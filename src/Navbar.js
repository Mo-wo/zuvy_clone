import React, { useState } from "react";
import logo from './images/zuvyLogo_no-bg.png';
import navStyles from './styles/navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const [openNav, setOpenNav] = useState(true);

    const handleClick = () => {
      setOpenNav(!openNav)

    }

    return ( 
        <nav className={navStyles.nav}>
            <div className={navStyles.navContent}>
                <div className={navStyles.menuIcons}>
                        //Modify Here
                    <button onClick={handleClick} className={navStyles.hamburger}>
                        {openNav ? (
                            <MenuIcon sx={{ fontSize: "35px", textAlign: "center" }} /> ) : (
                           <CloseIcon sx={{ fontSize: "35px", textAlign: "center" }} /> 
                        )}
                    </button>
                </div>
                <img className={navStyles.img} src={logo} alt="Zuvy Logo" />
                {/* style={{ display: (showNav ? 'flex' : 'none') }} */}
                <div className={openNav ? navStyles.navMenu : `${navStyles.expanded_nav} ${navStyles.navMenu}`} >
                    {/* {} */}
//                     <ul className={navStyles.ul}>
//                         <li className={navStyles.li}><a href="#Home">Home</a></li>
//                         <li className={navStyles.li}><a href="#How">How It works</a></li>
//                         <li className={navStyles.li}><a href="#Features">Features</a></li>
//                         <li className={navStyles.li}><a href="#FAQs">FAQs</a></li>
//                     </ul>
                    <div className={navStyles.navLink}>
                        <span>Join the Waitlist</span>
                    </div>
                </div>
               
            </div>
        </nav>
        
    );
}
 
export default Navbar;
