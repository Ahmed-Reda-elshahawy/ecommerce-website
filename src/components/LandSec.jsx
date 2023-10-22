import React from 'react';
import "./style/landSec.scss";
import landImg from "../assets/images/land.png";
import { ShowLogin } from '../rtk/slices/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';


function LandSec() {
    let User = useSelector(state => state.logInOut);
    let dispatsh = useDispatch();

    const shopNow = () => {
        if (Object.keys(User).length === 0) {
            dispatsh(ShowLogin())
        }
    }


    return (
        <div className='landing'>
            <div className="info">
                <h1>Online <span className=''>Shopping</span></h1>
                <p className='text-black-50'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit,
                    blanditiis at quae tenetur pariatur dolorum dignissimos id! Commodi et quos omnis,
                    sunt tempore nulla illum natus ullam accusantium tempora.
                </p>
                <button className='btn btn-outline-danger' onClick={shopNow}>Shop Now</button>
            </div>
            <div className="land-img">
                <img src={landImg} alt="" />
            </div>
        </div>
    )
}

export default LandSec;