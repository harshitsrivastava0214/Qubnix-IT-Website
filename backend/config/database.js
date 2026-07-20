const { Sequelize } = require("sequelize");
const config = require("./env")
const pg = require("pg")


const isProduction = config.ENV === "production";

const sequelize = isProduction
  ? new Sequelize(config.DATABASE_URL, {
      dialect: "postgres",
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
    })
  : new Sequelize(
      config.DB_NAME,
      config.DB_USER,
      config.DB_PASSWORD,
      {
        host: config.DB_HOST,
        port: config.DB_PORT,
        dialect: "postgres",
        logging: false,
      }
    );

module.exports = sequelize;