import React, { useContext, useEffect, useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../../contexts/cart/cartContext';
import SectionsHead from '../common/SectionsHead';
import commonContext from '../../contexts/common/commonContext';


const CartItem = (props) => {

    const { id, images, title, Specializations, fees, } = props;

    const { removeItem } = useContext(cartContext);
    const { formUserInfo, toggleForm } = useContext(commonContext);


    const navigate = useNavigate()


    // current time

    const Time = () => {
        const [lastUpdateTime, setLastUpdateTime] = useState(new Date());
      
        useEffect(() => {
          const updateLastTime = () => {
            setLastUpdateTime(new Date());
          };

          updateLastTime();
      
          
        }, []); 
      
        return (
            <p>Last payment:{lastUpdateTime.toLocaleString()}</p>
          
        );
    };

    //handle click
    const handleSubmit = () => {
        setTimeout(() => {
         alert("Thankyou, For Appointment!");
            
        }, 100);
    };

    // show btn
    const [active, setActive] = useState(false);


    return (
        <>
            <div className="cart_item">
                
                <figure className="cart_item_img">
                    <Link to={`${'/Doctor-detail/'}${id}`}>
                        <img src={images} alt="Doctor-img" />
                        
                    </Link>
                </figure>
                <div className="cart_item_info">
                    <div className="cart_item_head">
                        <h4 className="cart_item_title">
                            <Link to={`/Doctor-detail/${id}`}>
                            <SectionsHead heading={title}  
                                paragraph={Specializations}/>
                                <div className="separator"></div>
                                
                                </Link>
                        </h4>
                        <div className="cart_item_del">
                            <span onClick={() => removeItem(id)}>
                                <TbTrash />
                            </span>
                            <div className="tooltip">Remove Item</div>
                        </div>
                    </div>

                    <small>{active? <Time /> : ''}</small>
                    <h2 className="cart_item_price">
                       Fee ₹{fees}
                       <span className={formUserInfo?(active?'show_consult_btn':""):true}  onClick={() => navigate('/chatbox')}>{active?'Consult Now':""}</span>
                    </h2>

                    
                    <button type="button" className="btn checkout_btn"
                     onClick={ ()=>{
                        toggleForm(formUserInfo? "": true)
                        handleSubmit()
                        setActive(true)
                        
                        }
                    }>{active? "! Pay Done": `Pay ₹${fees}`  }</button>

                </div>
            </div>
        </>
    );
};

export default CartItem;