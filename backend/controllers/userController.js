const User = require('../model/user');
const {z} = require('zod');
const {userSignUpDto} = require('../dto/userdto');

 const userSignUp = async (req,res)=>{
    console.log(req.body);
    try{
        const validatedData = userSignUpDto.parse(req.body);
        const newUser = new User({
            firstName: validatedData.firstName,
            lastName:  validatedData.lastName,
            password: validatedData.password
        })
        const savedUser = await newUser.save();
        res.status(200).send(savedUser);
        
    }
    catch(error){
        
        res.status(400).send(error);
    }
}


module.exports = {userSignUp};