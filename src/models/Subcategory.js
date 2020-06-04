import {
  Model,
  DataTypes
} from 'sequelize';

export default class Subcategory extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      icon: DataTypes.INTEGER,
    }, {
      sequelize,
      tablename: 'subcategories',
    });
  }

  static async associate(models) {
    await this.belongsTo(models.Category, {
      foreignKey: 'categories_id',
      as: 'category',
    });
    await this.belongsTo(models.Category, {
      foreignKey: 'categories_departments_id',
      as: 'category_department',
    });
  }
}
