import * as fs from 'fs';
import * as path from 'path';

const securityOfficerPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'securityOfficer.toml');
export const securityOfficerData = fs.readFileSync(securityOfficerPath, 'utf8');
