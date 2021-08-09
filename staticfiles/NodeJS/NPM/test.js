const chalk = require('chalk');

const express = require('express');

const app = express();

app.set('env', 'development');
app.set('port', process.env.PORT || 3000);

const port = app.get('port');

console.log(chalk.yellow(port));
console.log(chalk.green('hello world i am kushal!'));
console.log(chalk.yellow(app.get('env')));


