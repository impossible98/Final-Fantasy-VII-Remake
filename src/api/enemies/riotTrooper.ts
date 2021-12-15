import * as fs from 'fs';
import * as path from 'path';

const riotTrooperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'riotTrooper.toml');
export const riotTrooperData = fs.readFileSync(riotTrooperPath, 'utf8');
