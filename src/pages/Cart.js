import React, { useContext, useState } from 'react';
import { FaDownload, FaUserMd } from 'react-icons/fa';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';


const Cart = () => {
   

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;
   


    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<FaUserMd />}
                                msg="Your Appointment is Empty"
                                link="/"
                                btnText="Home"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    
                                    {
                                        cartItems.map(item => (
                                            
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                           
                                        ))
                                    }
                                </div>
                                
                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Appointment &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'appoints' : 'appoint'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                             <button type="button" className="btn checkout_btn"><FaDownload /> Payments slip</button>

                                            </div>
                                            
                                            <div>
                                                <button type="button" className="btn checkout_btn"><FaDownload /> Medicine slip</button>
                                            </div>
                                           
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;