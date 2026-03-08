import { execSync } from 'child_process';
import fs from 'fs';

console.log('Creating placeholder image directories');

try {
    if (!fs.existsSync('public/images/compressed')) {
        fs.mkdirSync('public/images/compressed', { recursive: true });
    }
    execSync('rsync -a --exclude=compressed public/images/ public/images/compressed/', { stdio: 'inherit' });
    console.log('Placeholder images copied successfully');
} catch (error) {
    console.error('Error creating placeholders:', error.message);
    process.exit(1);
}
