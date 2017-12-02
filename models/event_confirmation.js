module.exports = (sequelize, DataTypes) => {
  const event_confirmation = sequelize.define('event_confirmation', {
    event_id: DataTypes.INTEGER,
  }, {
      tableName: 'event_confirmation'
  });

    event_confirmation.associate = (models) => {
        event_confirmation.hasMany(models.event_participant, {
            foreignKey: 'event_confirmation_id',
            as: 'participants',
            onDelete: 'cascade'
        });
    }

  return event_confirmation;
};