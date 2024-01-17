import React, { useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import cartContext from '../contexts/cart/cartContext';
import Data from '../data/data';
import Services from '../components/common/Services';
import { FaClinicMedical, FaPhone, FaStar, FaVideo } from 'react-icons/fa';


const DructDetails = () => {

    const { addItem } = useContext(cartContext);

    const { id } = useParams();

    // here the 'id' received has 'string-type', so converting it to a 'Number'
    const DrId = parseInt(id);

    // showing the Druct based on the received 'id'
    const Druct = Data.find(item => item.id === DrId);

    const { images, title, info, education, Experience,
    fees, Document, Specializations, rate, } = Druct;



    // handling Add-to-cart
    const handleAddItem = () => {
        addItem(Druct);
    };

    // show Book or Booked
    const [active, setActive] = useState(false);
    setTimeout(() => {
        setActive(false);
    }, 3000);
        

    return (
        <>
            <section id="Druct_details" className="section">
                <div className="container">
                    <div className="wrapper Dr_details_wrapper">
                        <div className="Dr_img">
                          <img src={images}  alt="dr-img" />  
                        </div>

                        <div className="Dr_details_right_col">
                            <h1 className="Dr_details_title">{title}</h1>
                            <h4 className="Dr_details_info">{info}</h4>
                            <p>{education}</p>
                            <p>{Experience}</p>
                            

                            <div className="Dr_details_ratings">
                                <span className="rating_star">
                                   <p><FaStar />{rate}</p> 
                                </span>
                                <span></span>
                            </div>

                            <div className="separator"></div>

                            <div className="Dr_details_price">
                                <div className="price_box">
                                    <h2 className="price">
                                       Fee ₹{fees}
                                    </h2>
                                    
                                    <span className="tax_txt">First Consult 50% off </span>
                                </div>
                            
                            </div>

                            <div className="separator"></div>

                            <div className="Dr_details_offers">
                                <ul>
                                    <h4>Pick a time slot</h4>
                                    <p>Mon - Sat</p>
                                    <p> 11:00 AM - 04:00 PM</p>   
                                </ul>
                                     
                                

                                <ul>
                                    <li><FaVideo /> Video consulting</li>
                                    <li><FaClinicMedical /> Clinic Appointment</li>
                                    <li><FaPhone /> Call Assistant </li>

                                </ul>

                                <ul>For more 
                                    <details>
                                        <p>Clinic visit OR Dr-A</p>
                                        <p>Hospital visit more facility
                                            OR Dr-A 
                                        </p>
                                        <p>Medicine facility Dr-A </p>
                                    </details>
                                </ul>
                                
                            </div>

                            <div className="separator"></div>

                            <div className="Dr_details_book_btn">
                                <button
                                    type="button"
                                    className="btn" 
                                    onClick={ ()=>{
                                        handleAddItem()
                                        setActive(true)}
                                    }
                                >
                                  
                                 {active? "Booked": "Book Now"  }
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
            <div className='Dr_doc'>
                <span className='Dr_doc_cont'>
                    <h3>Services</h3>
                    <li>{Document}</li>
                </span>

                <span className='Dr_doc_cont'>
                    <h3>Specialization</h3>
                    <li>{Specializations}</li>
                </span>

                <span className='Dr_doc_cont'>
                    <h3>Education</h3>
                    <li>{education}</li>
                </span>

                <span className='Dr_doc_cont'>
                    <h3>Experience</h3>
                    <li>{Experience}</li>
                </span>
                
            </div>

            <div className="separator"></div>

            <Services />
        </>
    );
};

export default DructDetails;