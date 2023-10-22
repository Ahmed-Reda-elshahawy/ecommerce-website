import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./style/landSec.scss";
import "./style/cart.scss";
import { RemoveFromCart, decreaseQuantity, increaseQuantity } from '../rtk/slices/CartSlice';
import Swal from 'sweetalert2';


function Cart() {
    let cart = useSelector(state => state.Cart);
    let dispatch = useDispatch();

    const fireAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            showCancelButton: true,
            confirmButtonText: 'Buy',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Payment Done', '', 'success')
            }
        })
    }


    const delivery = 10;

    let total = cart.reduce((acc, product) => {
        return acc += product.quantity * product.price;
    }, 0);

    let discount = (total > 100 ? 10 : 0);

    return (
        <div className='container pt-5 pb-5 min-vh-100'>
            {
                cart.map((product) => {
                    return (
                        <div className="added-product d-flex" key={product.id}>
                            <img src={product.image} alt="" />
                            <div className="disc">
                                <div className="price-details">
                                    <h3>{product.title}</h3>
                                    <div className="mt-4">
                                        <p><span>Price for one: </span>${product.price}</p>
                                        <div className="count d-flex align-items-center gap-3 pt-2">
                                            <span className='text-black-50'>Qty: </span>
                                            <button className='btn btn-secondary py-1' onClick={() => dispatch(increaseQuantity(product))}><i className="fa-solid fa-plus"></i></button>
                                            <span className='fs-4'>{product.quantity}</span>
                                            <button className='btn btn-secondary py-1' onClick={() => dispatch(decreaseQuantity(product))}><i className="fa-solid fa-minus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <p className='mt-4 mb-0 sec-color border border-1 rounded-2 p-2 shadow-sm text-center'>
                                    <span className='fw-bold'>Total Price: </span>${(product.quantity * product.price).toFixed(2)}
                                </p>
                            </div>
                            <button className='btn-delete btn px-1 py-0' onClick={() => dispatch(RemoveFromCart(product.id))}><i className="fa-solid fa-trash-can text-danger"></i></button>
                        </div>
                    );
                })
            }
            <div className="order-summary bg-white w-100 rounded-2 shadow-sm p-4 mt-4">
                <h4 className='border-bottom pb-3'>order summary</h4>
                <div className="info pb-5 pt-3">
                    <div className="selected-items d-flex justify-content-between">
                        <p>
                            Selected  item(s) price
                        </p>
                        <p>
                            $
                            {(total).toFixed(2)}
                        </p>
                    </div>
                    <div className="discount d-flex justify-content-between">
                        <p>
                            Discount
                        </p>
                        <p>
                            - ${(discount).toFixed(2)}
                        </p>
                    </div>
                    <div className="delivery-cost d-flex justify-content-between">
                        <p>
                            Delivery Cost
                        </p>
                        <p>
                            + ${(delivery).toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="total d-flex justify-content-between pt-3 pb-1 border-top fw-bold">
                    <p>
                        Grand total
                    </p>
                    <p>
                        ${((total + delivery) - discount).toFixed(2)}
                    </p>
                </div>
                <button className='btn btn-warning w-100' onClick={fireAlert}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cart