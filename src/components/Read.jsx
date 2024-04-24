import React, { useEffect, useState } from "react";
import { showUser } from "../features/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/userDetailsSlice";

function Read() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [showPopup, setShowpopup] = useState(false);
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const { user, loading } = useSelector((state) => {
    return state.app;
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log("user is ", user);
  console.log("loading ", loading);
  return (
    <>
      {showPopup && (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowpopup={setShowpopup}
        />
      )}
      <h1>Read</h1>

      {user &&
        user.map((item) => (
          <div
            key={item.id}
            className="card w-50 mx-auto bg-light text-black m-3"
          >
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2  text-black">{item.email}</h6>
              <p className="card-subtitle mb-2 text-black">{item.gender}</p>
              <a
                className="btn btn-success card-link m-1"
                href="#"
                onClick={() => [setId(item.id), setShowpopup(true)]}
              >
                View
              </a>

              <Link
                to={`/edit/${item.id}`}
                className="btn btn-primary card-link m-1"
              >
                Edit
              </Link>
              <Link
                className="btn btn-danger card-link m-1"
                onClick={() => dispatch(deleteUser(item.id))}
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}

export default Read;
