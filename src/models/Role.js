import { Model, DataTypes } from 'sequelize';

export default class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
      },
      {
        sequelize,
        tablename: 'roles',
      }
    );
  }
}
