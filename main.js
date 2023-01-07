import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
const usdtopkr = 227.25;
const pkrtousd = 0.0044;
const usdtoERo = 0.94;
figlet.defaults({ fontPath: "assets/fonts" });
function ready() {
    console.log(chalk.yellowBright(figlet.textSync('Currency Converter')));
}
ready();
async function convert() {
    let input = await inquirer.prompt([
        {
            type: "list",
            name: "First_Currency",
            message: "Select from which currency you want to convert",
            choices: ["USD", "PKR", "EUR"],
        },
        {
            type: "list",
            name: "secondCurrency",
            message: "Select to which currency you want to convert",
            choices: ["USD", "PKR", "EUR"],
        },
        {
            name: "amount",
            type: 'number',
            message: "how much money you want to convert"
        }
    ]);
    switch (input.First_Currency) {
        case "USD":
            if (input.secondCurrency == "PKR") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${usdtopkr * input.amount} PKR`));
            }
            else if (input.secondCurrency == "EUR") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${usdtoERo * input.amount} EUR`));
            }
            else if (input.secondCurrency == "USD") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${input.amount} USD`));
            }
            break;
        case "PKR":
            if (input.secondCurrency == "USD") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${pkrtousd * input.amount} USD`));
            }
            else if (input.secondCurrency == "EUR") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${0.0041 * input.amount} EUR`));
            }
            else if (input.secondCurrency == "PKR") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${input.amount} PKR`));
            }
            break;
        case "EUR":
            if (input.secondCurrency == "PKR") {
                console.log(chalk.yellowBright(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${242.33 * input.amount} PKR`));
            }
            else if (input.secondCurrency == "USD") {
                console.log(chalk.yellow(`Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${1.07 * input.amount} USD`));
            }
            else if (input.secondCurrency == "EUR") {
                console.log(chalk.green(` Conversion of ${input.First_Currency} to ${input.secondCurrency} = ${input.amount} EUR`));
            }
        default:
            break;
    }
}
let repeat = async () => {
    do {
        await convert();
        var again = await inquirer.prompt([{
                type: 'list',
                name: "Again",
                message: "Do you want to continue",
                choices: ["Yes", "No"],
            }]);
    } while (again.Again == "Yes");
    {
    }
    if (again.Again == "No") { // this step is optional
        const sleep = () => {
            return new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
        };
        async function welcome() {
            var by = chalkAnimation.rainbow("Thanks for using");
            await sleep();
            by.stop();
        }
        welcome();
    }
};
repeat();
