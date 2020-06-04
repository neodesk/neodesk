import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class OrganizationalEmail extends Model {
    static init(sequelize) {
      super.init({
        email: DataTypes.STRING,
      }, {
        sequelize,
        tablename: 'organizational_emails',
      });
    }
  
    static async associate(models) {
      await this.belongsTo(models.CommercialContact, {
        foreignKey: 'commercial_contact_id',
        as: 'commercial_contact',
      });
    }
  }
  