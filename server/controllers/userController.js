import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readUsersFromFile, writeUsersToFile } from '../utils/fs.js';

class UserController {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;

            const users = await readUsersFromFile();
            const existingUser = users.find(user => user.email === email);
            if (existingUser) {
                return res.status(400).send('User already exists');
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { username, email, password: hashedPassword };

            users.push(newUser);
            await writeUsersToFile(users);
            res.status(201).send('User registered');
        } catch (error) {
            console.log(error, "errorerror");

            res.status(500).send('Server error');
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const users = await readUsersFromFile();
            const user = users.find(user => user.email === email);
            if (!user) return res.status(400).send('Invalid email or password');

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).send('Invalid email or password');

            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
};

const userController = new UserController();

export default userController;