import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class Feedback extends Model {
    static init(sequelize) {
      super.init({
        rating: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
      }, {
        sequelize,
        tablename: 'feedbacks',
      });
    }
  
    static async associate(models) {
      await this.belongsTo(models.User, {
        foreignKey: 'users_id',
        as: 'feedback_user',
      });
      await this.belongsTo(models.User, {
        foreignKey: 'users_address_id',
        as: 'feedback_user_address',
      });
      await this.belongsTo(models.User, {
        foreignKey: 'users_organization_id',
        as: 'feedback_user_organization',
      });
      await this.belongsTo(models.Ticket, {
        foreignKey: 'tickets_id',
        as: 'feedback_ticket',
      });
      await this.belongsTo(models.Ticket, {
        foreignKey: 'tickets_types_id',
        as: 'feedback_ticket_type',
      });
      await this.belongsTo(models.Ticket, {
        foreignKey: 'tickets_users_id',
        as: 'feedback_ticket_user',
      });
      await this.belongsTo(models.Ticket, {
        foreignKey: 'tickets_users_address_id',
        as: 'feedback_ticket_user_address',
      });
      await this.belongsTo(models.Ticket, {
        foreignKey: 'tickets_users_organization_id',
        as: 'feedback_ticket_user_organization',
      });
    }
  }
  