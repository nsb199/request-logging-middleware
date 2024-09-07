const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 4000;

const yourName = 'Neeraj Singh';

const requestLogger = (req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method} request to ${req.url} from IP: ${req.ip} (Logged by ${yourName})`);
    next();
};

app.use(requestLogger);
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
