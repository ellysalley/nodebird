module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false, 
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true, 
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false, 
    },
  }, {
    charset: 'utf8',
    collate: 'utf8-_general_ci', // for Korean 
  });

  User.associate = (db) => {
    db.User.hasMany(db.post);
    db.User.hasMany(db.comment);
  };

  return User;
};