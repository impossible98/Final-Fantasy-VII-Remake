import * as readline from 'readline';

import { Data } from '../lib';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function main() {
    rl.question('What do you search for? ', function(answer) {
        if (answer === 'cerulean drake') {
            console.log(Data.enemiesCeruleanDrakeData);
        } else if (answer === 'doomrat') {
            console.log(Data.enemiesDoomratData);
        } else if (answer === 'elite security officer') {
            console.log(Data.enemiesEliteSecurityOfficerData);
        } else if (answer === 'elite grenadier') {
            console.log(Data.enemiesEliteGrenadierData);
        } else if (answer === 'gorger') {
            console.log(Data.enemiesGorgerrData);
        } else if (answer === 'grenadier') {
            console.log(Data.enemiesGrenadierData);
        } else if (answer === 'guard hound') {
            console.log(Data.enemiesGuardHoundData);
        } else if (answer === 'hoodlum') {
            console.log(Data.enemiesHoodlumData);
        } else if (answer === 'lesser drake') {
            console.log(Data.enemiesLesserDrakeData);
        } else if (answer === 'monodrive') {
            console.log(Data.enemiesMonodriveData);
        } else if (answer === 'mysterious spectre') {
            console.log(Data.enemiesMysteriousSpectreData);
        } else if (answer === 'riot trooper') {
            console.log(Data.enemiesRiotTrooperData);
        } else if (answer === 'roche') {
            console.log(Data.enemiesRocheData);
        } else if (answer === 'scorpion sentinel') {
            console.log(Data.enemiesScorpionSentinelData);
        } else if (answer === 'security officer') {
            console.log(Data.enemiesSecurityOfficerData);
        } else if (answer === 'sentry ray') {
            console.log(Data.enemiesSentryRayData);
        } else if (answer === 'shock trooper') {
            console.log(Data.enemiesShockTrooperData);
        } else if (answer === 'slug-ray') {
            console.log(Data.enemiesSlugRayData);
        } else if (answer === 'sweeper') {
            console.log(Data.enemiesSweeperData);
        } else if (answer === 'the huntsman') {
            console.log(Data.enemiesTheHuntsmanData);
        } else if (answer === 'wererat') {
            console.log(Data.enemiesWereratData);
        } else if (answer === 'wrath hound') {
            console.log(Data.enemiesWrathHoundData);
        }
        rl.close();
    });
}
