module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      id: { type: Sequelize.BIGINT(), primaryKey: true },
      username: { type: Sequelize.STRING(255) },
      firstname: { type: Sequelize.STRING(255) },
      lastname: { type: Sequelize.STRING(255) },
    },
    {
      tableName: "user1",
    }
  );

  return user;
};
