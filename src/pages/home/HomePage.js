import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
 render(){
   return(
     <div><h2>Home Page</h2>
      <p>
          <button>
            <Link to='/login'>Login</Link>
          </button> 
          <br></br>
          <button>
            <Link to='/admin'>Admin</Link>
          </button> 
      </p>  
     </div>
   );
  }
}


export default HomePage;