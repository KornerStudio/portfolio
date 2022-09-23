import React, { useState } from "react";
import "./contact.css";

const Contact= () => {
    const [formValues, setFormValues] = useState({
        name:"", 
        email:"",
        message:""
    })

    const handleChange= (event) => {
       const {name,value} = event.target;
       const newState = {...formValues}
       newState[name] = value;
       setFormValues(newState)
    } 

    return (
        <div id="contact-section" className="section">
            <div className="container">
            <h2>Contact</h2>
                <div class="row justify-content-start">
                    <div class="col-6">
                    <form className= "row">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} value={formValues.name}/>

                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} value={formValues.email}/>

                        <label>Message</label>
                        <textarea name="message" rows="4" className="form-control" onChange={handleChange} value={formValues.message}/>
                        <input type="submit" value="Send Message" className="form-control btn btn-primary"
                        />
                    </form>
                    </div>
                </div>
            </div>
                
        </div> 
    )
}
export default Contact;