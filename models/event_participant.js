module.exports = (sequelize, DataTypes) => {
  const event_participant = sequelize.define('event_participant', {
    event_confirmation_id: DataTypes.INTEGER,
    cn_code: DataTypes.STRING,
    name: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    confirmation_code: DataTypes.DATE,
  }, {
      tableName: 'event_participant'
  });

  return event_participant;
};