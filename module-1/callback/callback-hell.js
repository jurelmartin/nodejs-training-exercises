const fs = require('fs');

fs.readFile('file1.txt', 'utf8', function(err, data1){
    if(err) {
        console.error(err);
    } else {
        fs.readFile('file2.txt', 'utf8', function(err, data2){
            if(err) {
                console.error(err);
            } else {
                fs.readFile('file3.txt', 'utf8', function(err, data3){
                    if(err) {
                        console.error(err);
                    } else {
                        console.log(data1, data2, data3);
                    }
                });
            }
        });
    }
});
