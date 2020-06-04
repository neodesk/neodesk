import {
  Model,
  DataTypes
} from 'sequelize';

export default class Update extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
    }, {
      sequelize,
      tablename: 'updates',
    });
  }

  static async associate(models) {
    await this.belongsTo(models.Operator, {
      foreignKey: 'operators_id',
      as: 'operator',
    });
    await this.belongsTo(models.Operator, {
      foreignKey: 'operators_address_id',
      as: 'operators_address',
    });
    await this.belongsTo(models.Operator, {
      foreignKey: 'operators_organization_id',
      as: 'operators_organization',
    });
  }
}
