import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

const NavbarComponent = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            alt='Logo'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#men'>Men</Nav.Link>
            <Nav.Link href='#women'>Women</Nav.Link>
            <Nav.Link href='#kids'>Kids</Nav.Link>
            <Nav.Link href='#sale'>Sale</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className='justify-content-end'>
          <Form inline>
            <FormControl type='text' placeholder='Search' />
          </Form>

          <div style={{ padding: 10 }}>
            <Nav.Link href='/login'>Log in</Nav.Link>
          </div>
          <div className='vr'></div>
          <div style={{ padding: 10 }}>
            <Nav.Link href='/register'>Register</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;