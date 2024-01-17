import React from 'react';
import SectionsHead from '../common/SectionsHead';




const Banner = () => {
    return ( <>
    
    <div className="side_cont">
       <SectionsHead heading="Visit Near by clinic" 
       paragraph="find your near Doctor and visit clinic"/>
        
        <div className='side_banner'>
            <img className='side_img' src='https://www.refreshhealthcare.biz/Upload/fldBlog/Talk-to-your-Doctor-Poster-Facebook1.jpg' alt='side-img' />
            <img className='side_img' src='https://static.vecteezy.com/system/resources/previews/012/942/791/non_2x/online-doctor-consultation-card-template-telehealth-service-editable-social-media-post-design-flat-color-illustration-for-poster-web-banner-ecard-vector.jpg' alt='side-img' />

            <h1>Find near clinic</h1>
            <img className='side_img' src='https://th.bing.com/th/id/OIP.KJ6N3uAHeHr3VEM5W6eXegHaHa?w=500&h=500&rs=1&pid=ImgDetMain' alt='side-img' />
            
        </div>
    </div>
    </> );
}
 
export default Banner;