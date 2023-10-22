import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "./Register.scss"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CloseReg } from '../../rtk/slices/RegisterSlice';
import { ShowLogin } from '../../rtk/slices/LoginSlice';
import { UsersData } from '../../Data/UsersData';

const Register = (props) => {
    let register = useSelector(state => state.register);
    let dispatsh = useDispatch();

    let [showPass, setShowPass] = useState(false);
    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    const handleShowLogin = () => {
        dispatsh(CloseReg());
        dispatsh(ShowLogin());
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
        if (!formData.fName) {
            errors.fName = "first Name is required";
        }

        if (!formData.lName) {
            errors.lName = "last Name is required";
        }

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
        setErrors(errors);  // Set the errors state

        // Submit the form if there are no errors
        if (Object.keys(errors).length === 0) {
            // Submit the form here
            UsersData.push(formData);
            console.log(UsersData);
            dispatsh(CloseReg());
            setFormData({
                email: "",
                password: "",
                fName: "",
                lName: "",
            });
            dispatsh(ShowLogin());
        }
    };


    return (
        <div>
            <Modal show={register.show} onHide={() => { dispatsh(CloseReg()) }} className='product-details'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-5'>
                    <div className="intro text-center">
                        <h3>Create an account</h3>
                        <p className='fs-8 text-secondary'>Already have an account? <Link onClick={handleShowLogin} className='text-primary decoration-none'>Sign In</Link></p>
                    </div>
                    <div className="form reg-form mt-5 mb-4">
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
                        <div className="input d-flex flex-column mt-3">
                            <label htmlFor="user-fName" className='text-black-50'>First Name</label>
                            <input type="text" name="fName" id="user-fName" className='border-0 border-bottom p-1 pt-2' value={formData.fName} onChange={handleChange} />
                        </div>
                        {errors.fName && <p style={{ color: "red", fontSize: "0.7rem" }}>{errors.fName}</p>}
                        <div className="input d-flex flex-column mt-3">
                            <label htmlFor="user-lName" className='text-black-50'>Last Name</label>
                            <input type="text" name="lName" id="user-lName" className='border-0 border-bottom p-1 pt-2' value={formData.lName} onChange={handleChange} />
                        </div>
                        {errors.lName && <p style={{ color: "red", fontSize: "0.7rem" }}>{errors.lName}</p>}
                    </div>
                    <Button variant="primary" className='d-block ms-auto me-auto' onClick={handleSubmit}>
                        Create An Acount
                    </Button>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="primary" className='ms-auto me-auto' onClick={handleSubmit}>
                        Create An Acount
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default Register