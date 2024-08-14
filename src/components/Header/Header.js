import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/CustomButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import './Header.css'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function Header(props) {

  const pathName = props?.location?.pathName

  return (
    <Navbar expand="lg" sticky='top' className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link as={NavLink} to="/" className={pathName === '/' ? 'header_link_active' : 'header_link'}>
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to="/portfolio" className={pathName === '/' ? 'header_link_active' : 'header_link'}>
            Portfolio
          </Nav.Link>
          {/* Vlog Link */}
          <Nav.Link as={NavLink} to="/vlogs" className={pathName === '/' ? 'header_link_active' : 'header_link'}>
            Vlogs
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.social).map((key) =>
            <a href={resumeData.social[key].link} target="_blank" rel="noopener noreferrer">{resumeData.social[key].icon}</a>
          )}
          <CustomButton text={'Hire me'} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header)