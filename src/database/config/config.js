
module.exports={
  "development": {
    "username": process.env.SEQUELIZE_USERNAME,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.SEQUELIZE_DATABASE,
    "host": process.env.SEQUELIZE_HOST,
    "dialect": process.env.SEQUELIZE_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
