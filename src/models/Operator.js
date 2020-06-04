import {
  Model,
  DataTypes
} from 'sequelize';

export default class Operator extends Model {
  static init(sequelize) {
    super.init({
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
      bio: DataTypes.TEXT
    }, {
      sequelize,
      tablename: 'operators',
    });

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
