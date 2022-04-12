import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegisterWrapper = styled.form`
    display:flex;
    flex-direction: column;
    width:30vw;

    input{
        padding:4%;
        margin:4%;
    }
`;

const Register = () => {

    const [details, setDetails] = useState({
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:""
    })

    const {name, email, password, username, mobile, description} = details;

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const {name, value} = e.target;
        setDetails({
            ...details,
            [name] : value
        })
        console.log(details);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method : 'POST',
            body : JSON.stringify(details),
            headers : {"Content-Type":"application/json"}
        })
        .then((data) => data.json())
        .then((data) => {console.log(data); 
            alert("Registered successfully!");
            navigate("/login");
        })
        .catch((err) => {console.log(err)})
    }



  return (
    <RegisterWrapper>
        <h2>Please register to proceed</h2>
        <input onChange={handleChange} name="name" value={name} type="text" placeholder="Enter your name"/>
        <input onChange={handleChange} type="text" name="email" value={email} placeholder="Enter your email"/>
        <input onChange={handleChange} type="password" name="password" value={password} placeholder="Create a password"/>
        <input onChange={handleChange} type="text" name="username" value={username} placeholder="Enter your username"/>
        <input onChange={handleChange} type="number" name="mobile" value={mobile} placeholder="Enter your mobile number"/>
        <input onChange={handleChange} type="text" name="description" value={description} placeholder="Write few words..."/>
        <button style={{width:"50%", justifyContent:"center", margin:"4%", padding:"4%", backgroundColor:"skyblue", color:"black", fontSize:"20px", fontWeight:"600", cursor:"pointer"}} onClick={handleSubmit}>Submit</button>
    </RegisterWrapper>
  )
}

export default Register;