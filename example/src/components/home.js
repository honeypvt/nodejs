import React,{useEffect , useState} from "react";
import {Link,useHistory} from "react-router-dom"
import axios from "axios"

function Home(){
    let history = useHistory();
    const [users , setaddedData] = useState([{
       _id : "",
        usename : "",
        age : ""
    }])

    useEffect(() => {
        fetch("http://localhost:4000/").then(res => res.json()).then(jsonRes => setaddedData(jsonRes))
    },[])

    function DeleteMe(id){
        axios.delete("http://localhost:4000/delete/" + id).then(window.location.href="http://localhost:3000/");
        // console.log("Deleting User")
    }

    
    function EditMe(id){
        
        history.push({
            pathname : "/login",
            state : {UserId : id },       
        })
        
        
            
        // window.location.href="http://localhost:3000/login/" + id;

    }
    
    return (
        <div className="container">
        <button className="btn btn-secondary"><Link to="/login">Add</Link></button>
        <table className="table table-bordered">
    <thead>
    <tr>
            <th>Username</th>
            <th>Age</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>             
        {users.map(user => (
            <tr key={user._id}>
               <td>{user.username}</td>
               <td>{user.age}</td>
               <td><button onClick={() => EditMe(user._id)}>Edit</button></td>
               <td><button onClick={() => DeleteMe(user._id)}>Delete</button></td>
            </tr>
        ))}
    </tbody>
    </table>
</div>
    );
}

export default Home;