import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "./style/landSec.scss"
import "./style/ProductCart.scss";
import ProductDetails from './ProductDetails';


function ProductCart(props) {
    let [showDetails, setShowDetails] = useState(false);
    let handleShow = () => {
        setShowDetails(true);
    }

    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }} onClick={handleShow}>
                <Card.Img variant="top" src={props.product.image} className='card-img' />
                <Card.Body>
                    <Card.Title>{(props.product.title).slice(0, 15)}</Card.Title>
                    <Card.Text className='sec-color fw-bold'>
                        $ {props.product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            <ProductDetails product={props.product} show={showDetails} hide={() => setShowDetails(false)} />
        </div>
    )
}

export default ProductCart