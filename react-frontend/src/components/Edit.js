import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const {id}=useParams()

    const navigate = useNavigate();

    const [userField, setUserField] = useState({
        name:"",
        email:"",
    });


    useEffect(()=>{
        fetchUser();
    },[id]);

    const clickToBackHandler=()=>{
        navigate('/');
    }

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        console.log(userField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/usersupdate/${id}`, userField, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                navigate('/');
            }
        } catch (err) {
            if (err.response && err.response.status === 422) {
                console.log("Unprocessable Entity: Check the data format and required fields.");
            } else {
                console.log("Something went wrong:", err);
            }
        }
    }



    const fetchUser=async()=>{
        try{
            const result = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
            setUserField(result.data.users);
        }catch(err){
            console.log("Something worng");
        }
    }
    return(
        <div className="container">
            <h1>Edit Form</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label">ID:</label>
                    <input type="text" className="form-control" id="id" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Full Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" value={userField.name} name="name" onChange={e => changeUserFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter Your Email" value={userField.email} name="email" onChange={e => changeUserFieldHandler(e)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" name="password" onChange={e => changeUserFieldHandler(e)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Upate</button>
            </form>
            <div className="container d-flex justify-content-center mt-5">
                <button className="btn btn-primary" onClick={clickToBackHandler}>Back To Home</button>
            </div>
        </div>
    );
};

export default Edit;