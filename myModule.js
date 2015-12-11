module.exports = function (dir, filter, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dir, function (err, files) {
        if (err) {
            callback(err);
        }
        else {
            var filesWithExtension = files.filter(function (filename) {
                return path.extname(filename) === "." + filter;
            });
            callback(null, filesWithExtension);
        }
    });
};