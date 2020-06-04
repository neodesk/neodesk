import { Model, DataTypes } from 'sequelize';

export default class Type extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
        tablename: 'types',
      }
    );
  }

  static async associate(models) {
    await this.belongsTo(models.Subcategory, {
      foreignKey: 'subcategories_id',
      as: 'type_subcategory',
    });
    await this.belongsTo(models.Subcategory, {
      foreignKey: 'subcategories_categories_id',
      as: 'type_subcategory_category',
    });
    await this.belongsTo(models.Subcategory, {
      foreignKey: 'subcategories_categories_departments_id',
      as: 'type_subcategory_category_department',
    });
  }
}
