import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Edit = () => {
    const {id}=useParams()
    
    const[user, setUser]=useState([]);

    const navigate = useNavigate();


    useEffect(()=>{
        fetchUser();
    },[id]);


    const fetchUser=async()=>{
        try{
            const result = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
            setUser(result.data.users);
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
                    <input type="text" className="form-control" id="id" name="id" disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Full Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter Your Email" name="name" />
                </div>
                <button type="submit" className="btn btn-primary">Upate</button>
            </form>
            <div className="container d-flex justify-content-center mt-5">
                <button className="btn btn-primary">Back To Home</button>
            </div>
        </div>
    );
};

export default Edit;