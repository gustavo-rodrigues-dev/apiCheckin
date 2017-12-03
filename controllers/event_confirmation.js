module.exports = (app) => {
    const EventConfirmationRepository = app.repositories.event_confirmation;

    class EventConfirmationController{
        static find(req, res){
            let filter = {};

            if('query' in req){
                filter = req.query;
            }

            if('body' in req){
                filter = req.body;
            }

            return EventConfirmationRepository.find(filter)
                .then(events => {
                    if(!events.length){
                        return res
                            .status(404)
                            .json(events)
                    }

                    return res
                        .status(200)
                        .json(events)
                })
                .catch(error => {
                    app.logger.error('Error on get event_confirmation', error);

                    return res
                        .status(500)
                        .send(error.message);
                })
            ;
        }

        static findOne(req, res){
            let filter = {};

            if('query' in req){
                filter = req.query;
            }

            if('body' in req){
                filter = req.body;
            }

            filter.id = req.params.id

            return EventConfirmationRepository.find(filter)
                .then(events => {
                    if(!events.length){
                        return res
                            .status(404)
                            .json(events)
                    }

                    return res
                        .status(200)
                        .json(events[0])
                })
                .catch(error => {
                    app.logger.error('Error on get event_confirmation', error);

                    return res
                        .status(500)
                        .send(error.message);
                })
                ;
        }

        static create(req, res){
            let filter = {};

            if('query' in req){
                filter = req.query;
            }

            if('body' in req){
                filter = req.body;
            }

            let participants = filter.participants;
            delete filter.participants;

            return EventConfirmationRepository.createOrUpdate(filter, participants)
                .then(event => {
                    return res
                        .status(200)
                        .json(event[0])
                })
                .catch(error => {
                    return res
                        .status(500)
                        .send(error.message);
                });
        }
    }

    return EventConfirmationController;
};


