module.exports = (app) => {
    const EventConfirmationController = app.controllers.event_confirmation;

    app
        .get('/events/', EventConfirmationController.find)
}