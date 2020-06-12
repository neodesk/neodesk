import {
  Model,
  DataTypes
} from 'sequelize';

export default class City extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      calling_code: DataTypes.STRING,
    }, {
      sequelize,
      tablename: 'cities',
    });
  }

  static async associate(models) {
    await this.belongsTo(models.State, {
      foreignKey: 'state_id',
      as: 'state',
    });
  }
}
