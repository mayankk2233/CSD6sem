const fs = require('fs');
fs.readFile('file1.txt', (err, data1) => {
  if (err) throw err;
  fs.readFile('file2.txt', (err, data2) => {
    if (err) throw err;
    fs.readFile('file3.txt', (err, data3) => {
      if (err) throw err;
      // Use data1, data2, and data3
    });
  });
});