
const {z} = require('zod');

const userSignUpDto = z.object({
    firstName: z.string(),
    lastName:z.string(),
    password: z.string().min(6)

});




module.exports = {userSignUpDto};