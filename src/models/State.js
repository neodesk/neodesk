import {
  Model,
  DataTypes
} from 'sequelize';

export default class State extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      letter_code: DataTypes.STRING,
      calling_code: DataTypes.STRING,
    }, {
      sequelize,
      tablename: 'states',
    });
  }

  static async associate(models) {
    await this.belongsTo(models.City, {
      foreignKey: 'capital_city_id',
      as: 'capital_city',
    });
    await this.belongsTo(models.Country, {
      foreignKey: 'country_id',
      as: 'country',
    });
  }
}
