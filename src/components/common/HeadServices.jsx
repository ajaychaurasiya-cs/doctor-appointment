import React, { useContext } from 'react';
import SectionsHead from './SectionsHead';
import { useNavigate } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';


const Headservices = () => {
    const navigate = useNavigate();
    const { formUserInfo, toggleForm } = useContext(commonContext);

    return (<>
         <SectionsHead heading="Consult top doctors online for any health concern" paragraph="Private online consultations with verified doctors in all specialists"/>
         
    <div className="serv_cont" onClick={() =>{
        toggleForm(formUserInfo? "": true)
        navigate("/all-AllDoctor")}}>
                               
            
        <div className="serv_imgs">
            <img className="img" src="https://media4.giphy.com/media/Uti27nbt3PnvJExMW2/giphy.gif?cid=790b76119fe7565414c63009e9da6388545b7744a896df3c&rid=giphy.gif&ct=s" alt="img" />
            <strong className='title'>Acne, pimple or skin issues</strong>
        </div>

        <div className="serv_imgs">
            <img className="img" src="https://th.bing.com/th/id/R.3d4b224092a96323912556f0ba4e8806?rik=rXVI2huFX8F8bg&riu=http%3a%2f%2fwww.animated-gifs.fr%2fcategory_body%2fpregnancy%2fpregnancy-55917514.gif&ehk=7jLaqvRryqf%2frPYfNBCuX3NADkYbhgj8mAMirGYmriw%3d&risl=&pid=ImgRaw&r=0" alt="img" />
            <strong className='title'>Pregnancy issues or Period doubts</strong>
        </div>
        
        <div className="serv_imgs">
            <img className="img" src="https://media.licdn.com/dms/image/D5612AQFHluNxxJWbaw/article-cover_image-shrink_600_2000/0/1682412367914?e=2147483647&v=beta&t=JcGHuCk27XVrhIVCIgJ2Y6op1B4gz2GnrJf6gA6kauA" alt="img" />
            <strong className='title'>Cold, cough or fever</strong>
        </div>
            
        <div className="serv_imgs">
            <img className="img" src="https://media.giphy.com/media/jn8f1f74DTNSVloSqg/giphy.gif" alt="img" />
            <strong className='title'>Child not feeling well</strong>
        </div>
            
        <div className="serv_imgs">
            <img className="img" src="https://media-s3-us-east-1.ceros.com/meltwater/images/2022/09/06/97b989fb2c3f272f8e66162222309a9b/funny-material.gif" alt="img" />
            <strong className='title'>Depression or Anxiety</strong>
        </div>
    </div> 
    </>
)}
 
export default Headservices;