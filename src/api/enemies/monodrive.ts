import * as fs from 'fs';
import * as path from 'path';

const monodrivePath = path.join(__dirname, '..', '..', 'data', 'enemies', 'monodrive.toml');
export const monodriveData = fs.readFileSync(monodrivePath, 'utf8');
