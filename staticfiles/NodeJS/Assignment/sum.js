const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var total = 0;
function getNumber(){
    readline.question(`Enter the number or stop : `, number => {
        if(number === 'stop') {
            console.log(`The total sum is : ${total}`);
            readline.close();
        } else {
            total += parseInt(number);
            getNumber();
        }
    });
}
getNumber();
