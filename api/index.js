const express = require('express');
const auth = require('./middleware/auth')
require('./config/database').connect();

const dotenv = require('dotenv');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes middleware
app.use("/",authRoutes);
app.use("/blogs",auth, blogRoutes);

// Server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening at localhost:${process.env.PORT || 5000}`);
})