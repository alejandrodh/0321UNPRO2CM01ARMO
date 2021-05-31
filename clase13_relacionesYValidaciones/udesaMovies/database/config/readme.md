//Archivo genérico. Para usar borrar esta líena, cargar las credenciales correctas y mofificar la extensión por .js

module.exports = {
  "development": {
    "username": "root",
    "password": 'root',
    "database": "dbName",
    "host": "127.0.0.1",
    "dialect": "mysql"
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
