const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require("./config/database");

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  process.env.CLIENT_URL
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
      // Allow requests without an Origin (e.g. Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL Connected");
    return sequelize.sync();
  })
  .then(() => console.log("Database Synced"))
  .catch((err) => console.error(err));
// Routes
app.use('/api/contact', require('./routes/contact'));
// app.use('/api/services', require('./routes/services'));
// app.use('/api/blog', require('./routes/blog'));
// app.use('/api/case-studies', require('./routes/caseStudies'));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});