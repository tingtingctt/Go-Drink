module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    location_id: {
      type: Sequelize.STRING,
      primaryKey: true
   },
   location_code: {
      type: Sequelize.STRING,
      allowNull: true
   },
   location_name: {
      type: Sequelize.STRING,
      allowNull: true
   },
   latitude: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
   },
   longitude: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
   },
   location: {
      type: Sequelize.GEOMETRY('POINT'),
      allowNull: true
   },
   reveiws: {
    type: Sequelize.STRING,
    allowNull: true
 },
  age : {
    type: Sequelize.STRING,
    allowNull: true
  },
  priceRange : {
    [Op.or]: [{
      from: {
          [Op.between]: [0, 10]
      }
  },{
    from: {
          [Op.between]: [11, 15]
    }
  }, {
      from: {
          [Op.between]: [16, 30]
      }
  }]

  },
  });
};

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
