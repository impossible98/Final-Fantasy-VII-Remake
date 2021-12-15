import * as fs from 'fs';
import * as path from 'path';

const grenadierPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'grenadier.toml');
export const grenadierData = fs.readFileSync(grenadierPath, 'utf8');
