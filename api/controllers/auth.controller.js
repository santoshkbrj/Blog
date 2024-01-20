import User from "../models/user.model.js";
import byscrptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return res.status(400).json({ message: "All field are required" })
    }

    const hashPassword = byscrptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashPassword
    });

    try {
        await newUser.save();
        res.json({ message: "signup sucessfully" });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}