import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { userDetail, authStatus, getToken } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width:30%;
    margin: auto;

    input, button{
        padding:2%;
        margin:2%;
    }
`;

const Login = () => {
    
    const [data, setData] = useState({
        username:"",
        password:""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {username, password} = data;

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
        // console.log(data)
    }

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(data)
        try {
            fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
                method : "POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            })
            .then((d) => d.json())
            .then((d) => {
                let localData = {
                    userStatus: !d.error,
                    token: d.token,
                    details : data
                }
                localStorage.setItem("loginDetails", JSON.stringify(localData));
            }) 
            navigate(`/`);     
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
        <h1>Enter your Log In Details</h1>
        <LoginWrapper>
            <input type="text" onChange={handleChange} name="username" value={username} placeholder="Enter your username" />
            <input type="password" onChange={handleChange} name="password" value={password} placeholder="Enter the password"/>
            <button style ={{width:"50%", margin:"auto", marginTop:"5%"}} onClick={handleClick}>Log In</button>
        </LoginWrapper>
    </>
  )
}

export default Login;