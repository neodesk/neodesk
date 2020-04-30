import { Model, DataTypes } from 'sequelize';

class Ticket extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        main_ticket: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
      },
      {
        sequelize,
        tablename: 'tickets',
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Type, {
      foreignKey: 'type_id',
      as: 'ticket_type',
    });
    this.hasOne(models.ServiceLevelAgreement, {
      foreignKey: 'service_level_agreements_id',
      as: 'ticket_service_level',
    });
    this.hasOne(models.OperatorGroup, {
      foreignKey: 'operator_groups_id',
      as: 'ticket_operator_group',
    });
  }
}

export default Ticket;
