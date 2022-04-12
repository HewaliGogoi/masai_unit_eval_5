import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Th = styled.th`
    // border: 2px solid black;
`;

const EmployeeList = () => {

    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let data = await fetch("http://localhost:3004/details");
        data = await data.json();
        // console.log(data);
        setEmpData([...data])
        // console.log(empData)
    }

  return (
    <>
        <div>
            <h1>Employee List</h1>
            <table style={{width:"90%", margin:"5%", textAlign:"left"}}>
                <thead>
                    <tr>
                        <Th>Name</Th>
                        <Th>Age</Th>
                        <Th>Gender</Th>
                        <Th>Department</Th>
                        <Th>Salary Details</Th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empData.map((e) => <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                            <td>{e.department}</td>
                            <td>{e.salary}</td>
                            <td><button>View</button></td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>) 
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default EmployeeList;