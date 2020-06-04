import {
  Model,
  DataTypes
} from 'sequelize';

export default class Interaction extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize,
      tablename: 'interactions',
    });
  }

  static async associate(models) {
    await this.belongsTo(models.Ticket, {
      foreignKey: 'tickets_id',
      as: 'interaction_ticket',
    });
    await this.belongsTo(models.Ticket, {
      foreignKey: 'tickets_types_id',
      as: 'interaction_ticket_type',
    });
    await this.belongsTo(models.Ticket, {
      foreignKey: 'tickets_users_id',
      as: 'interaction_ticket_user',
    });
    await this.belongsTo(models.Ticket, {
      foreignKey: 'tickets_users_address_id',
      as: 'interaction_ticket_user_address',
    });
    await this.belongsTo(models.Ticket, {
      foreignKey: 'tickets_users_organization_id',
      as: 'interaction_ticket_user_organization',
    });
    await this.belongsTo(models.Operator, {
      foreignKey: 'operators_id',
      as: 'interaction_operator',
    });
    await this.belongsTo(models.Operator, {
      foreignKey: 'operators_address_id',
      as: 'interaction_operator_address',
    });
    await this.belongsTo(models.Operator, {
      foreignKey: 'operators_organization_id',
      as: 'interaction_operator_organization',
    });
    await this.belongsTo(models.User, {
      foreignKey: 'users_id',
      as: 'interaction_user',
    });
    await this.belongsTo(models.User, {
      foreignKey: 'users_address_id',
      as: 'interaction_user_address',
    });
    await this.belongsTo(models.User, {
      foreignKey: 'users_organization_id',
      as: 'interaction_user_organization',
    });
  }
}
