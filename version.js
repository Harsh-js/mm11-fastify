const npm = require('npm');

npm.load(() => {
    // Update the version property
    npm.commands.version(['major'], (error) => {
        if (error) {
            console.error('Error updating version:', error);
        } else {
            console.log('Version updated successfully');
        }
    });
});
