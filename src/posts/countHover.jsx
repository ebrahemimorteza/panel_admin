import { useState } from "react";
import Counter from "./counter";
const CountHover = (props) => {
const{count,handlecount}=props;
    return ( 
        <div>
        <button  onMouseDown={handlecount}>click</button>
        <span >count:{count}</span>
        </div>
      
     );
}
 
export default Counter(CountHover);