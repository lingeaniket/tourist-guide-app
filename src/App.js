//Destination Component
import React from 'react'
import Destination from './Destination';
import './Destination.css'

function App() {
  return (
    <div>
      <Destination />
    </div>
    
  );
}

export default App;


//Feedback Component


// import { useState } from 'react';
// import React from 'react'
// import './App.css';
// import Feedback from './Feedback';

// function App() {
//   const [openReview, setOpenReview] = useState(false);

//   const handleReview=()=>{
//     if(openReview){
//       setOpenReview(false);
//     } else {
//       setOpenReview(true);
//     }
//   }
//   return (
//     <div>
//       <button onClick={handleReview}>Open review</button>
//       {openReview && (<Feedback handleClick={handleReview}/>)}
//     </div>
    
//   );
// }

// export default App;
