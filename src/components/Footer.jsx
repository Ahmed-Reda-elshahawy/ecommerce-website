import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./style/footer.scss"


function Footer() {
    return (
        <div className="footer text-bg-dark p-5">
            <Container>
                <div className="row">
                    <div className="col-12 text-center col-sm-6 text-sm-start col-md-3">
                        <h4 className="mb-3">Customer Service</h4>
                        <ul className="list-unstyled">
                            <li className="mt-2">FAQ</li>
                            <li className="mt-2">Returns & Refunds</li>
                            <li className="mt-2">Terms & Conditions</li>
                            <li className="mt-2">Privacy & Policy</li>
                        </ul>
                    </div>
                    <div className="col-12 text-center col-sm-6 text-sm-start col-md-3">
                        <h4 className="mb-3">Our Store</h4>
                        <ul className="list-unstyled">
                            <li className="mt-2">
                                <Link to="/" className="text-decoration-none text-white">Home</Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/about" className="text-decoration-none text-white">About</Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/contact" className="text-decoration-none text-white">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 text-center col-sm-6 text-sm-start col-md-3">
                        <h4 className="mb-3">
                            <Link to="/about" className="text-decoration-none text-white">About Us</Link>
                        </h4>
                        <ul className="list-unstyled">
                            <li className="mt-2">Our Story</li>
                            <li className="mt-2">News</li>
                        </ul>
                    </div>
                    <div className="col-12 text-center col-sm-6 text-sm-start col-md-3">
                        <h4 className="mb-3">Follow Us</h4>
                        <div className="contact-links">
                            <Link
                                to="https://www.facebook.com"
                                className="face text-secondary text-decoration-none me-3"
                            >
                                <i className="fa-brands fa-facebook fa-2x"></i>
                            </Link>
                            <Link
                                to="https://www.linkedin.com"
                                className="linkedin text-secondary text-decoration-none me-3"
                            >
                                <i className="fa-brands fa-linkedin fa-2x"></i>
                            </Link>
                            <Link
                                to="https://twitter.com"
                                className="twitter text-secondary text-decoration-none me-3"
                            >
                                <i className="fa-brands fa-square-twitter fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer