import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import useActive from '../../hooks/useActive';
import Data from '../../data/data';
import DoctorCard from './DoctorCard';
import SectionsHead from '../common/SectionsHead';



const TopDoctor = () => {

    const [filter, setFilter] = useState(Data);
    const { activeClass, handleActive } = useActive(0);

    // making a unique set of product's category
    const productsCategory = [
        'All',
        ...new Set(Data.map(item => item.gender))
    ];

    // handling product's filtering
    const handlegender = (gender, i) => {
        if (gender === 'All') {
            setFilter(Data);
            handleActive(i);
            return;
        }

        const filteredgender = Data.filter(item => item.gender === gender);
        setFilter(filteredgender);
        handleActive(i);
    };


    return (
        <>
            <div className="products_filter_tabs">
                <ul className="tabs">
                
                    {
                        productsCategory.map((item, i) => (
                            <li
                                key={i}
                                className={`tabs_item ${activeClass(i)}`}
                                onClick={() => handlegender(item, i)}
                            >
                               <SectionsHead heading={item} />
                            </li>
                        ))
                    } 
                </ul>
                {
                    filter.slice(0, 11).map(item => (
                        <DoctorCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
                
                <div className="card products_card browse_card">
                    <Link to="/all-AllDoctor">
                        Browse All <br /> Doctor<BsArrowRight />
                    </Link>
                </div>
            </div>
            <div >
                
            </div>
        </>
    );
};

export default TopDoctor;