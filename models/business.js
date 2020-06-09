module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
   },
    type: {
      type: DataTypes.STRING,
      allowNull: true
   },
    address: {
      type: DataTypes.STRING,
      allowNull: true
   },
   lat: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true,
      // defaultValue: null
   },
   lng: {
      type: DataTypes.DOUBLE(10,6),
      allowNull: true,
      // defaultValue: null
   },
//    location: {
//       type: DataTypes.GEOMETRY('POINT'),
//       allowNull: true
//    },
//    reviews: {
//     type: DataTypes.STRING,
//     allowNull: true
//  },
//   age : {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   priceRange : {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
  },{
    timestamps: false
  });

  // Business.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Business.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Business;
};
