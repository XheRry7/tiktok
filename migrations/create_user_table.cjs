module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isActiveUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      birthDay: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      timeAccountCreation: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      }
    });
    await queryInterface.addColumn('Users', 'profileId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Profiles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
