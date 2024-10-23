
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../Models/user.js'



export const register = async (req, res) => {
    try {
        
        const { firstname, lastname , email, password } = req.body;

        const existingUser = await User.findOne({ email }); 
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();

        return res.status(201).json({
            message:
                'User registered successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error:
                'Internal server error'
        });
    }
}



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error:
                    'Invalid credentials'
            });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password,
            user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error:
                    'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id },
            'your_secret_key', {
            expiresIn: '1h',
        });

        return  res.status(200).json({ token,message:'user login sucess'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error:
                'Internal server error'
        });
    }
}



export const logout = (req, res) => {
 
    res.clearCookie('token').send('Logged out successfully');
}