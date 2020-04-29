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
    this.belongsTo(models.Type, {
      foreignKey: 'id',
      as: 'ticket_type',
    });
    this.belongsTo(models.ServiceLevelAgreement, {
      foreignKey: 'id',
      as: 'service_level',
    });
    this.belongsTo(models.OperatorGroup, {
      foreignKey: 'id',
      as: 'operator_group',
    });
  }
}

export default Ticket;
