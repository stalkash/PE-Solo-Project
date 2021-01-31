import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'

class LoginPage extends React.Component{
 render(){
   return(
     <div className='login_container'>
        <div className='login flex_end'>
            <div className='flex'>
                <div>E-mail</div> <div><input/></div>
            </div>
            <div>
                <div className='flex'>
                    <div>Password</div> <div><input/></div>
                </div>
            </div>
            <div class='flex flex_end'>
                <button>Sign in</button>
                <button>Sign Up</button>
            </div>
        </div>
     </div>
   );
  }
}


export default LoginPage;