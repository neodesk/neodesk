import {
  Model,
  DataTypes
} from 'sequelize';

export default class Location extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tablename: 'locations',
      timestamps: false,
    });
  }

  static async associate(models) {
    await this.belongsTo(models.Organization, {
      foreignKey: 'organization_id',
      as: 'location_organization',
    });
    await this.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'location_address',
    });
    await this.belongsTo(models.CommercialContact, {
      foreignKey: 'commercial_contacts_id',
      as: 'location_commercial_contact',
    });
  }
}
