module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    location_id: {
      type: DataTypes.STRING,
      primaryKey: true
   },
   location_code: {
      type: DataTypes.STRING,
      allowNull: true
   },
   location_name: {
      type: DataTypes.STRING,
      allowNull: true
   },
   latitude: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
   },
   longitude: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
   },
   location: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true
   },
   reviews: {
    type: DataTypes.STRING,
    allowNull: true
 },
  age : {
    type: DataTypes.STRING,
    allowNull: true
  },
  priceRange : {
    type: DataTypes.STRING,
    allowNull: true
  },
  });

  Business.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Business.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Business;
};
