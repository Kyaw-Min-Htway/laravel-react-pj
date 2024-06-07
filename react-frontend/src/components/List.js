import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const List = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/users");
            // console.log(result.data.results);
            setUserData(result.data.results)
        }catch(err){
            console.log("Something Wrong");
        }
    }
    return(
        <div className='container'>
            <h3>User Details</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        Add Edit Delete
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;