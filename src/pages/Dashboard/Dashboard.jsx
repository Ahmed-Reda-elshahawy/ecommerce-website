import React, { useState } from 'react';
import "./Dashboard.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteProduct } from '../../rtk/slices/productsSlice';
import { ShowAdd } from '../../rtk/slices/AddSlice';
import AddProduct from '../../components/AddProduct';
import { ShowUpdate, updatingItem } from '../../rtk/slices/UpdateSlice';
import UpdateProduct from '../../components/UpdateProduct';



const Dashboard = () => {
    let Admin = useSelector(state => state.logInOut);
    let Products = useSelector(state => state.products);
    let dispatsh = useDispatch();

    const [isFullText, setIsFullText] = useState(false);
    const handleToggle = () => {
        setIsFullText(!isFullText);
    };
    const className = isFullText ? 'description m-0' : 'description ellipsis m-0';


    const handleUpdate = (product) => {
        dispatsh(updatingItem(product));
        dispatsh(ShowUpdate());
    }


    return (
        <div className='container-fluid'>
            <div className="dashboard row">
                <div className="sideBar p-2 col-2 p-md-3">
                    <div className='dash-title d-flex gap-2 align-items-center'>
                        <i className="fa-solid fa-sliders fa-xl"></i>
                        <h5 className='mb-1 d-none d-lg-block'>Dashboard</h5>
                    </div>
                    <div className="avatar text-center mt-5 pb-5">
                        <div className="icon">
                            <i className="fa-solid fa-user-tie fa-2xl"></i>
                        </div>
                        <h6 className='text-black mt-2 fw-bold'>{Admin.fName}</h6>
                    </div>
                    <ul className='side-links mt-5 ps-0'>
                        <Link to="/" className='d-block mb-5 text-center text-lg-start'>
                            <i className="fa-solid fa-house fa-xl"></i>
                            <span className='ps-2 d-none d-lg-inline'>Home</span>
                        </Link>
                        <Link to="/about" className='d-block mb-5 text-center text-lg-start'>
                            <i className="fa-solid fa-circle-info fa-xl"></i>
                            <span className='ps-2 d-none d-lg-inline'>About</span>
                        </Link>
                        <Link to="/contact" className='d-block mb-5 text-center text-lg-start'>
                            <i className="fa-solid fa-headset fa-xl"></i>
                            <span className='ps-2 d-none d-lg-inline'>Contact</span>
                        </Link>
                        {/* <Link to="/" className='d-block mb-5 text-center text-lg-start'>
                            <i className="fa-solid fa-right-from-bracket fa-xl"></i>
                            <span className='ps-2 d-none d-lg-inline'>LogOut</span>
                        </Link> */}
                    </ul>
                </div>
                <div className="content col-10 p-0">
                    <div className="content-head d-flex justify-content-between align-items-center p-3 shadow-sm text-white-50 mb-4">
                        <h5 className='text-black'>Products List</h5>
                        <button className='btn btn-primary' onClick={() => dispatsh(ShowAdd())}>Add Product</button>
                        <AddProduct />
                    </div>
                    <div className='container'>
                        {/* <div className="products-header bg-white p-3 mb-3 rounded">
                            <ul className='d-flex gap-5 m-0 p-0'>
                                <li className='product-w'>Image</li>
                                <li className='title'>Title</li>
                                <li className='price'>Price</li>
                            </ul>
                        </div> */}
                        {
                            Products.map((product) => {
                                return (
                                    <div className='product d-flex text-center align-items-center bg-white mb-2 p-3 rounded gap-5' key={product.id}>
                                        <img className="product-img" src={product.image} alt="product_img" />
                                        <p className="title m-0">{product.title}</p>
                                        <p className={className} onClick={handleToggle}>{product.description}</p>
                                        <p className="price m-0">${product.price}</p>
                                        <div className='actions d-flex gap-3 ms-lg-auto'>
                                            <button className='btn p-1' onClick={() => handleUpdate(product)}>
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </button>
                                            <button className='btn p-1' onClick={() => dispatsh(DeleteProduct(product))}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <UpdateProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;