import {
  Model,
  DataTypes
} from 'sequelize';

export default class ServiceLevelAgreement extends Model {
  static init(connection) {
    super.init({
      time: DataTypes.TIME,
      priority: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      tableName: 'service_level_agreements',
      timestamps: false,
    });
  }

  static async associate(models) {
    await this.belongsTo(models.Type, {
      foreignKey: 'types_id',
      as: 'type',
    });
  }
}
