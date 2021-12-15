import * as fs from 'fs';
import * as path from 'path';

const theHuntsmanPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'theHuntsman.toml');
export const theHuntsmanData = fs.readFileSync(theHuntsmanPath, 'utf8');
