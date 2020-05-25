import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        admin: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        date_of_birth: DataTypes.DATEONLY,
        cellphone_number: DataTypes.STRING,
        landline: DataTypes.STRING,
        extension: DataTypes.INTEGER,
        address_id: DataTypes.INTEGER,
        organization_id: DataTypes.INTEGER,
        job_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tablename: 'users',
      }
    );
  }
}
