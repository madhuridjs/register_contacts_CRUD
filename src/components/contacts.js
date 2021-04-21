import React, { useEffect, useState } from 'react';
import Contactform from './contactform';
import firebaseDB from "../firebase";

const Contacts = () => {

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
                    display contacts
                </div>
            </div>
        </>
    )
}
export default Contacts;