module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Profiles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bio: {
        type: Sequelize.STRING,
      },
      posts: {
        type: Sequelize.JSON,
      },
      followers: {
        type: Sequelize.JSON,
      },
      following: {
        type: Sequelize.JSON,
      },
      likes: {
        type: Sequelize.INTEGER,
      },
      liked: {
        type: Sequelize.INTEGER,
      },
      ProfilePicture: {
        type: Sequelize.BLOB,
      },
    });
    await queryInterface.addColumn("Profiles", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("profiles");
  },
};
