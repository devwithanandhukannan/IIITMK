import express from 'express';
import adminRoutes from './admin_routes.js';
import userRoutes from './user_routes.js';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Homepage');
});

app.get('/contacts', (req, res) => {
    res.status(200).send('Contacts');
});

// Auth routes
app.post('/signup', (req, res) => {
    try {
        const { email, name, password, mode } = req.body;
        console.log(email, name, password, mode);
        res.status(200).send('Saved!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Signup failed');
    }
});

app.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('All fields are required');
        }

        res.status(200).send('Logged in!');
    } catch (error) {
        console.error(error);
        res.status(401).send('Login failed');
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
