import {
  Model,
  DataTypes
} from 'sequelize';

export default class Country extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      letter_code: DataTypes.STRING,
      calling_code: DataTypes.STRING,
    }, {
      sequelize,
      tablename: 'countries',
    });
  }
}
