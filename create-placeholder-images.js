const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Creating placeholder image directories (copying without compression for compatibility)');

try {
    // Ensure the compressed directory exists
    if (!fs.existsSync('public/images/compressed')) {
        fs.mkdirSync('public/images/compressed', { recursive: true });
    }

    // Copy images to compressed directory, excluding the compressed directory itself
    execSync('rsync -a --exclude=compressed public/images/ public/images/compressed/', { stdio: 'inherit' });
    console.log('Placeholder images copied successfully');
} catch (error) {
    console.error('Error creating placeholders:', error.message);
    process.exit(1);
}
