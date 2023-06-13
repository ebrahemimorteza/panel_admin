import swal from "sweetalert"
const NewCompo = MainAlert => {
    const cms =(props)=>{
        const Confirm= (message)=>{
            return swal({
                title: "ایا مطمینی?",
                text: message,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        }
        const Alert= (message,icon)=>{
        return swal(message, {
                icon: icon,
              });
        }
        return ( 
        <MainAlert {...props} Confirm={Confirm} Alert={Alert}/>
     );
    }
    return cms
}
 
export default  NewCompo 
