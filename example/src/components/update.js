import React,{useEffect ,useState} from "react";
// import Inputs from "./input";
import axios from "axios";


function Update(){

  let urlElements = window.location.href.split('/')
  var id = urlElements[4];
  console.log(id);

  let get = axios.get("http://localhost:4000/update/" + id);
  
    const [users , setUserDetails] = useState({
      _id :"",
        username : "",
        age : ""
      })
      
      useEffect(() => { 
        fetch("http://localhost:4000/update/" + id)
        .then(res => res.json())
        .then(data => setUserDetails(data))
      },[]);

      console.log(users);

      function handleChange(event)
       {
           const {name,value} = event.target
           setUserDetails({
               ...users,
               [name] : value
           })
       }

      async function AddData(){
        await axios.post("http://localhost:4000/update/"+id,users).then(window.location.href="http://localhost:3000/");
       }

    return (
      
        <form method="post" action="/">
    <div className="row" style={{marginTop: "15%"}}>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <input type = "text" placeholder = "Enter Username" name="username"
          value = {users.username}
          onChange = {handleChange}
          className="form-control"
           />
           <input type = "text" placeholder = "Enter age" name="age"
          value = {users.age}
          onChange = {handleChange}
          className="form-control"
           />
           <input onClick={AddData} className="btn btn-primary" type="submit" value="Update" />
        </div>
      </div>
     
      </form>
      
    );
}

export default Update;