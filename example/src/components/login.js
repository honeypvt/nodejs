import React , {useState,useEffect} from "react";
// import Inputs from "./input";
import axios from "axios";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";


function Login(){

  let location  =  useLocation();
 console.log("location: "+JSON.stringify(location))

  let urlElements = window.location.href.split('/')
  var url_id = urlElements[4];

  // let url_id = location.state.UserId;
  console.log(url_id);

       

const [userDetails , setUserDetails] = useState({
  username : "",
  age : ""
})

      function InputChanged(event)
      {
        const {name,value} = event.target
           setUserDetails({
               ...userDetails,
               [name] : value
           })
      }

     async function AddMe(){
       console.log("hi");
       await axios.post("http://localhost:4000/login/",userDetails).then(window.location.href="http://localhost:3000/");
      }

      useEffect(() => { 
        fetch("http://localhost:4000/edit/"+url_id)
         .then(res => res.json())
         .then(data => setUserDetails(data))
    },[url_id]);

    

      async function UpdateMe(){
        console.log('Click on Update');
        let response = await axios.post("http://localhost:4000/update/"+url_id, userDetails)
        .then(res => res.json());
        
        console.log("response: "+response)
       }

    return (
        <form method="post">
        
          <div className="row" style={{marginTop: "15%"}}>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <input type = "text" placeholder = "Enter Username" onChange={InputChanged} className="form-control" value = {userDetails.username} name="username" />
              <input type = "text" onChange={InputChanged} placeholder = "Enter Age" className="form-control" value = {userDetails.age} name="age"  />
              
            { url_id ? 
              <input type="submit" onClick={UpdateMe} className="btn btn-primary" value="Update" />
              
        :
            <input type="submit" onClick={AddMe} className="btn btn-primary" value="Add" />
              
        }
        </div>
          </div>
      </form>
    );
}

export default Login;
