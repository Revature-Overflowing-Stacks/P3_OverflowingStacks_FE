import * as React from "react";
import Button from "@mui/material/Button";
import { useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function UserRegistration() {
  const navigate = useNavigate();

  const [user,setUser] = useContext(userContext)

  const url = "https://overflowingstacks.azurewebsites.net";

  const emailInput = useRef();
  const fnameInput = useRef();
  const lnameInput = useRef();
  const phonenumberInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const dobInput = useRef();

  async function register() {
    const userprofile = {
      email: emailInput.current.value,
      fname: fnameInput.current.value,
      lname: lnameInput.current.value,
      phonenumber: phonenumberInput.current.value,
      username: usernameInput.current.value,
      password: passwordInput.current.value,
      dob: dobInput.current.value
    };

<<<<<<< HEAD
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailInput.current.value === "" || passwordInput.current.value === "") {
      alert("You need to enter valid email and password");
    } else if (emailInput.current.value.match(mailformat));
    else {
      try {
        const response = await axios.post(`${url}/users/register`, userprofile);
        console.log(response.data);
        navigate("/userprofile");
      } catch (error) {
        console.error(error.response.data);
        console.log(error);
        alert(error.response.data);
      }
=======
    try {
      const response = await axios.post(`https://overflowingstacks.azurewebsites.net/users/register`, userprofile);
      console.log(response.data);
      setUser({...user, email: CustomerEmailInput.current.value})
      navigate("/registerqrcode");
    } catch (error) {
      console.error(error.response.data);
      console.log(error);
>>>>>>> 9b5cc5f6b088ddcdc27c4fa101d8a9f47bcb8c98
    }
  }

  return (
    <div className="container">
      <h4>Join OverflowingStacks!!!</h4>

      <input
        size="30"
        placeholder="Please enter your email"
        ref={emailInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter first name"
        ref={fnameInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter last name"
        ref={lnameInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter phone number"
        ref={phonenumberInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter username"
        ref={usernameInput}
      ></input>
      <br></br>

      <input
        size="30"
        type="password"
        placeholder="Please enter your password"
        ref={passwordInput}
      ></input>
      <br></br>

      <input
        size="30"
        type="date"
        placeholder="Please enter your dob"
        ref={dobInput}
      ></input>
      <br></br>

      <Button variant="contained" color="primary" onClick={register}>
        Sign Up
      </Button>
    </div>
  );
}
