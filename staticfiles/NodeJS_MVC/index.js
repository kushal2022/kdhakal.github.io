const express = require('express');
const chalk = require("chalk");

const app = express();

const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log(chalk.yellow('Server running on port 3000'));
})