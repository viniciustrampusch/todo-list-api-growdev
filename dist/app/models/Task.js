"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Task extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        text: {
          type: _sequelize2.default.DataTypes.STRING,
          allowNull: false,
        },
        done: {
          type: _sequelize2.default.DataTypes.BOOLEAN,
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

exports. default = Task;
