module.exports = {
  dialect: 'postgres',
  host: 'URL',
  database: 'DATABASE',
  username: 'USERNAME',
  password: 'PASSWORD',
  extras: {
    ssl: true,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
