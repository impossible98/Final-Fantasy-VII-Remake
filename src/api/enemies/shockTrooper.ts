import * as fs from 'fs';
import * as path from 'path';

const shockTrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'shockTrooper.toml');
export const shockTrooperData = fs.readFileSync(shockTrooperPath, 'utf8');
