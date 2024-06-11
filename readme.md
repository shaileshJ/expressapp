Dockerized Nodejs- Express App with mysql DB.
Refernce for NodeJs-ExpressAPP - [ExpressAPI/readme.md](https://github.com/shaileshJ/node_apps/blob/master/ExpressAPI/readme.md)https://github.com/shaileshJ/node_apps/blob/master/ExpressAPI/readme.md

Tip
If you are facing below error while connecting to mysql
  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true

  Do
  1st run this code ->
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

  2nd
  flush privileges;



