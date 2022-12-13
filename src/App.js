 import React from "react";
 import "./style.css";

export default function App() {
   const[toggale,setToggale] =React.useState(true)
   return (    
      <div>
     {toggale ?
     <form>
       name:<input type='text'/> <br/>
    password :<input type='password'/> <br/>
    submit :<input type="submit"/> <br/>
       </form> :
    //  <h1>Hello StackBlitz!</h1> :
    <div>
      <input type='text'/><br/>
      <input type='password'/> <br/>
      <input type='submit'/>
      </div>
      // <p> Take advantage of limited-time savings on select laptops. Shop our exclusive deals and get the best for less.</p>
      
     }

       <button onClick={()=>setToggale(!toggale)}>submit</button>
     </div>
   );
}
