const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ng04/runtime.js',
        './dist/ng04/polyfills.js',
        './dist/ng04/scripts.js',
        './dist/ng04/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-vote.js');
    //await fs.copyFile('./dist/ng04/styles.css', 'elements/styles.css')
    //await fs.copy('./dist/ng04/assets/', 'elements/assets/')
})()