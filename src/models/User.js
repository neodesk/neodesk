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
      },
      {
        sequelize,
        tablename: 'users',
      }
    );
  }

  static async associate(models) {
    await this.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'operator_address',
    });
    await this.belongsTo(models.Organization, {
      foreignKey: 'organization_id',
      as: 'operator_organization',
    });
    await this.belongsTo(models.Job, {
      foreignKey: 'job_id',
      as: 'operator_job',
    });
  }
}
