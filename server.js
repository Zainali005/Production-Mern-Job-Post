const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./JOBPOSTWEB/build')))
// Connect to MongoDB
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./JOBPOSTWEB/build/index.html'));
})
mongoose.connect('mongodb://127.0.0.1:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
});
const Contact = mongoose.model('Contact', contactSchema);
// User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const User = mongoose.model('User', userSchema);

// Job schema and model
const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    location: String,
});
const Job = mongoose.model('Job', jobSchema);

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while registering' });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Received login request:', email, password);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const passwordMatch = await bcrypt.compare(password, existingUser.password);
            console.log('Password match:', passwordMatch);

            if (passwordMatch) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during login' });
    }
});


app.post('/post-job', async (req, res) => {
    try {
        const jobData = req.body;
        const newJob = new Job(jobData);
        await newJob.save();
        res.status(201).json({ message: 'Job posted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while posting the job' });
    }
});
app.delete('/delete-job/:jobId', async (req, res) => {
    const jobId = req.params.jobId;

    try {
        // Assuming you're using Mongoose for MongoDB
        const deletedJob = await Job.findByIdAndDelete(jobId);

        if (!deletedJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the job' });
    }
});

app.get('/get-jobs', async (req, res) => {
    try {
        const jobs = await Job.find(); // Fetch all jobs from the database
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching jobs' });
    }
});

app.post('/submit-contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContactSubmission = new Contact({ name, email, subject, message });
        await newContactSubmission.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while submitting the contact form' });
    }
});
// ... (other imports and setup)

app.get('/search-jobs', async (req, res) => {
    const searchQuery = req.query.query;

    try {
        const searchResults = await Job.find({
            title: { $regex: searchQuery, $options: 'i' }
        });

        res.status(200).json(searchResults);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for jobs' });
    }
});

// ... 
// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
