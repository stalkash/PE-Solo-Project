import React from 'react';
import { Link } from 'react-router-dom';


class EventPage extends React.Component{

 render(){
   return(
     <div className="event"><h3>Event</h3>
      <div className='event_Image'>
        
      </div>
      <div className='info d-flex flex-column align-items-center'>
        <h5>Event information</h5>
          <span>Event title: GobsJob</span>
          <button>
            <Link to='/events/changeTitle'>
                Change title
            </Link>
          </button>
      </div>
      <div className='info d-flex flex-column align-items-center'>
        <h5>Date information</h5>
          <span>Start date: 1212</span>
          <span>C1 date: 2445</span>
          <span>C+1 date: 6454</span>
          <span>Finish date: 9454</span>
          <button>
            <Link to='/events/changeDates'>
                Change dates
            </Link>
          </button>
      </div>
      <div className='info d-flex flex-column align-items-center'>
        <h5>Participants</h5>
          <span>Participants: 12</span>
          <button><Link to='/assign'>Assign</Link></button>
      </div>
     </div>
   );
  }

}


export default EventPage;