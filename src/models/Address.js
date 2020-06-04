import {
    Model,
    DataTypes
  } from 'sequelize';
  
  export default class Address extends Model {
    static init(sequelize) {
      super.init({
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        neighborhood: DataTypes.STRING,
        zip_code: DataTypes.INTEGER,
        reference_point: DataTypes.STRING,
        complement: DataTypes.STRING,
      }, {
        sequelize,
        tablename: 'addresses',
      });
    }
  
    static async associate(models) {
      await this.belongsTo(models.Country, {
        foreignKey: 'country_id',
        as: 'country',
      });
    }
  }
  