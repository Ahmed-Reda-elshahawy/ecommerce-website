import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style/landSec.scss"
import "./style/productDetails.scss";
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../rtk/slices/CartSlice';
import { ShowLogin } from '../rtk/slices/LoginSlice';



function ProductDetails(props) {
    let User = useSelector(state => state.logInOut);
    let dispatch = useDispatch();

    const handleAddToCart = () => {
        if (User.auth === "admin" || User.auth === "user") {
            console.log(User);
            dispatch(AddToCart(props.product));
        }
        else {
            props.hide();
            dispatch(ShowLogin());
        }
    }


    return (
        <>
            <Modal show={props.show} onHide={props.hide} className='product-details'>
                <Modal.Header closeButton>
                    <Modal.Title>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="img-div">
                        <img src={props.product.image} alt="" />
                    </div>
                    <div className="disc">
                        <p className='text-black-50 fs-6'>
                            {props.product.description}
                        </p>
                        <div className="price-count d-flex justify-content-between align-items-center">
                            <p className='fw-bold sec-color mb-0'>Price: ${props.product.price}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleAddToCart}>
                        Add To Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductDetails;