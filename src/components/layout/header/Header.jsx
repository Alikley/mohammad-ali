import {Container,Nav ,Navbar } from 'react-bootstrap/';

function Header({islogin}) {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">کاریار</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/about">درباره ما </Nav.Link>
            {
              islogin?
              <Nav.Link href="/panel">لیست مهارت اموز</Nav.Link>
              :
              <Nav.Link href="/login">ورود</Nav.Link>

            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header