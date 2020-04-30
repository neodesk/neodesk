import { Model, DataTypes } from 'sequelize';

class Type extends Model {
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

export default Type;
