import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../assets/Styles/SignUp/signup.module.css";
import Navb from '../Navbar/navbar'
function Signup() {
  const inputfield=useRef();
  useEffect(()=>{
    inputfield.current.focus()
  })
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [repass,setrepass]=useState('')

    async function submit(e){
    console.log(name,email,password,repass)
    e.preventDefault()

    const data={
      name:name,
      email:email,
      password:password,
      repass:repass
    }

    await fetch("http://localhost:8000/admin/signup",{
      body:JSON.stringify(data),
      method:"post",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((data) =>{
      console.log(data)
      if(data==="done")
    {
      console.log("object")
    }
    });

  }

  return (
    <div>
      <Navb/>
      <Container>
        <div className={styles.signup}>
          <div className={styles.card}>
            <h6>Welcome</h6>
            <label>Name</label>
            <br />
            <input ref={inputfield} type="text" onChange={(e)=>setname(e.target.value)} />
            <br />
            <label>Email</label>
            <br />
            <input type="text"onChange={(e)=>setemail(e.target.value)}  />
            <br />
            <label>Password</label>
            <br />
            <input type="password"onChange={(e)=>setpassword(e.target.value)} />
            <br />
            <label>Conform Password</label>
            <br />
            <input type="password" onChange={(e)=>setrepass(e.target.value)} />
            <br />
            <div className={styles.button}>
              <button onClick={submit}>Sign Up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
