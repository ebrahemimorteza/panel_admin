import { useState } from "react";
import Counter from "./counter";
const Count = (props) => {
    const{count,handlecount,name}=props;
    return ( 
        <div>
        <button  onClick={handlecount}>click</button>
        <span >{name}count:{count}</span>
        </div>
      
     );
}
 
export default Counter(Count);