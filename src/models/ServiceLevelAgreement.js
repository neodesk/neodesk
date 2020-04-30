import { Model, DataTypes } from 'sequelize';

class ServiceLevelAgreement extends Model {
  static init(connection) {
    super.init({
      time: DataTypes.TIME,
      priority: DataTypes.INTEGER,
    });
  }
}
