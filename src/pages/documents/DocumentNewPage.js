import React from 'react';
import { Link } from 'react-router-dom';
import documentImage from "../../img/default_image.jfif";

class DocumentNewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['Event Title', 'Start Date', 'C1 Date', 'C+1 Date', 'Finish Date']
    }
  }
 render(){
   return(
     <div><h3>New Doc</h3>
       <div className='flex flex_evenly'>
         <div className='left-block'>
           <div>
             <img src={documentImage} width="100" height="100"/>
             <br/>
             <input type="button" value='upload' className='item_Input'/><br/>
             <input type="button" value="Delete" className='item_Input'/>
           </div>
         </div>
         <div className='right-block'>
               <div className='flex flex_end'>
                 <div className='item'>Document Title</div><div className='item_Input'><input/></div>
               </div>
               <div className='flex flex_end'>
                 <div className='item'>Day</div><div className='item_Input'><input/></div>
               </div>
               <div className='flex flex_end'>
                 <div className='item'>Document Content</div><div className='item_Input'><input/></div>
               </div>
               <form>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option1"/>
                      Experts
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option2"/>
                      Competitors
                    </label>
                  </div>
                </form>
         </div>
       </div>
     </div>
   );
  }
}


export default DocumentNewPage;