const rl = require('readline').createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
});

rl.question('Enter your name: ',(name) => {
    rl.question('Enter you weight (in kg): ', (weight) =>{
        rl.question('ENter your height (in m): ', (height) =>{

            let bmi = weight / (height* height);

            console.log(`${name},your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
});