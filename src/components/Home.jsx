import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, userDetail, authStatus } from '../redux/action';

const Home = () => {

    const [uidata, setUidata] = useState({});
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();
    
    let data = JSON.parse(localStorage.getItem("loginDetails"));
    // console.log(data);
    
    if(status==false){
        dispatch(userDetail(data.details))
        dispatch(getToken(data.token))
        dispatch(authStatus(data.userStatus))
    }
    
    let userStore = useSelector((state) => state);
    // console.log(userStore)
    
    const getData = async () => {
        let fetchData = await fetch(`https://masai-api-mocker.herokuapp.com/user/${userStore.user.username}`,{
            headers: {"Authorization" : `Bearer ${userStore.isToken}`}
        })
        fetchData = await fetchData.json();
        console.log(fetchData)
        setUidata({...fetchData})
        console.log(uidata)
        }
        
        useEffect(() => {
            getData();
            setStatus(true);
        },[])


  return (
    <>
        <h1>Account Details</h1>
        <div>
            <h3>Username : {uidata.name}</h3>
            <h3>Email : {uidata.email}</h3>
            <h3>Username : {uidata.username}</h3>
            <h3>Mobile : {uidata.mobile}</h3>
            <h3>Description : {uidata.description}</h3>
        </div>
    </>
  )
}

export default Home;