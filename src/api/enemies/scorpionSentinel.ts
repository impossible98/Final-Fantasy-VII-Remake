import * as fs from 'fs';
import * as path from 'path';

const scorpionSentinelPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'scorpionSentinel.toml');
export const scorpionSentinelData = fs.readFileSync(scorpionSentinelPath, 'utf8');
