import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authStatus } from '../redux/action';

const NavbarWrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    background-color:black;
    color:skyblue;
`;
const Navbar = () => {

  const dispatch = useDispatch();
  const status = useSelector((state) => state.isAuth)
  console.log(status, "status")
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
        <h1 onClick={() => navigate("/")}>Account</h1>
        <h1 onClick={() => navigate("/register")}>Register</h1>
        {status? <h1 onClick={() => {dispatch(authStatus(false)); navigate("/login")}}>Log Out</h1> : <h1 onClick={() => navigate("/login")}>Log In</h1>}
        {status? <h1 onClick={() => navigate("/employees")}>Employee List</h1> : null}
        {status? <h1 onClick={() => navigate("/employees/create")}>Create Employee</h1> : null}
        
    </NavbarWrapper>
  )
}

export default Navbar;