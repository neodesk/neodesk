import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class Domain extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
      }, {
        sequelize,
        tablename: 'domains',
      });
    }
  
    static async associate(models) {
      await this.belongsTo(models.CommercialContact, {
        foreignKey: 'commercial_contact_id',
        as: 'commercial_contact',
      });
    }
  }
  