import * as fs from 'fs';
import * as path from 'path';

const gorgerPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'gorger.toml');
const grenadierPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'grenadier.toml');
const guardHoundPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'guardHound.toml');
const monodrivePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'monodrive.toml');
const riotTrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'riotTrooper.toml');
const scorpionSentinelPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'scorpionSentinel.toml');
const securityOfficerPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'securityOfficer.toml');
const sentryRayPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sentryRay.toml');
const shockTrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'shockTrooper.toml');
const sweeperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sweeper.toml');
const theHuntsmanPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'theHuntsman.toml');
const wereratPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'wererat.toml');

export const gorgerrData = fs.readFileSync(gorgerPath, 'utf8');
export const grenadierData = fs.readFileSync(grenadierPath, 'utf8');
export const guardHoundData = fs.readFileSync(guardHoundPath, 'utf8');
export const monodriveData = fs.readFileSync(monodrivePath, 'utf8');
export const riotTrooperData = fs.readFileSync(riotTrooperPath, 'utf8');
export const scorpionSentinelData = fs.readFileSync(scorpionSentinelPath, 'utf8');
export const securityOfficerData = fs.readFileSync(securityOfficerPath, 'utf8');
export const sentryRayData = fs.readFileSync(sentryRayPath, 'utf8');
export const shockTrooperData = fs.readFileSync(shockTrooperPath, 'utf8');
export const sweeperData = fs.readFileSync(sweeperPath, 'utf8');
export const theHuntsmanData = fs.readFileSync(theHuntsmanPath, 'utf8');
export const wereratData = fs.readFileSync(wereratPath, 'utf8');