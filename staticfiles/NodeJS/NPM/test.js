const chalk = require('chalk');

const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port');
console.log(chalk.yellow(port));