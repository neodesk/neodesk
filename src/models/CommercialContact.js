import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class CommercialContact extends Model {
    static init(sequelize) {
      super.init({
        primary_email: DataTypes.STRING,
        landline_number: DataTypes.STRING,
        extension: DataTypes.INTEGER,
      }, {
        sequelize,
        tablename: 'commercial_contacts',
      });
    }
  }
  