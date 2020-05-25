import { Model, DataTypes } from 'sequelize';

export default class Permission extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        allowed: DataTypes.INTEGER,
        action: DataTypes.STRING,
        target: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        sequelize,
        tablename: 'permissions',
      }
    );
  }
}
