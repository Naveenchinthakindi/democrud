import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateUser } from '../features/userDetailsSlice';

function Update() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [updateData, setUpdateData] = useState();
  
    const usersData = useSelector((state)=>state.app?.user)
    console.log("usersData ",usersData)
    useEffect(()=>{
        if(id){
            const singleData = usersData.filter((item)=>item.id===id)
            console.log("singleData ",singleData)
            setUpdateData(singleData[0])
        }
    },[])

    const newData = (e)=>{
       setUpdateData({...updateData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read")
    }

  return (
    <>
    <h1>Update</h1>
    <div className="d-flex flex-row justify-content-center">
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}  >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
           onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked = {updateData&& updateData.gender==="Male"}
            onChange={newData}
    
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData&& updateData.gender==="Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>  

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  )
}

export default Update