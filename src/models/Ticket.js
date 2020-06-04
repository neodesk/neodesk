  import {
    Model,
    DataTypes
  } from 'sequelize';

  export default class Ticket extends Model {
    static init(sequelize) {
      super.init({
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        main_ticket: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
      }, {
        sequelize,
        tablename: 'tickets',
      });
    }

    static async associate(models) {
      await this.belongsTo(models.Type, {
        foreignKey: 'types_id',
        as: 'ticket_type',
      });
      await this.belongsTo(models.ServiceLevelAgreement, {
        foreignKey: 'service_level_agreements_id',
        as: 'ticket_service_level_agreement',
      });
      await this.belongsTo(models.OperatorGroup, {
        foreignKey: 'operator_groups_id',
        as: 'ticket_operator_group',
      });
      await this.belongsTo(models.User, {
        foreignKey: 'users_id',
        as: 'ticket_user',
      });
      await this.belongsTo(models.User, {
        foreignKey: 'users_address_id',
        as: 'ticket_user_address',
      });
      await this.belongsTo(models.User, {
        foreignKey: 'users_organization_id',
        as: 'ticket_user_organization',
      });
    }
  }
