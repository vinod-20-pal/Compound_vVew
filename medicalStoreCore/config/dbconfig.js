module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Vinod@123',
  DB: "vinod",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
