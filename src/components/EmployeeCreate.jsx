import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CreateEmployee = styled.form`
    display:flex;
    flex-direction:column;
    width:50%;
    margin:0% 5%;

    input, select{
        padding:2%;
        margin:2%;
    }
`;


const EmployeeCreate = () => {

    // const navigate = useNavigate();
    // const []

    const [details, setDetails] = useState({
        name:"",
        age:"",
        gender:"",
        contact:"",
        image:"",
        department:"",
        salary:""
    });

    const {name, age, gender, contact, image, department, salary} = details;

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        const {name, value} = e.target;
        setDetails({
            ...details,
            [name]:value
        })
        // console.log(details)
        // e.target.value = {};
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await fetch("http://localhost:3004/details",{
                method: "POST",
                body: JSON.stringify(details),
                headers: {'Content-Type': 'application/json'},
            })
            data = await data.json();
            // console.log(data);
            setDetails({...data})
            console.log(details);
            setDetails({
                name:"",
                age:"",
                gender:"",
                contact:"",
                image:"",
                department:"",
                salary:""
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
        <h1>Create an Employee</h1>
        <CreateEmployee>
            <input onChange={handleChange} name="name" value={name} type="text" placeholder="Enter name"/>
            <input onChange={handleChange} type="number" name="age" value={age} placeholder="Enter age"/>
            <select name="gender" onChange={handleChange}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
            </select>
            <input type="text" onChange={handleChange} name="contact" value={contact} placeholder="Phone Number"/>
            <input type="file"/>
            <select name="department" id="">
                <option value="engineering">Engineering</option>
                <option value="marketing">Marketing</option>
                <option value="cs">Customer Success</option>
                <option value="sales">Sales</option>
                <option value="hr">Human Resource</option>
            </select>
            <input onChange={handleChange} type="number" name="salary" value={salary} placeholder="Salary"/>
            <button style={{width:"30%", justifyContent:"left", margin:"4%", padding:"1%", backgroundColor:"skyblue", color:"black", fontSize:"20px", fontWeight:"400", cursor:"pointer"}} onClick={(e) => handleSubmit(e)}>Create</button>
        </CreateEmployee>
    </>
  )
}

export default EmployeeCreate;