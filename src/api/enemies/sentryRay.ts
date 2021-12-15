import * as fs from 'fs';
import * as path from 'path';

const sentryRayPath = path.join(__dirname, '..', '..', 'data', 'enemies', 'sentryRay.toml');
export const sentryRayData = fs.readFileSync(sentryRayPath, 'utf8');
