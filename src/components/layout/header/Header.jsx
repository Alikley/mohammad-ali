import {Container,Nav ,Navbar,NavDropdown } from 'react-bootstrap/';
import Admin from '../../../hooks/Admin';
// import { useAuth } from '../../../context/Roless';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../../context/LoginContext';
import { useContext } from 'react';

function Header() {
  // const { first , setProfile } = useAuth();
  const userLog = useContext(LoginContext)


  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">کاریار</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link> <NavLink to="/">خانه</NavLink></Nav.Link>
            {
              userLog.islogin?
              <NavLink to="/panel"> پنل</NavLink>
              :
              <NavLink to="/login">ورود</NavLink>

            }
            
            <NavDropdown title="ادمین" id="basic-nav-dropdown">
              <Admin />
            
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
