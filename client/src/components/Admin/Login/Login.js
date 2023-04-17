import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import styles from "../../../assets/Styles/Login/login.module.css";
import Navb from "../../Navbar/navbar";
function Login() {
  const navigate=useNavigate()
  const ref1=useRef();
  useEffect(()=>{
    ref1.current.focus();
  },[])
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

    async function submit(e){
    console.log(email,password)
    e.preventDefault()

    const data={
      email:email,
      password:password,
    }

    await fetch("http://localhost:8000/admin/login",{
      body:JSON.stringify(data),
      method:"post",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((data) =>{
      console.log(data)
      if(data==="correct Admin")
      {
        navigate('/dashboard')
      }
      else{
        alert("wrong admin")
      }
    });

  }
  return (
    <div>
      <Navb/>
      <Container>
        <div className={styles.login}>
          <div className={styles.card}>
            <h6>Welcome !!</h6>
            <label>Email</label>
            <br />
            <input ref={ref1} type="text" onChange={(e)=>setemail(e.target.value)} />
            <br />
            <label>Password</label>
            <br />
            <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
            <br />
            <div className={styles.link}>
              <NavLink>Forget Password?</NavLink>
              <br />
              <span>
                <NavLink to="/admin/signup">New User?Sign up</NavLink>
                <br />
              </span>
            </div>
            <div className={styles.button}>
              <button onClick={submit}>Login</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
