import { Badge, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo.svg';
import useUserStore from '../../features/user/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../features/auth/authStore';
import cartLogo from '../../assets/cart.svg';
import useCartStore from '../../features/cart/cartStore';
import { CiSearch } from "react-icons/ci";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";
import useProductStore from '../../features/product/productStore';
import { useScroll } from '../../context/ScrollContext';

const NavbarComponent = () => {
  const { token, error, logout } = useAuthStore();
  const { user, getCurrentUser } = useUserStore();
  const { filterProduct } = useProductStore();
  const { cart } = useCartStore();
  const navigate = useNavigate();
  const { scrollToData } = useScroll();

  useEffect(() => {
    if (token && !user) {
      getCurrentUser();
    }
  }, [token, user, getCurrentUser]);

  const handleLogout = () => {
    logout().then(() => window.location.reload());
  };

  const handleFilterProduct = async ({ gender, kids }) => {
    filterProduct({ gender: gender, kids: kids })
      .then(() => scrollToData());
  };

  return (
    <>
      {
        error && (
          <ToastContainer
            position="top-right"
            autoClose={false}
            bodyClassName={{ type: 'error' }}
          >
            {error}
          </ToastContainer>
        )
      }

      {
        user
          ? (
            <div className='d-flex justify-content-end pe-5'>
              <div style={{ padding: 10 }}>
                <NavDropdown title={`Hi, ${user.username}`}>
                  <NavDropdown.Item onClick={() => navigate('/orders')}>
                    View orders
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Change profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout} className='btn-logout'>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
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

      <Navbar expand='lg' className='bg-body-tertiary pb-4 px-5'>
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
            <Nav.Link onClick={() => handleFilterProduct({ gender: 0 })}>
              Men
            </Nav.Link>
            <Nav.Link onClick={() => handleFilterProduct({ gender: 1 })}>
              Women
            </Nav.Link>
            <Nav.Link href='#kids'>
              Kids
            </Nav.Link>
            <Nav.Link href='#sale'>
              Sale
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className='d-inline-block justify-content-end'>
          <Button
            className='mx-2'
            variant='outline'
            style={{ border: 'solid 1px' }}
            onClick={scrollToData}
          >
            <CiSearch width={30} />{' '}
            Search
          </Button>

          <a href="/cart">
            <img src={cartLogo} alt="cart" width='30' height='30' />
            {user && <Badge>{cart.length}</Badge>}
          </a>
        </div>
      </Navbar >
    </>
  );
};

export default NavbarComponent;