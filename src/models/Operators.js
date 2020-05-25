import { Model, DataTypes } from 'sequelize';

export default class Operator extends Model {
  static init(sequelize) {
    super.init(
      {
        admin: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        date_of_birth: DataTypes.DATEONLY,
        personal_email: DataTypes.STRING,
        cellphone_number: DataTypes.STRING,
        landline: DataTypes.STRING,
        extension: DataTypes.INTEGER,
        website: DataTypes.STRING,
        bio: DataTypes.TEXT,
        address_id: DataTypes.INTEGER,
        organization_id: DataTypes.INTEGER,
        job_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tablename: 'operators',
      }
    );
  }
}
