const fs = require('fs');

const filePath = 'poem.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:');
  console.log(data);
});
