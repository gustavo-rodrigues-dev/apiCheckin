module.exports = (app) => {
    const EventConfirmationController = app.controllers.event_confirmation;

    app
        .get('/events', EventConfirmationController.find)
        .post('/events', EventConfirmationController.create)
        .put('/events', EventConfirmationController.create)
        .get('/event/:id', EventConfirmationController.findOne)
}