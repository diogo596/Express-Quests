const app = require('./src/app');
require('dotenv').config();

const port = 5500;

app
  .listen(port, () => {
    console.log(`Server is listening on ${port}`);
  })
  .on('error', (err) => {
    console.error('Error:', err.message);
  });
