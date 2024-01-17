import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';


const ProductCard = (props) => {

    const { id, images, title, education, Specializations, fees, rate, Experience } = props;

    const navigate = useNavigate()


    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };



    return (
        <>
            
            <div className="card doctor_card">
                <div className='doctor_card_cont' onClick={ () => navigate(`${'/Doctor-detail/'}${id}`)}>
               
                    <figure className="doctor_img">
                        
                            <img src={images} alt="doctor-img" />
                        
                    </figure>
                    <div className="doctor_details">

                        <h3 className="products_title">
                            {title}
                        </h3>
                        <h5 className="doctor_info">
                            <p>{education}</p>
                            <p>{Specializations}</p>
                            <p>{Experience}</p>
                        
                        </h5>
                        <div className="separator"></div>
                        <h2 className="doctor_fees">
                            Fee {fees} &nbsp;
                            
                        </h2>
                        <span className="rating_star">
                            <IoMdStar />
                            {rate}
                        </span>
                        
                    </div>
                </div>
                <button
                    type="button"
                    className={`btn products_btn ${activeClass(id)}`}
                    onClick={handleAddItem} >

                    {active ? 'Booked' : 'Book Now'}
                </button>
        
            </div>
           
        </>
    );
};

export default ProductCard;