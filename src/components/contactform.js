import React, { useEffect, useState } from "react";

const Contactform = () => {
    const initialFieldValues={
        fullName: '',
        moile: '',
        email: '',
        address: ''
    }
    const [values, setValues] = useState(initialFieldValues);
    
    return(
        <form autoComplete= 'off'>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <div className="input-group-text">
                        <i className= "fas fa-user"></i>
                    </div>
                </div>
                <input type="text" class="form-control" placeholder="Full Name"
                    name="fullname" value={values.fullName}

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
                        name="fullname" value={values.mobile}
                    />
                </div>
                <div class="form-group input-group col-md-6">
                    <div class="input-group-prepend">
                        <div className="input-group-text">
                            <i className= "fas fa-envelope"></i>
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder="email" 
                        name="fullname" value={values.email}
                    />
                </div>
            </div>
        </form>
    );
}
export default Contactform;