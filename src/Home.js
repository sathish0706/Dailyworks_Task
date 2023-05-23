import React from "react";
import { useSelector } from "react-redux";
import { addUser } from "./Redux/Reducer/userRegisterSlice.reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.userRegisterReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = (e) => {
    // e.preventDefault;
    let userData = [users.userRegister];
    console.log(userData);
    let deltUsser = userData.filter((d, i) => d !== users.userRegister);

    dispatch(addUser(deltUsser));
    navigate("/");
  };

  return (
    <div>
      <h1>Home</h1>
      <table style={{ width: "100%" }}>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>
        <tr>
          <td>{users.userRegister.name}</td>
          <td>{users.userRegister.email}</td>
          <td>{users.userRegister.password}</td>
        </tr>
      </table>
      <button onClick={(e) => Logout(e)} className="logout">
        Log out
      </button>
    </div>
  );
}

export default Home;
