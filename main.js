import inquirer from "inquirer";
const question = [
    { type: 'numbar', name: 'weight', message: 'weight(kg):' },
    { type: 'numbar', name: 'height', message: 'height(m):' },
];
const calculateBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(question);
    console.log(`BMI: ${calculateBMI(weight, height).toFixed(2)}`);
};
main();
