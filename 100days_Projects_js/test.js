import * as fs from 'fs';
fs.writeFile('message.txt', (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });