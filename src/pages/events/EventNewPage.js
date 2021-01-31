import React from 'react';
import { Link } from 'react-router-dom';
import eventImage from '../../img/default_image.jfif';
import userImage from "../../img/user_default.png";

class EventNewPage extends React.Component{
  constructor(props) {
    super(props);
  }
 render(){
   return(
     <div><h3>New Event</h3>
       <div className='flex flex_evenly'>
         <div className='left-block'>
           <div>
             <img src={eventImage} width="100" height="100"/>
             <br/>
             <input type="button" value='upload' className='item_Input'/><br/>
             <input type="button" value="Delete" className='item_Input'/>
           </div>
         </div>
         <div className='right-block'>
               <div className='flex flex_end'>
                 <div className='item'>Event Title</div><div className='item_Input'><input/></div>
               </div>
               <div className='flex flex_end'>
                 <div className='item'>Start Date</div><div className='item_Input'><input/></div>
               </div>
               <div className='flex flex_end'>
                 <div className='item'>C1 Date</div><div className='item_Input'><input/></div>
               </div>
               <div className='flex flex_end'>
                 <div className='item'>C+1 Date</div><div className='item_Input'><input/></div>
               </div>
               <div className='flex flex_end'>
                 <div className='item'>Finish Date</div><div className='item_Input'><input/></div>
               </div>
         </div>
       </div>
     </div>
   );
  }

}


export default EventNewPage;