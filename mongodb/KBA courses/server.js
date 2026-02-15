import express from 'express';
import adminRoutes from './routes/kba_admin_routes.js';
import userRoutes from './routes/kba_user_routes.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { user_model } from './models/user.js';
import mongoose from 'mongoose';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from './swagger.js';

dotenv.config();

const app = express();
const port = 8000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect(process.env.MONGOOSE_URL).then(()=>{console.log('mongoose connected');
}).catch((err)=>{console.log(err);
})

app.use(cookieParser());
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Homepage');
});

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Signup successful
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
app.post('/signup', async (req, res) => {
  try {
    const { email, name, password, role } = req.body;

    if (!email || !name || !password || !role) {
      return res.status(400).send('All fields are required');
    }
    const existingUser = await user_model.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await user_model.create({
      name,
      email,
      password: hashedPassword,
      role
    });
    res.status(201).json({ message: 'Signup successful' });

  } catch (error) {
    console.error(error);
    res.status(500).send('Signup failed');
  }
});


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send('All fields are required');
    }

    const usr = await user_model.findOne({ email });
    if (!usr) {
      return res.status(401).send('Invalid user');
    }

    const isMatch = await bcrypt.compare(password, usr.password);
    if (!isMatch) {
      return res.status(401).send('Incorrect password');
    }

    const token = jwt.sign(
      { id: usr._id, email: usr.email, role: usr.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    res
      .status(200)
      .cookie('kba_token', token, {
        httpOnly: true,
        secure: false, // true in production
        maxAge: 60 * 60 * 1000
      })
      .json({ message: 'Login successful' });

  } catch (error) {
    console.error(error);
    res.status(500).send('Login failed');
  }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
