import express from "express";
import cors from "cors";
import mongoose from "mongoose"
// import bodyParser from "body-parser";

const app = express();
app.use(express.json());
// app.use(express.urlencoded())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/coordinatecare", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection success !!....")
}).catch(console.error());


const SetSchema = {
    username: String,
    age: Number
}

var User = mongoose.model("User", SetSchema);

app.get("/", function (req, res) {
    const getUserData = User.find()
        .then(foundData => res.json(foundData))
    return getUserData
});

app.post("/login", (req, res) => {
    const user = new User(req.body);
    user.save().then(
        console.log(user.username),
        res.send("name" + user.username)
    )

});

app.get("/edit/:id", function (req, res) {
    const userId = req.params.id;
    console.log(userId)
    const getUpdatedata = User.findOne({ _id: userId },function(err,result)
    {
        if(result)
        {
            res.send(result) ;
            // console.log(result)

        }else{
           
           console.log(err);
        }    
    });
})

app.delete("/delete/:id", function (req, res) {
    const userId = req.params.id;
    User.findByIdAndRemove(userId, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("deleted Id " + userId)
        }
    });

});

app.post("/update/:id", function (req, res) {
    const getUser = req.params.id;
    const user_details = req.body;
    User.findByIdAndUpdate(getUser, user_details,(err, resp) =>{
        if (!err) {
            console.log("Updated Successfully");
            console.log(resp);
            res.send(resp);            
        }
        else {
            console.log("Updated failed ");
        }
    });
    // res.redirect("/")

});

app.listen(4000, function () {
    console.log("server started");
})