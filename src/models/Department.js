import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class Department extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        icon: DataTypes.INTEGER ,
      }, {
        sequelize,
        tablename: 'departments',
      });
    }
  }
  