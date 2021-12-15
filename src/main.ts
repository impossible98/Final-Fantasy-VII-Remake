import * as readline from 'readline';

import { Data } from './lib';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    rl.question('What do you search for? ', function(answer) {
        if (answer === 'guard hound') {
            console.log(Data.enemiesGuardHoundData);
        } else if (answer === 'security officer') {
            console.log(Data.enemiesSecurityOfficer);
        }
        rl.close();
    });
}

main();
