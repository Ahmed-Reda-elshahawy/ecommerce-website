import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../rtk/slices/productsSlice';
import ProductCart from './ProductCart';

function ProductsList() {
    let Products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    return (
        <div className='container d-flex gap-3 flex-wrap pb-5 pt-5 justify-content-center'>
            {
                Products.map((product) => {
                    return (
                        <div key={product.id}>
                            <ProductCart product={product} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsList;