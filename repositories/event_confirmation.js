module.exports = (app) => {
    const model = app.datasource.models.event_confirmation;
    
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

            if('event_id' in filter){
                queryParams.event_id = filter.event_id;
            }

            if('name' in filter){
                filter.name = `%${filter.name}%`;

                queryParams.where.name = {
                    [Op.iLike]: filter.name
                }
            }

            if('offset' in filter){
                queryParams.offset = filter.offset
            }

            return model.findAll(queryParams);
        }
    }

    return EventConfirmationRepository;
};