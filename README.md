# react-auth-express-jwt

#### this projcet is about how to use JWT auth in an react application, so you can protect your routes.
#### How to run 
- Clone the repo
- run ``` npm i ``` in the root path 
- cd client/ then run ``` npm i ```
- create your database
- create ``` config.env ```
- put your secret and database data in config.env: 
```
 dbName = WRITE_DBNAME
 dbUser = WRITE_DBUSER
 dbPassword = WRITE_DBPASSWORD
 SECRET = WRITE_YOURSECRET
```
- run ``` npm run server ``` to start the server and create the database
- you will see that your database has one table which is ```users```
- add fake username & password to this table from terminal, you will use it for login
- run ``` npm run dev ``` to start the application



#### Tech stack

- React.js
- PostgreSQL
- Sequelize
- Node.js
