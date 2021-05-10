import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        text: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        done: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Task;
