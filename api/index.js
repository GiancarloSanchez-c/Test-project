const app = require('./src/app');
require('dotenv').config();
const { PORT } = process.env;
require('./src/db');
const { createDivisions, createSubDivisions, createUsers } = require('./src/mock')


app.listen(PORT || 3001, () => {
  /*createDivisions();
 createSubDivisions(); 
 createUsers(); */
  console.log(`🚀 Server on PORT ${PORT}`);
})