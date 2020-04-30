import { Model, DataTypes } from 'sequelize';

export default class Ticket extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        main_ticket: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        user_address_id: DataTypes.INTEGER,
        user_organization_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tablename: 'tickets',
      }
    );
  }

  static async associate(models) {
    await this.belongsTo(models.Type, {
      foreignKey: 'type_id',
      as: 'ticket_type',
    });
    await this.belongsTo(models.ServiceLevelAgreement, {
      foreignKey: 'service_level_agreements_id',
    });
    await this.belongsTo(models.OperatorGroup, {
      foreignKey: 'operator_groups_id',
    });
  }
}
