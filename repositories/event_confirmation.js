module.exports = (app) => {
    const EventConfirmationModel = app.datasource.models.event_confirmation;
    const EventParticipantModel = app.datasource.models.event_participant;
    
    class EventConfirmationRepository {
        static find(filter){
            let queryParams = {
                where: {},
                limit: 50000,
                offset: 0,
                include: [
                    'participants'
                ]
            };

            if('id' in filter){
                queryParams.where.id = filter.id;
            }

            if('event_id' in filter){
                queryParams.where.event_id = filter.event_id;
            }

            if('name' in filter){
                filter.where.name = `%${filter.name}%`;

                queryParams.where.name = {
                    [Op.iLike]: filter.name
                }
            }

            if('offset' in filter){
                queryParams.offset = filter.offset
            }

            return EventConfirmationModel.findAll(queryParams);
        }

        static createOrUpdate(event, partcipants){
            return app.datasource.sequelize.transaction({
                isolationLevel: app.datasource.Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
            }, (t) => {
                return EventConfirmationModel.findOrCreate({
                    where: {
                        event_id: event.event_id
                    },
                    defaults: event,
                    transaction: t
                }).spread((event_confirmation, created) => {
                    let participants =  partcipants.map((self) => {
                        self.event_confirmation_id = event_confirmation.id;

                        return self;
                    }).reduce((self, current) => {

                        self.push(
                            EventParticipantModel.findOrCreate({
                                where: {
                                    confirmation_code: current.confirmation_code,
                                    event_confirmation_id: current.event_confirmation_id
                                },
                                defaults: current,
                                transaction: t
                            }).spread((participationConfimate, created) => {
                                if(!created){
                                   return EventParticipantModel.update(current,{
                                       where: {
                                           confirmation_code: current.confirmation_code,
                                           event_confirmation_id: current.event_confirmation_id
                                       },
                                       transaction: t
                                   });
                                }
                                return participationConfimate;
                            })
                        )

                        return self;
                    }, []);

                   return Promise.all(participants)
                        .then((ev) => {
                            console.log(ev[0]);
                            return event_confirmation.id;
                        })
                       .catch(err => {
                           return err;
                       })
                })
            })
            .then(id => {
                return EventConfirmationRepository.find({id: id});
            })
            .catch(error => {
                app.logger.error('Error on save events', error);

                return false;
            })
        }
    }

    return EventConfirmationRepository;
};