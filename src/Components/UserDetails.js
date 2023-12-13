import React from "react";
import './UserDetails.css';

function UserDetails(props){
    
    return <div className="user-details"> 
        <table className="users-table">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Country</th>
            <th>City</th>
            <th>Update</th>
          </tr>
          {props.user.map((user,index)=>{
           return (
           <tr key={index}>
           <td>{user.FirstName +" " +user.LastName}</td>
           <td>{user.Email}</td>
           <td>{user.Date}</td>
           <td>{user.Gender}</td>
           <td>{user.Country}</td>
           <td>{user.City}</td>
           <td>
               <button className="btn btn-primary">Edit</button>
               <button className="btn btn-danger">Delete </button>
           </td>
         </tr>)
          })}
          
        </table>
    </div>
}

export default UserDetails;