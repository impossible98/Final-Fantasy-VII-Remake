import * as fs from 'fs';
import * as path from 'path';

const sweeperPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sweeper.toml');
export const sweeperData = fs.readFileSync(sweeperPath, 'utf8');
