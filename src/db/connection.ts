import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('company', 'root', 'laynes27', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;