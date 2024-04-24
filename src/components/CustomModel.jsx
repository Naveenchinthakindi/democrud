import React from "react";
import "./styele.css"
import { useSelector } from "react-redux";
function CustomModel(props) {
    const {id,showPopup,setShowpopup} = props
    const userData = useSelector((state)=>state?.app?.user)

    const user = userData.filter((data)=>data.id===id)
    console.log("the user is ",user)

  return (
    <>
    <div className="d-flex justify-content-center">
    <div className="mmodalBackground">
        <div className="modalContainer">
         <p>{user[0].name}</p>
         <p>{user[0].email}</p>
         <p>{user[0].age}</p>
         <button onClick={()=>setShowpopup(false)}>close</button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default CustomModel;
