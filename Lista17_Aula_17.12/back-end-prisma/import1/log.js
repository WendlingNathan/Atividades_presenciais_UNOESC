import chalk from "chalk";

export default function ola(nome) {
    console.log(`Olá ${chalk.yellow.bold(nome)}!`);
}