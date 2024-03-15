const { writeFileSync } = require('fs');

var args = process.argv.slice(2);
console.log(args)
//check to see if script ran from package 1.
if (args[0].includes("package1")) {
    const package1 = require('./packages/package1/package.json');
    const currentVersion = package1.version;
    console.log("found current version for the package 1:", currentVersion)

    // Update the dependencies in Package 2 and Package 3
    const package2 = require('rp-hellow-package2/package.json');
    const package3 = require('rp-hellow-package3/package.json');

    package2.dependencies['rp-hellow-package1'] = `^${currentVersion}`;
    package3.dependencies['rp-hellow-package1'] = `^${currentVersion}`;

    writeFileSync('../package2/package.json', JSON.stringify(package2, null, 2));
    writeFileSync('../package3/package.json', JSON.stringify(package3, null, 2));

    console.log('Updated dependencies in packages');
}
else {
    console.log('No dependencies to update')
}