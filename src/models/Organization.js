import {
  Model,
  DataTypes
} from 'sequelize';

export default class Organization extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.TEXT,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
    }, {
      sequelize,
      tablename: 'organizations',
    });
  }

  static async associate(models) {
    await this.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'address',
    });
  }
}
