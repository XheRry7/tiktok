import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: 'tiktok-clone',
    username: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
      timestamps: false, 
    },
  });
  
export default sequelize;