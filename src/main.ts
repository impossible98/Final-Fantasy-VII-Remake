import * as readline from 'readline';

import { Data } from './lib';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    rl.question('What do you search for? ', function(answer) {
        if (answer === 'grenadier') {
            console.log(Data.enemiesGrenadierData);
        } else if (answer === 'guard hound') {
            console.log(Data.enemiesGuardHoundData);
        } else if (answer === 'monodrive') {
            console.log(Data.enemiesMonodriveData);
        } else if (answer === 'riot trooper') {
            console.log(Data.enemiesRiotTrooperData);
        } else if (answer === 'scorpion sentinel') {
            console.log(Data.enemiesScorpionSentinelData);
        } else if (answer === 'security officer') {
            console.log(Data.enemiesSecurityOfficerData);
        } else if (answer === 'sentry ray') {
            console.log(Data.enemiesSentryRayData);
        } else if (answer === 'shock trooper') {
            console.log(Data.enemiesShockTrooperData);
        } else if (answer === 'sweeper') {
            console.log(Data.enemiesSweeperData);
        }
        rl.close();
    });
}

main();
