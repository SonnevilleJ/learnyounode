var myModule = require('./myModule');

myModule(process.argv[2], process.argv[3], function (err, data) {
    console.log(data.join('\n'));
});
