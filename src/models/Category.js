import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class Category extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        icon: DataTypes.INTEGER,
      }, {
        sequelize,
        tablename: 'categories',
      });
    }
  
    static async associate(models) {
      await this.belongsTo(models.Department, {
        foreignKey: 'departments_id',
        as: 'departments',
      });
    }
  }
  