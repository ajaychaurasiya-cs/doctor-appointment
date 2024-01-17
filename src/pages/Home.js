import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopDoctor from '../components/Doctor/TopDoctor'; 
import Services from '../components/common/Services';
import HeadServices from '../components/common/HeadServices';
import Side_banner from "../components/side_banner/Side_banner"



const Home = () => {

    return (
        <main>
            <section id="hero">
                <HeroSlider />
            </section>
            <section id='headservice' className="section">
                <div className="container">
                    <HeadServices />
                </div>

            </section>

            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Book an appointment for an in-clinic consultation" 
                    paragraph="Find experienced doctors across all specialties"/>
                    <FeaturedSlider />
                </div>
            </section>
                {/* id="products" className="section" */}
            <section >
                
                    <SectionsHead heading="Top Doctors" />
                    <div className="doctor_container">
                        <TopDoctor />
                        <Side_banner />
                    </div>
            </section>

            <Services />
        </main>
    );
};

export default Home;;