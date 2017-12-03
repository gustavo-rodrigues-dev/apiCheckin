module.exports = (app) => {
    const EventConfirmationController = app.controllers.event_confirmation;

    app
        .get('/events', EventConfirmationController.find)
        .post('/events', EventConfirmationController.create)
        .put('/events', EventConfirmationController.create)
        .get('/event/:id', EventConfirmationController.findOne)
        .get('/v1/events', EventConfirmationController.find)
        .post('/v1/events', EventConfirmationController.create)
        .put('/v1/events', EventConfirmationController.create)
        .get('/v1/event/:id', EventConfirmationController.findOne)
    ;
}