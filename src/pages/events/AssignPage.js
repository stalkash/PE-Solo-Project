import React from 'react';
import TableUsers from '../../tables/TableUsers';
import { Link } from 'react-router-dom';

var data = [
  {user: 'User1', event: 'Event1', role: 'Expert'},
  {user: 'User2', event: 'Event1', role: 'Competitor'},
  {user: 'User3', event: 'Event1', role: 'Competitor'}
];

class AssignPage extends React.Component{

 render(){
   return(
     <div><h3>Assign</h3>
        <TableUsers data={data} />
        <button><Link to='/admin'>Ok</Link></button> 
        <button><Link to='/admin'>Cancel</Link></button>
     </div>
   );
  }
}


export default AssignPage;