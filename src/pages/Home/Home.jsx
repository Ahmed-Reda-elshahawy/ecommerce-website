import React from 'react'
import "./Home.scss";
import ProductsList from '../../components/ProductsList';
import LandSec from '../../components/LandSec';

function Home() {
    return (
        <div className='home'>
            <LandSec />
            <ProductsList />
        </div>
    )
}

export default Home