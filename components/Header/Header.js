import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, Telegram } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import CostomButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky={'top'} className={'header'}>
      {/* Home link */}
      <Nav.Link as={NavLink} to="/resume" className="header_navlink">
        <Navbar.Brand className={'header_home'}>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className={'header_left'}>
          {/* Resume Link */}

         
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={pathName == '/contact' ? 'header_link_active' : 'header_link'}
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/experience"
            className={pathName == '/experience' ? 'header_link_active' : 'header_link'}
          >
            Work Experience
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/education"
            className={pathName == '/education' ? 'header_link_active' : 'header_link'}
          >
            Create Education
          </Nav.Link>
         
          <Nav.Link
            as={NavLink}
            to="/skills"
            className={pathName == '/skills' ? 'header_link_active' : 'header_link'}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/createResume"
            className={pathName == '/createResume' ? 'header_link_active' : 'header_link'}
          >
            Edit Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName == '/resume' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          {/* <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}
          >
            Portfolio
          </Nav.Link> */}

          <Nav.Link
            as={NavLink}
            to="/design"
            className={pathName == '/design' ? 'header_link_active' : 'header_link'}
          >
            Templates
          </Nav.Link>
        </Nav>

        <div className={'header_right'}>
          {/* {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))} */}
          {/* <CostomButton text={'Hire Me'} icon={<Telegram />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default withRouter(Header);
