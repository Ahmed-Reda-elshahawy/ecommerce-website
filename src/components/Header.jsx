import React, { useEffect, useState } from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./style/landSec.scss";
import { fetchCategories } from '../rtk/slices/Categories';
import { SearchedProducts, fetchCategory } from '../rtk/slices/productsSlice';
import { fetchProducts } from '../rtk/slices/productsSlice';
import Login from '../pages/Login/Login';
import { ShowLogin } from '../rtk/slices/LoginSlice';
import { logout } from '../rtk/slices/LogInOutSlice';
import { ClearCart } from '../rtk/slices/CartSlice';


function Header() {
    let cart = useSelector(state => state.Cart);
    let Categories = useSelector(state => state.categoryList);
    let Products = useSelector(state => state.products);
    let User = useSelector(state => state.logInOut);
    let dispatsh = useDispatch();

    useEffect(() => {
        dispatsh(fetchCategories());
    }, [dispatsh])

    let [searchProducts, setSearchProducts] = useState([]);
    let handleChange = (productTitle) => {
        searchProducts = Products.filter((pro) => {
            return (
                pro.title.includes(productTitle)
            )
        });
        setSearchProducts(searchProducts);
        console.log(searchProducts);
    }


    const handleSignIn = () => {
        console.log(User);
        if (Object.keys(User).length !== 0) {
            dispatsh(logout());
            dispatsh(ClearCart());
            console.log("LogOUT");
        }
        else {
            dispatsh(ShowLogin());
        }
    }

    const handleLoginOut = () => {
        if (Object.keys(User).length !== 0) {
            return (
                <>
                    <span className='fw-bold' style={{ color: "rgb(218, 120, 116)" }}>{User.fName}</span>
                    <i className="fa-solid fa-right-from-bracket ps-2"></i>
                </>
            )
        }
        else {
            return (
                <>
                    <span>LogIn</span>
                    <i className="fa-regular fa-user ps-2"></i>
                </>
            )
        }
    }


    const handleDashboard = () => {
        if (Object.keys(User).length !== 0 && User.auth === "admin") {
            return (
                <Link to="dashboard" className='text-secondary'>
                    Dashboard
                </Link>
            )
        }
    }


    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary nav">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='text-secondary fw-bold'>Shopping<span className='sec-color'>Hub</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="search w-100 d-flex align-items-center justify-content-center gap-2 pt-3 pt-lg-0">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2 w-50"
                            value={Products.title}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        <button className='sec-bgColor py-1 px-2 rounded-2 text-light border-0' onClick={() => dispatsh(SearchedProducts(searchProducts))}><i className="fa-solid fa-magnifying-glass "></i></button>
                    </div>
                    <Nav className="ms-auto d-flex align-items-center gap-3">
                        <NavDropdown title="Category" id="basic-nav-dropdown p-3" className='cat-list'>
                            <div className="cat">
                                <Link className='link-all text-secondary d-block px-2 pt-1' onClick={() => dispatsh(fetchProducts())}>All</Link>
                            </div>
                            {
                                Categories.map((cat) => {
                                    return (
                                        <div key={cat} className='cat'>
                                            <Link className='link text-secondary d-block px-2 pt-1' onClick={() => dispatsh(fetchCategory(cat))}>{cat}</Link>
                                        </div>
                                    )
                                })
                            }
                        </NavDropdown>
                        <Link to="/about" className='text-secondary'>About</Link>
                        <Link to="/contact" className='text-secondary'>Contact</Link>
                        <Link onClick={handleSignIn} className='text-secondary'>
                            <div className="d-flex justify-content-center align-items-center">
                                {
                                    handleLoginOut()
                                }
                            </div>
                        </Link>
                        <Login />
                        {handleDashboard()}
                        <Link to="cart" className='position-relative'>
                            <i className="fa-solid fa-cart-shopping text-secondary"></i>
                            <span className='position-absolute sec-color' style={{ top: "-10px" }}>{cart.length}</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header