const { writeFileSync } = require('fs');

// Read the current version of Package 1
const package1 = require('./package1/package.json');
const currentVersion = package1.version;

// Update the dependencies in Package 2 and Package 3
const package2 = require('./package2/package.json');
const package3 = require('./package3/package.json');

package2.dependencies['Package1'] = `^${currentVersion}`;
package3.dependencies['Package1'] = `^${currentVersion}`;

// Write the updated package.json files
writeFileSync('./package2/package.json', JSON.stringify(package2, null, 2));
writeFileSync('./package3/package.json', JSON.stringify(package3, null, 2));

console.log('Updated dependencies in Package 2 and Package 3');
