import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/CustomButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Header.css';
import { DialogueModal } from '../Dialogue/DialogueModal';

function Header() {
  const [modalOpenar, setmodalOpenar] = useState(false);
  const location = useLocation();

  // Function to determine if the NavLink is active
  const getNavLinkClass = (path) => location.pathname === path ? 'header_link_active' : 'header_link';
  console.log("checking inside header", location.pathname)
  return (
    <Navbar expand="lg" sticky='top' className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link as={NavLink} to="/myprofile" className={getNavLinkClass('/')}>
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to="/portfolio" className={getNavLinkClass('/portfolio')}>
            Portfolio
          </Nav.Link>
          {/* Vlog Link */}
          <Nav.Link as={NavLink} to="/vlogs" className={getNavLinkClass('/vlogs')}>
            Vlogs
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.social).map((key, index) =>
            <a href={resumeData.social[key].link} key={index} target="_blank" rel="noopener noreferrer">{resumeData.social[key].icon}</a>
          )}
          <CustomButton text={'Hire me'} onClick={() => setmodalOpenar(true)} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
      <DialogueModal 
        dialgueLinks={Object.keys(resumeData.social)} 
        openMod={modalOpenar}
        onClose={() => setmodalOpenar(false)}
      />
    </Navbar>
  );
}

export default Header;
