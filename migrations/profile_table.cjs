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
            allowNull: false,
          },
          posts: {
            type: Sequelize.JSON,
            allowNull: false,
          },
          followers: {
            type: Sequelize.JSON,
            allowNull: false,
          },
          following: {
            type: Sequelize.JSON,
            allowNull: false,
          },
          likes: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          liked: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          ProfilePicture: {
            type: Sequelize.BLOB,
            allowNull: true,
          },
      });
      await queryInterface.addColumn('Profiles', 'userId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable("profiles");
    },
  };
  