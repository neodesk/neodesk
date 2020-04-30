import { Model, DataTypes } from 'sequelize';

export default class Type extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
        tablename: 'types',
      }
    );
  }
}
