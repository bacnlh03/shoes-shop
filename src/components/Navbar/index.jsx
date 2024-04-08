import { Badge, Button, Container, Form, FormControl, Nav, Navbar, Spinner, Toast } from 'react-bootstrap';

import logo from '../../assets/logo.svg';
import useUserStore from '../../features/user/userStore';
import { useEffect } from 'react';
import useAuthStore from '../../features/auth/authStore';
import cartLogo from '../../assets/cart.svg';
import useCartStore from '../../features/cart/cartStore';

const NavbarComponent = () => {
  const { token, isLoading, error, logout } = useAuthStore();
  const { user, getCurrentUser } = useUserStore();
  const { cart } = useCartStore();

  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
  }, [token, getCurrentUser]);

  const handleLogout = () => {
    logout().then(() => window.location.reload());
  };

  return (
    <>
      <Toast show={error !== null} delay={1000} autohide>
        {error}
      </Toast>

      {
        user
          ? (
            <div className='d-flex justify-content-end pe-5'>
              <div style={{ padding: 10 }}>
                <Nav.Link href='#edit'>{user.username}</Nav.Link>
              </div>
              <div className='vr'></div>
              <Button variant='link' onClick={handleLogout} disabled={isLoading}>
                {
                  isLoading
                    ? <Spinner />
                    : 'Log out'
                }
              </Button>
            </div>
          ) : (
            <div className='d-flex justify-content-end pe-5'>
              <div style={{ padding: 10 }}>
                <Nav.Link href='/login'>Log in</Nav.Link>
              </div>
              <div className='vr'></div>
              <div style={{ padding: 10 }}>
                <Nav.Link href='/register'>Register</Nav.Link>
              </div>
            </div>
          )
      }

      <Navbar expand='lg' className='bg-body-tertiary pb-4'>
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
            <Form inline='true'>
              <FormControl id='search' type='text' placeholder='Search' />
            </Form>

            <a href="/cart">
              <img src={cartLogo} alt="cart" width='30' height='30' />
              {user && <Badge>{cart.length}</Badge>}
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;