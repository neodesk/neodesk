import { Model, DataTypes } from 'sequelize';

export default class Job extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.TEXT,
        description: DataTypes.STRING,
        department: DataTypes.STRING,
        seniority: DataTypes.STRING,
      },
      {
        sequelize,
        tablename: 'jobs',
      }
    );
  }
}
