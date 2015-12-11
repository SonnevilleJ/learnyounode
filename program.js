var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
    if (err) throw err;

    var filesWithExtension = files.filter(function (filename) {
        return path.extname(filename) === "." + process.argv[3];
    });
    console.log(filesWithExtension.join('\n'));
});
