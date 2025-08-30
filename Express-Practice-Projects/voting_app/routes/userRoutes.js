const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

/* POST route to add a person
check for admin first and then check if there is already an admin user
Validate Aadhar Card Number must have exactly 12 digit
check if a user with the same Aadhar Card Number already exists
Create a new User document using the Mongoose model
then save the new user to the database
*/
router.post('/signup', async (req, res) =>{
    try{
        console.log(req)
        const data = req.body
        const adminUser = await User.findOne({ role: 'admin' });
        if (data.role === 'admin' && adminUser) {
            return res.status(400).json({ error: 'Admin user already exists' });
        }
        
        if (data.aadharCardNumber.length !== 12) {
            return res.status(400).json({ error: 'Aadhar Card Number must be exactly 12 digits' });
        }

        const existingUser = await User.findOne({ aadharCardNumber: data.aadharCardNumber });
        if (existingUser) {
            return res.status(400).json({ error: 'User with the same Aadhar Card Number already exists' });
        }
        
        const newUser = new User(data);
        const response = await newUser.save();
        console.log('data saved');
        const payload = {
            id: response.id
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);

        res.status(200).json({response: response, token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


/* Extract aadharCardNumber and password from request body
Checking if aadharCardNumber or password is missing
Finding the user by aadharCardNumber
if user does not exist or password does not match, return error else
we will generate token and return token as response
*/
router.post('/login', async(req, res) => {
    try{
        const {aadharCardNumber, password} = req.body;

        if (!aadharCardNumber || !password) {
            return res.status(400).json({ error: 'Aadhar Card Number and password are required' });
        }

        const user = await User.findOne({aadharCardNumber: aadharCardNumber});

        if( !user || !(await user.comparePassword(password))){
            return res.status(401).json({error: 'Invalid Aadhar Card Number or Password'});
        }

        const payload = {
            id: user.id,
        }
        const token = generateToken(payload);

        res.json({token})
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Profile route
we extracted the user dta from request body
and will find the user by its id
abd return the user 
*/
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try{
        const userData = req.user;
        const userId = userData.id;
        const user = await User.findById(userId);
        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

/* We Extracted the id from the token
 then we will extract current and new passwords from request body
 Check if currentPassword and newPassword are present in the request body
 then Find the user by userID
 If user does not exist or password does not match, return error
 else Update the user's password
 */

router.put('/profile/password', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.id; 
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: 'Both currentPassword and newPassword are required' });
        }
        
        const user = await User.findById(userId);
        
        if (!user || !(await user.comparePassword(currentPassword))) {
            return res.status(401).json({ error: 'Invalid current password' });
        }
        
        user.password = newPassword;
        await user.save();

        console.log('password updated');
        res.status(200).json({ message: 'Password updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;