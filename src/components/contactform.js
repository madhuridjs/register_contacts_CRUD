import React, { useEffect, useState } from "react";

const Contactform = () => {
    const initialFieldValues={
        fullName: '',
        moile: '',
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
    
    return(
        <form autoComplete= 'off'>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <div className="input-group-text">
                        <i className= "fas fa-user"></i>
                    </div>
                </div>
                <input type="text" class="form-control" placeholder="Full Name"
                    name="fullname" value={values.fullName} onChange={inputChangeHandler}

                />
            </div>
            <div className= "form-row">
                <div class="form-group input-group col-md-6">
                    <div class="input-group-prepend">
                        <div className="input-group-text">
                            <i className= "fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="MobileNumber" 
                        name="fullname" value={values.mobile} onChange={inputChangeHandler}
                    />
                </div>
                <div class="form-group input-group col-md-6">
                    <div class="input-group-prepend">
                        <div className="input-group-text">
                            <i className= "fas fa-envelope"></i>
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="email" 
                        name="fullname" value={values.email} onChange={inputChangeHandler}
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