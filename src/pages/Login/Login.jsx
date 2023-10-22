import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "./Login.scss"
import { Link } from 'react-router-dom';
import Register from "../Register/Register"
import { useDispatch, useSelector } from 'react-redux';
import { CloseLogin } from '../../rtk/slices/LoginSlice';
import { ShowReg } from '../../rtk/slices/RegisterSlice';
import { UsersData } from '../../Data/UsersData';
import { loginUser } from '../../rtk/slices/LogInOutSlice';


const Login = () => {
    let login = useSelector(state => state.login);
    let dispatsh = useDispatch();


    const handleShowReg = () => {
        dispatsh(CloseLogin());
        dispatsh(ShowReg());
    }

    let [showPass, setShowPass] = useState(false);
    const handleShowPass = () => {
        setShowPass(!showPass);
    }


    // form validation
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fName: "",
        lName: "",
        auth: "user"
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Validate the form data
        const errors = {};

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = "Invalid email address";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()-+]).{8,}$/.test(formData.password)) {
            errors.password = `Invaild password must include at least
            (8 chars, 1 upprecase char,
            1 lowercase char, 1 number,
            1 special char)`;
        }

        // password //
        // At least 8 characters long
        // Contains at least one uppercase letter
        // Contains at least one lowercase letter
        // Contains at least one number
        // Contains at least one special character

        // Set the errors state
        setErrors(errors);

        // Submit the form if there are no errors
        if (Object.keys(errors).length === 0) {
            // Submit the form here
            console.log(UsersData);
            const findedUser = UsersData.find(user => {
                return user.email === formData.email;
            })
            if (findedUser) {
                console.log("finded");
                dispatsh(loginUser(findedUser));
                dispatsh(CloseLogin());
                setFormData({
                    email: "",
                    password: "",
                    fName: "",
                    lName: "",
                });
            }
            else {
                errors.email = "Email not found, please signUp";
                setErrors(errors);
            }
        }
    };

    return (
        <div>
            <Modal show={login.show} onHide={() => dispatsh(CloseLogin())} className='product-details'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-5'>
                    <div className="intro text-center">
                        <p className='fs-4 mb-2'>Welcome Back!</p>
                        <h3>Sign in to your account</h3>
                        <p className='fs-8 text-secondary'>Don't have an account? <Link onClick={handleShowReg} className='text-primary decoration-none'>Sign Up</Link></p>
                    </div>
                    <div className="form login-form mt-5 mb-4">
                        <div className="input d-flex flex-column">
                            <label htmlFor="user-email" className='text-black-50'>Email address</label>
                            <input type="email" name="email" id="user-email" className='border-0 border-bottom p-1 pt-2' value={formData.email} onChange={handleChange} />
                        </div>
                        {errors.email && <p style={{ color: "red", fontSize: "0.7rem" }}>{errors.email}</p>}
                        <div className="input d-flex flex-column mt-3 position-relative">
                            <label htmlFor="user-password" className='text-black-50'>Password</label>
                            <input type={showPass ? "text" : "password"} name="password" id="user-password" className='border-0 border-bottom p-1 pt-2' value={formData.password} onChange={handleChange} />
                            <i className={showPass ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={handleShowPass}></i>
                        </div>
                        {errors.password && <p style={{ color: "red", fontSize: "0.7rem" }}>{errors.password}</p>}
                    </div>
                    <Button variant="primary" className='d-block ms-auto me-auto' onClick={handleSubmit}>
                        Sing In
                    </Button>
                </Modal.Body>
            </Modal>
            <Register />
        </div>
    )
}
export default Login;