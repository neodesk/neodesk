import { Model, DataTypes } from 'sequelize';

export default class OperatorGroup extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        level: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
        tableName: 'operator_groups',
      }
    );
  }
}
