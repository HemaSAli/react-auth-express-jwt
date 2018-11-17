const app = require('./app');
const { connection } = require('./database/models');

const port = process.env.PORT || 4000;
connection.sync().then(() => {
  app.listen(port, () =>
    console.log(`started on port :  ${port}`)
  );
})