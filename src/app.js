
const {User}=require("./database/models/index");
require("dotenv").config();
let path=require("path");
path=path.join(__dirname);
console.log(path);
const raw={
    raw:true
};
const sequelizeConfig=require("./database/config/config.js");
console.log(sequelizeConfig);
const userRepository={
    findAllUsers: function() {
        try{
            return User.findAll(raw);
        } catch(e){
            console.log(e);
        }
            
    },
    createUser: function(newUser) {
        try{
            return User.create(newUser);
        } catch(e){
            console.log(e);
        }
        
    },
};
const express=require("express");
const app=express();
const route=express.Router();
const session=require("express-session");
app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave:true
}));


route.get("/",(req,res)=>res.send('Hola'));
route.get("/users",async (req,res)=>{
    try{
        console.log(req.session.mensaje);
        const users=await userRepository.findAllUsers();
        res.json(users)
    } catch(e){
        console.log(e);
    }
    
});
route.post("/users",async (req,res)=>{
    try{
        const newUser=req.body;
        const user=await userRepository.createUser(newUser);
        req.session.mensaje='puedes caracterizar a esta sesióm'
        res.json(user);
    } catch(e){
        console.log(e);
    }
    
});
app.use(express.json());
app.use('/',route);



console.log('qué bien que la estoy pasando');

app.listen(3000,console.log('servidor corriendo en el puerto 3000'))

