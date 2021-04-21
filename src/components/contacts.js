import React, { useEffect, useState } from 'react';
import Contactform from './contactform';
import firebaseDB from "../firebase";

const Contacts = () => {
    const [contactObjects, setContactObjects] = useState({});

    useEffect(() => {
        firebaseDB.child("contacts").on("value", snapshot => {
            if(snapshot.val() !== null ){
                setContactObjects({
                    ...snapshot.val()
                })
            }
        })
    })
    const addOrEdit = obj => {
        firebaseDB.child("contacts").push(
            obj,
            err => {
                if(err){
                    console.log("error");
                }
            }
        )
    }
    
    return(
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Register Contacts</h1>
                </div>
            </div>
            <div className= "row">
                <div className= "col-md-5">
                    <Contactform addOrEdit= {addOrEdit}/>
                </div>
                <div className= "col-md-7">
                   <table className= "table table-borderless table-stripped">
                       <thead className= "thead-light">
                           <tr>
                               <th>Full Name</th>
                               <th>Mobile</th>
                               <th>Email</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               Object.keys(contactObjects).map((id) => {
                                   return(
                                       <tr>
                                           <td>{contactObjects[id].fullName}</td>
                                           <td>{contactObjects[id].mobile}</td>
                                           <td>{contactObjects[id].email}</td>
                                           <td>
                                               <a className= "btn text-primary">
                                                    <i className= "fas fa-pencil-alt"></i>
                                               </a>
                                               <a className= "btn text-danger">
                                                    <i className= "fas fa-trash-alt"></i>
                                               </a>
                                           </td>
                                       </tr>
                                   )
                               })
                           }
                       </tbody>
                   </table>
                </div>
            </div>
        </>
    )
}
export default Contacts;