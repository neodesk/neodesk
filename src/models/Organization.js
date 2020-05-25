import { Model, DataTypes } from 'sequelize';

export default class Operator extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.TEXT,
        description: DataTypes.STRING,
        type: DataTypes.STRING,
        address_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tablename: 'operators',
      }
    );
  }
}
