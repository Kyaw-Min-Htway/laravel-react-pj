import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const View = () => {

    const {id}=useParams();
    useEffect(() => {
        fetchUser();
    },[id]);

    const fetchUser =async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/users"+id);
            console.log(result.data.users);
        }catch(err){
            console.log("Something Worng");
        }
    }

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>User Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center">
            <div><button className="btn btn-primary">Back To Home</button></div>
        </div>
    </div>
};

export default View;