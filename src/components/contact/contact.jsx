import{useState} from "react";

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
        <div className="container"
        style={{marginTop:"150px",
        marginBottom:"150px",
        }}>
            <h2 style={{marginTop: "25px"}}>Contact</h2>
                <div class="row justify-content-start">
                    <div class="col-6">
                    <form className= "row" style={{margin: "25px 85px 75px 100px"}}>
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} value={formValues.name}/>

                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} value={formValues.email}/>

                        <label>Message</label>
                        <textarea name="message" rows="4" className="form-control" onChange={handleChange} value={formValues.message}/>
                        <input type="submit" value="send" className="form-control btn btn-primary"
                        style={{marginTop:"30px"}}
                        />
                    </form>
                    </div>
                </div>
                
        </div> 
    )
}
export default Contact;