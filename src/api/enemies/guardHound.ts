import * as fs from 'fs';
import * as path from 'path';

const guardHoundPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'guardHound.toml');
export const guardHoundData = fs.readFileSync(guardHoundPath, 'utf8');
