import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterData from "../../data/FooterData";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';


const Footer = () => {
  const [subValue, setSubValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue("");
    alert("Thankyou, you are subscribed to receive our daily newsletter");
  };

  const currYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper footer_wrapper">
          <div className="foot_about">
            <h2>
              <Link to="/">Dr-A</Link>
            </h2>
            <div className="foot_subs">
              <p>
                Subscribe to our Email alerts to receive early discount offers,
                and new products info.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="input_field"
                  placeholder="Email Address*"
                  required
                  value={subValue}
                  onChange={(e) => setSubValue(e.target.value)}
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            </div>

            
          </div>
          {
            FooterData.map((item)=>{
              const {id, heading, a, b, c, d, e} = item;
              return(
                <div key={id} className="ftr_detail">
                  <div  className="ftr_heading">
                    <strong>{heading}</strong>
                    <div key={id}>
                      <p>{a}</p>
                      <p>{b}</p>
                      <p>{c}</p>
                      <p>{d}</p>
                      <p>{e}</p>
                      
                    </div>
                  </div>

                </div>
                
              )}) 
            }
              
            
        </div>
      </div>

      <div className="app_dowload">
        <img src="https://cdn.shopify.com/s/files/1/0097/2433/0084/files/apps_2x_beed7dc8-e338-4f0c-b15f-96e6ff2ae2ce_800x.png?v=1631215890" alt="d-app" />

      </div>
      <div className="setor"></div>

      <div className="sub_footer">
        <div className="container">
          <div className="sub_footer_wrapper">
            <div className="foot_copyright">
              <p>
                <a>
                {currYear} | Dr-A ©️ All Rights Reserved. Built by |{" "}
                  AJAY CHAURASIYA
                </a>
              </p>
            </div>
            <div className="foot_social">
            <FaFacebook /> <FaInstagram /> <FaLinkedin /> <FaTwitter /> <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
