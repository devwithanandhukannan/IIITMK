import express from 'express';
import dotenv from 'dotenv';
import { Certi } from './db_schema.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URL).then(()=>{console.log('db connected!');
}).catch((err)=>{console.log(err);
})


app.get('/view_certi', async (req, res) => {
    try {
        const certi_id = Number(req.query.id);

        const data = await Certi.findOne({ certificate_id: certi_id });

        if (!data) {
            return res.status(404).json({ msg: 'Invalid ID' });
        }

        res.status(200).json({
            data,
            msg: `This is to certify that ${data.candidate} has successfully completed Blockchain Foundation with ${data.grade} on ${data.date}`
        });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
});


app.post('/new_certi', async (req, res) => {
    try {
        const {
            certified_blockchain_associate,
            certificate_id,
            candidate,
            grade,
            date
        } = req.body;

        const existingCert = await Certi.findOne({ certificate_id });

        if (existingCert) {
            return res.status(400).json({ msg: 'Certificate ID already exists!' });
        }

        await Certi.create({
            certified_blockchain_associate,
            certificate_id,
            candidate,
            grade,
            date
        });

        res.status(201).json({ msg: 'Certificate added successfully!' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
