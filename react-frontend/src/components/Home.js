import React from "react";

import List from "./List";

const Home = () => {
    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">
                React Js Laravel REST API CRUD (Create, Read, Update and Delete) | Axios Mysql
            </h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Add Your Detail</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Full Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name"/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email"/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Your Password" name="password"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <List/>
                </div>
            </div>
        </div>
    )
};

export default Home;