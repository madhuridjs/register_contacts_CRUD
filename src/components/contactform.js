import React, { useEffect, useState } from "react";

const Contactform = (props) => {
    const initialFieldValues={
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    const [values, setValues] = useState(initialFieldValues);

    const inputChangeHandler = (event) => {
        var { name, value } = event.target
        setValues({
           ...values,
           [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        props.addOrEdit(values);
    }
    
    return(
        <form autoComplete= 'off' onSubmit= {handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className= "fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name"
                    name="fullName" value={values.fullName} onChange={inputChangeHandler}
                />
            </div>
            <div className= "form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className= "fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="MobileNumber" 
                        name="mobile" value={values.mobile} onChange={inputChangeHandler}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className= "fas fa-envelope"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="email" 
                        name="email" value={values.email} onChange={inputChangeHandler}
                    />
                </div>
            </div>
            <div className= "form-group">
                <textarea className= "form-control" placeholder="address" name="address"
                    value={values.address} onChange= {inputChangeHandler} />
            </div>
            <div className= "form-group">
                <input type= "submit" value= "Save" className= "btn btn-primary btn-block" />
            </div>
        </form>
    );
}
export default Contactform;