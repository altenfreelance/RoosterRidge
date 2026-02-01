const { execSync } = require('child_process');

console.log('Copying images without compression (compatible with all platforms)');

try {
    execSync('cp -r images-temp/* public/images/', { stdio: 'inherit' });
    console.log('Images copied successfully');
} catch (error) {
    console.error('Error copying images:', error.message);
    process.exit(1);
}
