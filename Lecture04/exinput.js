const rl = require('readline').createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
});

rl.question('Enter your name: ',(name) => {
    rl.question('Enter you weight (in kg): ', (weight) =>{
        rl.question('ENter your height (in m): ', (height) =>{

            let bmi = weight / (height* height);

            console.log()
        })
    })
})