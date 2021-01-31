import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import userDefaultImage from '../../img/user_default.png';

class RegistrationPage extends React.Component{
    constructor(props) {
        super(props);
    }

 render(){
   return(
     <div><h3>Registration</h3>
       <div className='flex flex_evenly'>
         <div className='left-block'>
           <div>
               <img src={userDefaultImage} width="100" height="100"/>
               <br/>
               <input type="button" value='upload' className='item_Input'/><br/>
               <input type="button" value="Delete" className='item_Input'/>
           </div>
         </div>
         <div className='right-block'>
                 <div className='flex flex_end'>
                     <div className='item'>First Name</div><div className='item_Input'><input/></div>
                 </div>

                 <div className='flex flex_end'>
                     <div className='item'>Last Name</div><div className='item_Input'><input/></div>
                 </div>

                 <div className='flex flex_end'>
                     <div className='item'>Country</div><div className='item_Input'><input/></div>
                 </div>

                 <div className='flex flex_end'>
                     <div className='item'>Email</div><div className='item_Input'><input/></div>
                 </div>

                 <div className='flex flex_end'>
                     <div className='item'>Password</div><div className='item_Input'><input/></div>
                 </div>

                 <div className='flex flex_end'>
                     <div className='item'>Repeat password</div><div className='item_Input'><input/></div>
                 </div>
         </div>
       </div>
     </div>
   );
  }
}


export default RegistrationPage;