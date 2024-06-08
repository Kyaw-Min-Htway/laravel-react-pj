import React, { useState } from "react";
import List from "./List";
import axios from "axios";

const Home = () => {
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: ""
    });

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
    };

    const [loading,setLoading]=useState()

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/addnew`, userField, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                console.log("User added successfully");
                setLoading(true);
            } else {
                console.log(`Unexpected response status: ${response.status}`);
            }
        } catch (err) {
            if (err.response) {
                console.log(`Error: ${err.response.status} - ${err.response.data.message || err.response.data}`);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    if(loading){
        return <Home/>
    }

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">
                React Js Laravel REST API CRUD (Create, Read, Update and Delete) | Axios Mysql
            </h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Add Your Detail</h3>
                    <form onSubmit={onSubmitChange}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Your Full Name"
                                name="name"
                                value={userField.name}
                                onChange={changeUserFieldHandler}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                                name="email"
                                value={userField.email}
                                onChange={changeUserFieldHandler}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={userField.password}
                                onChange={changeUserFieldHandler}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Home;
