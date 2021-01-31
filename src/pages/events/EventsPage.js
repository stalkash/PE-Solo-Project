import React from 'react';
import { Link } from 'react-router-dom';
import TableEvents from '../../tables/TableEvents';

var data = [
  {event: 'Event1', dates: '31.01.2021', participants: '3'},
  {event: 'Event2', dates: '01.02.2021', participants: '5'},
  {event: 'Event3', dates: '02.02.2021', participants: '8'}
];

class EventsPage extends React.Component{

 render(){
   return(
     <div><h3>Events</h3>
      <TableEvents data={data}/>
          <button>
            <Link to='/events/eventnew'>Add event</Link>
          </button>
     </div>
   );
  }

}


export default EventsPage;