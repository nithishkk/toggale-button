 import React from "react";
 import "./style.css";

export default function App() {
   const[toggale,setToggale] =React.useState(true)
   return (    
      <div>
     {toggale ?<h1>Hello StackBlitz!</h1> :
      <p> Take advantage of limited-time savings on select laptops. Shop our exclusive deals and get the best for less.</p>
      
     }

       <button onClick={()=>setToggale(!toggale)}>more</button>
     </div>
   );
}
