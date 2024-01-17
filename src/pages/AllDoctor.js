import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import useActive from '../hooks/useActive';
import Data from '../data/data';
import DoctorCard from '../components/Doctor/DoctorCard';
import SectionsHead from '../components/common/SectionsHead';
import Headservices from '../components/common/HeadServices';



const TopDoctor = () => {

    const [filter, setFilter] = useState(Data);
    const { activeClass, handleActive } = useActive(0);

    // making a unique set of product's category
    const DoctorCategory = [
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
            
            <SectionsHead paragraph="." />
            <SectionsHead paragraph="." />
            
            <section id='headservice' className="section">
                <div className="container">
                    <Headservices />
                </div>

            </section>
            
            <SectionsHead paragraph="." />
            <SectionsHead heading="All DOCTORS" />
            <SectionsHead paragraph="." />

            <div className="products_filter_tabs">

                <ul className="tabs">
                
                    {
                        DoctorCategory.map((item, i) => (
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
                    filter.map(item => 
                        <DoctorCard
                            key={item.id}
                            {...item}
                            
                        />
                    )
                }
                
                <div className="card products_card browse_card">
                    <Link to="/">
                        . . . . . . Back To <br /> Home . . . . . . .<BsArrowRight />
                    </Link>
                </div>
            </div>
            <div >
                
            </div>
        </>
    );
};

export default TopDoctor;