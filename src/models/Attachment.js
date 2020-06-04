import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class Attachment extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
        url: DataTypes.STRING,
      }, {
        sequelize,
        tablename: 'attachments',
      });
    }
  
    static async associate(models) {
      await this.belongsTo(models.Interaction, {
        foreignKey: 'interactions_id',
        as: 'attachment_interaction',
      });
      await this.belongsTo(models.Interaction, {
        foreignKey: 'interactions_tickets_id',
        as: 'attachment_interaction_ticket',
      });
      await this.belongsTo(models.Interaction, {
        foreignKey: 'interactions_tickets_types_id',
        as: 'attachment_interaction_ticket_type',
      });
      await this.belongsTo(models.Interaction, {
        foreignKey: 'interactions_tickets_users_id',
        as: 'attachment_interaction_ticket_user',
      });
      await this.belongsTo(models.Interaction, {
        foreignKey: 'interactions_tickets_users_address_id',
        as: 'attachment_interaction_ticket_user_address',
      });
      await this.belongsTo(models.Interaction, {
        foreignKey: 'interactions_tickets_users_organization_id',
        as: 'attachment_interaction_ticket_user_organization',
      });
    }
  }
  