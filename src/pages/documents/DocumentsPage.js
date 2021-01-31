import React from 'react';
import { Link } from 'react-router-dom';
import TableDocuments from '../../tables/TableDocuments';

var data = [
  {document: 'Doc1', day: 'C1', for: 'Experts'},
  {document: 'Doc2', day: 'C1', for: 'Competitors'},
  {document: 'Doc3', day: 'C+1', for: 'Competitors'}
];

class DocumentsPage extends React.Component{

 render(){
   return(
     <div><h3>Documents</h3>
      <TableDocuments data={data}/>
          <button>
            <Link to='/docs/docnew'>Add documents</Link>
          </button>
     </div>
   );
  }

}


export default DocumentsPage;