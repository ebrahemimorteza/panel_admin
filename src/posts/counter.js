import React,{ useState } from "react";
const Counter = Maincounter => {
    const newComponent=(props)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [count,setCount] = useState(0);
        const handlecount=()=>{
            setCount(count+1)
        }
    return ( 
<Maincounter {...props} handlecount={handlecount} count={count}/>
     );
    }
    return newComponent;
}
 
export default Counter;