import * as fs from 'fs';
import * as path from 'path';

const ceruleanDrakePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'ceruleanDrake.toml');
const crabWardenPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'crabWarden.toml');
const doomratPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'doomrat.toml');
const eliteGrenadierPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'eliteGrenadier.toml');
const eliteSecurityOfficerPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'eliteSecurityOfficer.toml');
const flametrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'flametrooper.toml');
const gorgerPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'gorger.toml');
const grashtrikePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'grashtrike.toml');
const grenadierPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'grenadier.toml');
const guardHoundPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'guardHound.toml');
const hoodlumPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'hoodlum.toml');
const lesserDrakePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'lesserDrake.toml');
const monodrivePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'monodrive.toml');
const mysteriousSpectrePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'mysteriousSpectre.toml');
const queenGrashtrikePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'queenGrashtrike.toml');
const riotTrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'riotTrooper.toml');
const rochePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'roche.toml');
const scorpionSentinelPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'scorpionSentinel.toml');
const securityOfficerPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'securityOfficer.toml');
const sentryLauncherPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sentryLauncher.toml');
const sentryRayPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sentryRay.toml');
const shockTrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'shockTrooper.toml');
const slugRayPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'slugRay.toml');
const sweeperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sweeper.toml');
const theHuntsmanPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'theHuntsman.toml');
const wereratPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'wererat.toml');
const wrathHoundPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'wrathHound.toml');

export const ceruleanDrakeData = fs.readFileSync(ceruleanDrakePath, 'utf8');
export const crabWardenData = fs.readFileSync(crabWardenPath, 'utf8');
export const doomratData = fs.readFileSync(doomratPath, 'utf8');
export const eliteGrenadierData = fs.readFileSync(eliteGrenadierPath, 'utf8');
export const eliteSecurityOfficerData = fs.readFileSync(eliteSecurityOfficerPath, 'utf8');
export const flametrooperData = fs.readFileSync(flametrooperPath, 'utf8');
export const gorgerData = fs.readFileSync(gorgerPath, 'utf8');
export const grashtrikeData = fs.readFileSync(grashtrikePath, 'utf8');
export const grenadierData = fs.readFileSync(grenadierPath, 'utf8');
export const guardHoundData = fs.readFileSync(guardHoundPath, 'utf8');
export const hoodlumData = fs.readFileSync(hoodlumPath, 'utf8');
export const lesserDrakeData = fs.readFileSync(lesserDrakePath, 'utf8');
export const monodriveData = fs.readFileSync(monodrivePath, 'utf8');
export const mysteriousSpectreData = fs.readFileSync(mysteriousSpectrePath, 'utf8');
export const queenGrashtrikeData = fs.readFileSync(queenGrashtrikePath, 'utf8');
export const riotTrooperData = fs.readFileSync(riotTrooperPath, 'utf8');
export const rocheData = fs.readFileSync(rochePath, 'utf8');
export const scorpionSentinelData = fs.readFileSync(scorpionSentinelPath, 'utf8');
export const securityOfficerData = fs.readFileSync(securityOfficerPath, 'utf8');
export const sentryLauncherData = fs.readFileSync(sentryLauncherPath, 'utf8');
export const sentryRayData = fs.readFileSync(sentryRayPath, 'utf8');
export const slugRayData = fs.readFileSync(slugRayPath, 'utf8');
export const shockTrooperData = fs.readFileSync(shockTrooperPath, 'utf8');
export const sweeperData = fs.readFileSync(sweeperPath, 'utf8');
export const theHuntsmanData = fs.readFileSync(theHuntsmanPath, 'utf8');
export const wereratData = fs.readFileSync(wereratPath, 'utf8');
export const wrathHoundData = fs.readFileSync(wrathHoundPath, 'utf8');
